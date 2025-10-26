# Android Chrome (BrowserStack) + Percy Visual Test Scaffold

This scaffold runs a WebdriverIO test on a BrowserStack Android device (Chrome browser) and takes a Percy visual snapshot of https://www.amazon.in.

## What it does
- Starts a BrowserStack remote session for an Android device (Chrome).
- Opens `https://www.amazon.in`.
- Waits for the page to load and takes a Percy snapshot named "Amazon India - Android Chrome".
- Prints the BrowserStack session URL in the test logs so you can paste it into your assignment sheet.

## Files included
- `package.json` - Node project manifest
- `wdio.conf.js` - WebdriverIO config pointed at BrowserStack
- `tests/amazon_android.spec.js` - Test that opens Amazon and snapshots with Percy
- `.github/workflows/ci.yml` - Example GitHub Actions workflow
- `docs/ASSIGNMENT_PLACEHOLDER.md` - Where to paste build URLs
- `.gitignore`

## Quick setup
1. Install Node.js (16+ recommended).
2. Unzip this folder and `cd` into it.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set environment variables (locally or CI):
   - `BROWSERSTACK_USERNAME` — BrowserStack username
   - `BROWSERSTACK_ACCESS_KEY` — BrowserStack access key
   - `PERCY_TOKEN` — Percy project token
   - Optionally:
     - `BROWSERSTACK_DEVICE` (default: "Google Pixel 7")
     - `BROWSERSTACK_OS_VERSION` (default: "13.0")
     - `BROWSERSTACK_BUILD_NAME`
5. Run tests:
   ```bash
   npx wdio run wdio.conf.js
   ```

## Where to find build URLs
- BrowserStack session link: the test prints a BrowserStack Automate session URL to stdout. Copy the build/session URL into your assignment sheet.
- Percy: check your Percy project dashboard after the run for the snapshot run URL.

## Notes
- This scaffold uses `@percy/webdriverio` which uploads snapshots to Percy. Ensure `PERCY_TOKEN` is set.
- BrowserStack Automate requires valid credentials. For the mobile browser run, no app upload is necessary.
- If you want a native app test instead, regenerate with Option 2.
