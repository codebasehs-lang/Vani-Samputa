# APK Build Notes (Vani-samputa)

Date: 2026-01-03

## Goal
Create an Android APK from this Create React App (React + React Router) project using Capacitor.

## What was added/changed

### 1) Capacitor setup added
- Added Capacitor dependencies:
  - `@capacitor/core`
  - `@capacitor/cli` (dev dependency)
  - `@capacitor/android`

- Added Capacitor config file:
  - `capacitor.config.json`
    - `appId`: `com.vanisamputa.app`
    - `appName`: `Vani Samputa`
    - `webDir`: `build`

### 2) Routing fix for Android
- Updated the app to use `HashRouter` automatically when running inside a native Capacitor container.
  - This prevents deep-link/reload issues inside Android WebView.

### 3) NPM scripts added
In `package.json` scripts:
- `android:add` → `cap add android`
- `android:sync` → build + `cap sync android`
- `android:open` → `cap open android`
- `apk:debug` → build/sync + `android/gradlew.bat assembleDebug`
- `apk:debug:open` → opens the debug APK output folder

Also set `homepage` to `.` so CRA builds with relative paths (works well for Capacitor).

### 4) Android project generated
- Ran Capacitor to create the Android wrapper project:
  - `npx cap add android`
  - `npx cap sync android`

This created the `android/` folder and copied web assets into:
- `android/app/src/main/assets/public`

### 5) Docs added
- Added guide file: `ANDROID_APP_SETUP.md`
- Updated `README.md` to point to that guide

## Current status / blocker

### Build tried
We ran:
- `npm run apk:debug`

### Error
Gradle failed with:
- `SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in android/local.properties`

### Diagnosis
Checked the default Windows SDK path:
- `%LOCALAPPDATA%\\Android\\Sdk`

Result: SDK folder NOT found on this machine.

## What to do next (tomorrow)

1) Install Android Studio
2) Android Studio → More Actions → SDK Manager → install at least one Android SDK Platform
3) Note the exact "Android SDK Location" path from Android Studio
4) Create/update this file:
   - `android/local.properties`

Example content:
```properties
sdk.dir=C:\\Users\\<you>\\AppData\\Local\\Android\\Sdk
```

5) Build the APK:
```bash
npm run apk:debug
```

6) The debug APK will be here:
- `android/app/build/outputs/apk/debug/app-debug.apk`

Optional: open the output folder:
```bash
npm run apk:debug:open
```

## Notes
- CRA build currently shows an ESLint warning in `src/components/Admin.js` (`copyToClipboard` unused). It does NOT stop the build.
- You can also create a Signed Release APK from Android Studio:
  - Build → Generate Signed Bundle / APK → APK
