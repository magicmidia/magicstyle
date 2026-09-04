import { inject, provide, type InjectionKey } from "vue";

export interface MsFieldContext {
  /** id for the control bound to this field */
  controlId: string;
  /** ids of description/error elements */
  describedBy: () => string | undefined;
  /** true when the field shows an error */
  invalid: () => boolean;
}

const FIELD_KEY: InjectionKey<MsFieldContext> = Symbol("ms-field");

export function provideFieldContext(context: MsFieldContext): void {
  provide(FIELD_KEY, context);
}

export function useFieldContext(): MsFieldContext | undefined {
  return inject(FIELD_KEY, undefined);
}
