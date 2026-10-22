import {
  computed,
  inject,
  onBeforeUnmount,
  provide,
  type ComputedRef,
  type InjectionKey,
} from "vue";
import { useMsId } from "./use-ms-id.ts";

export interface MsFieldContext {
  /** id for the control bound to this field (the one the <label for> points to) */
  controlId: string;
  /** id of the visible <label>, for group controls that need aria-labelledby */
  labelId?: string | undefined;
  /** ids of description/error elements */
  describedBy: () => string | undefined;
  /** true when the field shows an error */
  invalid: () => boolean;
  /**
   * Claims `controlId` for the calling control. Only the first control in a field
   * gets it, so several controls never share one id. Returns false if already taken.
   */
  claimControlId?: () => boolean;
  releaseControlId?: () => void;
}

export const FIELD_CONTEXT_KEY: InjectionKey<MsFieldContext> = Symbol("ms-field");

export function provideFieldContext(context: MsFieldContext): void {
  provide(FIELD_CONTEXT_KEY, context);
}

export function useFieldContext(): MsFieldContext | undefined {
  return inject(FIELD_CONTEXT_KEY, undefined);
}

export interface MsFieldControl {
  field: MsFieldContext | undefined;
  /** Unique id for this control: the field's controlId for the first control, a generated one otherwise. */
  id: string;
  describedBy: ComputedRef<string | undefined>;
  /** true when the surrounding MsField shows an error */
  fieldInvalid: ComputedRef<boolean>;
  /** id of the field label (for role="group"/"radiogroup" controls) */
  labelledBy: ComputedRef<string | undefined>;
}

/**
 * Connects a form control to the surrounding MsField (label `for`, aria-describedby,
 * aria-invalid) and guarantees a unique id even with several controls per field.
 */
export function useFieldControl(prefix: string): MsFieldControl {
  const field = useFieldContext();
  const fallbackId = useMsId(prefix);
  const claimed = field ? (field.claimControlId?.() ?? true) : false;
  if (claimed && field?.releaseControlId) onBeforeUnmount(field.releaseControlId);
  return {
    field,
    id: claimed && field ? field.controlId : fallbackId,
    describedBy: computed(() => field?.describedBy()),
    fieldInvalid: computed(() => field?.invalid() === true),
    labelledBy: computed(() => field?.labelId),
  };
}

/**
 * Splits fallthrough attrs for components with `inheritAttrs: false`: class/style
 * stay on the visual root, everything else (aria-*, required, autocomplete,
 * listeners such as onBlur) goes to the native form control.
 */
export function rootAttrs(attrs: Record<string, unknown>): Record<string, unknown> {
  return { class: attrs.class, style: attrs.style };
}

export function controlAttrs(attrs: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(attrs).filter(([name]) => name !== "class" && name !== "style"),
  );
}
