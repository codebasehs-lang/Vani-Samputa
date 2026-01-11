
# Android app (Capacitor) — Option B (loads hosted website)

You chose **Option B**: the Android APK acts as a WebView wrapper that loads your **hosted website**. This means any website update reflects in the app without rebuilding the APK.

## What you need (Windows)

- Node.js (already required)
- Android Studio (installs Android SDK + emulator tools)

## 1) Host the website

Deploy your React app to a public HTTPS URL (recommended). Example: `https://your-domain.com`.

## 2) Point Capacitor to your hosted URL

Edit [capacitor.config.json](capacitor.config.json) and replace:

- `https://REPLACE_WITH_YOUR_HOSTED_SITE`

with your real URL.

## 3) Generate/sync Android project and run

From the project root:

```bash
npx cap add android
npx cap sync android
npx cap open android
```

### Troubleshooting: "Unable to launch Android Studio. Is it installed?"

If Capacitor can't find Android Studio, set this environment variable to your Android Studio executable path.

PowerShell (current terminal session):

```powershell
$env:CAPACITOR_ANDROID_STUDIO_PATH="C:\Program Files\Android\Android Studio\bin\studio64.exe"
```

Then re-run:

```bash
npx cap open android
```

Optional (persist for future terminals):

```powershell
setx CAPACITOR_ANDROID_STUDIO_PATH "C:\Program Files\Android\Android Studio\bin\studio64.exe"
```

Then in Android Studio:
- Choose a device (emulator or USB device)
- Click **Run**

## Notes

- This mode requires internet connectivity.
- Keep `server.cleartext: false` unless you must use `http://` (not recommended).

## App icon (logo)

This Android project is configured to render the launcher icon as:
- your `logo.png` centered
- on a white circular background

To use your logo:

1) Add your logo file here (PNG recommended):
- `android/app/src/main/res/drawable/logo.png`

2) Rebuild/re-run the app from Android Studio.

Tip: Use a high-resolution square PNG (e.g. 512×512 or 1024×1024) with transparent background for best results.

## Apply icon changes (Android Studio)

After replacing/adding the logo, Android and the emulator launcher may cache the old icon. Use these steps to force refresh.

### A) Clean and run (recommended)

1) In Android Studio: **Build → Clean Project**
2) Then: **Run → Run 'app'** (or click the green **Run (▶)** button)

### B) If the emulator still shows the old icon

1) Uninstall the app from the emulator:
	- Long-press the app icon → **App info** → **Uninstall**
2) Run the app again from Android Studio.

### C) Terminal alternative (optional)

From the project root:

```bash
cd android
gradlew.bat clean
```

Then run again from Android Studio.

