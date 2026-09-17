@echo off
rem Magic-Style Windows Health Gate Runner
rem Bypasses PowerShell script execution policy restrictions by invoking pnpm.cmd directly
call pnpm.cmd validate
