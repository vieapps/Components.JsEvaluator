@echo off
REM set DOTNETFX=%SystemRoot%\Microsoft.NET\Framework\v4.0.30319
set DOTNETFX=%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319
set PATH=%PATH%;%DOTNETFX%
jsc /target:library /platform:anycpu VIEApps.Components.Utility.JsEval.js
