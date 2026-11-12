# Packaging for the App Store and Google Play

The app is a single web page, so the usual route is to wrap it in a native shell with [Capacitor](https://capacitorjs.com/). This folder already has a `package.json` and `capacitor.config.json` for that.

## What you need

| | Apple App Store | Google Play |
|---|---|---|
| Developer account | Apple Developer Program, $99 per year | Google Play Console, one-time $25 |
| Computer | A Mac with Xcode | Any computer with Android Studio |
| Store listing | Name, description, screenshots, privacy policy URL, support URL | Same, plus a Data safety form |

Check current fees and requirements on each store's site before you enroll.

## Build steps

1. Install [Node.js](https://nodejs.org/) (LTS).
2. In this folder, run:
   ```
   npm install
   npm run build:web
   npx cap add ios        # Mac only
   npx cap add android
   npm run sync
   ```
3. Open the native projects:
   ```
   npx cap open ios
   npx cap open android
   ```
4. In Xcode or Android Studio, set the app icon (use `icons/icon-512.png`), the bundle ID from `capacitor.config.json` (change `com.example.cardrotation` to your own, e.g. `org.yourname.cardrotation`), and the version number.
5. Build, test on a real phone, then upload through App Store Connect or the Play Console.

After any change to `index.html`, run `npm run build:web` and `npm run sync` again.

## Before you submit

- **Make it feel native.** Apple can reject apps that are only a website in a wrapper. The app already works offline and stores data on the device; family sync, notifications (for example a reminder on the 1st of each month) and a native share sheet for backups help further.
- **Privacy.** Host `PRIVACY.md` as a web page and use its URL in both store listings. In Google's Data safety form and Apple's privacy labels, the current version collects no data off the device.
- **Names and logos.** Use your own app name and icon. Naming card issuers in plain text is fine; don't use bank logos or card art.
- **Financial apps.** Make clear in the listing that the app doesn't connect to bank accounts, move money or give financial advice.
