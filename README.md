# Daily Momentum

A daily activity tracker that installs on your phone, tablet or laptop and
works offline. Streaks, a weekly review, milestones, a focus timer and a
journal of daily wins.

## What's inside

| File | What it does |
|---|---|
| `index.html` | The whole app |
| `sw.js` | Makes it work offline and update itself |
| `manifest.webmanifest` | Name, icon and home-screen shortcuts |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | App icons |

## Update your existing app

1. In your GitHub repository, tap **Add file → Upload files**.
2. Upload all the files. Files with the same name replace the old ones.
3. Tap **Commit changes** and wait 1 to 2 minutes.
4. Open the app while online. It updates itself and reloads.
   If it doesn't, close it and open it again.

Your data stays on your device and is kept through updates.

## First-time setup

1. Create a **public** GitHub repository and upload these files.
2. **Settings → Pages**: Source **Deploy from a branch**, branch **main**, folder **/ (root)**, **Save**.
3. Open `https://YOUR-USERNAME.github.io/REPO-NAME/` and install it:
   Android Chrome: **Install** button or ⋮ → **Install app**.
   iPhone/iPad Safari: **Share → Add to Home Screen**.

## Tips

- **Daily reminder:** the app can't send notifications by itself (that needs
  a server). Set a repeating phone alarm, e.g. 9 pm, called "Log Momentum".
- **Shortcuts:** on Android, long-press the app icon to jump straight to
  Today, Progress or Journal.
- **Swipe** left or right on the day card to change day.
- **Backups:** ⚙ → Export backup once a week. Each device keeps its own data;
  export on one and import on another to move it.
