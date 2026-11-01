# Daily Momentum: phone & tablet app

This folder is an installable web app (PWA). Host it once at a free address,
add it to your home screen, and from then on it opens like a normal app and
works with no internet.

## 1. Put it online (free, about 10 minutes, do this on your laptop)

1. Sign in at github.com and create a new **public** repository, e.g. `daily-momentum`.
2. Click **Add file → Upload files** and drag in every file from this folder
   (the files themselves, not the folder). Click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, pick **main** and **/ (root)**, then **Save**.
4. Wait 1 to 2 minutes. Your app is at
   `https://YOUR-USERNAME.github.io/daily-momentum/`

Only the app's code is public. Your activity data never leaves your device.

## 2. Install it

- **Android (Chrome):** open the link, tap the **Install** button in the app's
  top bar (or ⋮ menu → **Install app** / **Add to Home screen**).
- **iPhone / iPad (Safari):** open the link, tap **Share** → **Add to Home Screen**.
- **Laptop (Chrome / Edge):** open the link, click the install icon in the address bar.

Open it once while online. After that it works offline.

## 3. Your data

- Each device keeps its own copy. Phone and tablet do **not** sync automatically.
- To move data: ⚙ → **Export backup** on one device, send the file to the other
  (Drive, WhatsApp, email), then ⚙ → **Import backup** there.
- Data from the laptop file version imports the same way.
- Export weekly. Uninstalling the app or clearing browser data deletes the data.

## Updating the app later

Replace `index.html` in the repository. Devices pick up the new version
the second time you open the app while online.
