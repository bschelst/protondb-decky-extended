# ProtonDB Badges eXtended 🎮

Display tappable **ProtonDB badges** directly on your game pages — extended edition.

![ProtonDB Badges](./assets/screenshot.jpg)

---

## ⚙️ How it works

This plugin retrieves ProtonDB ratings from the ProtonDB API and displays them as a tappable badge on each game’s page. Selecting the badge opens the corresponding ProtonDB page for that game.

It is an extended and actively maintained evolution of the original **protondb-decky** plugin. In addition to displaying badges, it introduces a **Submit** button that allows users to send ProtonDB reports directly from their Steam library, without leaving Game Mode.  
The submit button can be enabled or disabled via the plugin’s settings.

---

## ✨ Why the eXtended plugin was created

I really like the protondb-decky plugin and consider it a must-have on the Steam Deck.  
However, the original plugin is no longer maintained and has been archived. At the same time, submitting ProtonDB reports felt unnecessarily cumbersome—opening a browser, searching for the game, and navigating multiple steps.

This plugin was created to provide a more streamlined experience: the ability to submit a ProtonDB report directly from the game page itself, using a simple and accessible button in Game Mode.

---

## 🛠️ Options

### 📏 Size
Choose between **Regular**, **Small**, and **Minimalist** (no text).

### 📍 Position
Place the badge in different corners of the game page header.

### 🚫 Disable Submit
If you don’t want to submit reports, the submit badge can be disabled entirely.

---

## ⚠️ Limitations

**Store Pages**  
ProtonDB badges are currently **not supported on Steam Store pages** due to Steam’s security architecture. Store pages run in an isolated browsing context that cannot be accessed by Decky plugins.  
Badges work on **library game pages only**.

---

## 🌍 Translations

Translations were added or updated using AI, as I don’t speak all supported languages.  
If you notice any issues or incorrect translations, please let me know.

---

## 🧪 Support & Testing

The plugin has been tested on:

- **SteamOS 3.9** — Decky Loader v3.2.1 — SteamClient023 — Steam Deck LCD  
- **Ubuntu 25.10** — Decky Loader v3.2.1 — SteamClient023  
- **Bazzite 43** (NVIDIA) — Decky Loader v3.2.1 — SteamClient023  

I don’t own a Steam Deck OLED, so I can’t test on that device myself.  
If that’s a must-have… sponsoring might help 😉  

---

## 💖 Sponsoring

If you find this project useful and would like to support its continued development, you can sponsor it using one of the platforms below.

Sponsorship helps with:
- Ongoing maintenance and bug fixes  
- Adding new features and improvements  
- Keeping the project free and open-source  

Your support—small or large—is genuinely appreciated and helps keep this project moving forward.

### ❤️ Support the project

- 🐙 **GitHub Sponsors**  
  https://github.com/sponsors/bschelst

- ☕ **Ko-fi**  
  https://ko-fi.com/bschelst

- ☕ **Buy Me a Coffee**  
  https://www.buymeacoffee.com/bschelst

---

## 🧩 Decky Loader

This plugin requires **Decky Loader**:  
https://github.com/SteamDeckHomebrew/decky-loader

---

## 📦 Installation (Decky Loader)

Follow these steps to install **ProtonDB Badges eXtended** manually.  
(The plugin is not available in the Decky store yet.)

### ✅ Requirements
- Steam Deck or Steam Big Picture on Linux  
- Decky Loader installed  
- Steam Deck in **Game Mode**

### 🚀 Installation steps

1. **Download the latest release**
   - Open the releases page:  
     https://github.com/bschelst/protondb-decky-extended/releases
   - Download the **latest `.zip` file**.

2. **Open Decky Loader**
   - Switch to **Game Mode**.
   - Open the **Decky Loader** menu (⋯ button).

3. **Install the plugin**
   - Go to **Decky Settings** → **Plugins**.
   - Select **Install from ZIP** (or **Upload Plugin**, depending on Decky version).
   - Choose the downloaded `protondb-decky-extended-<version>.zip` file.

4. **Enable the plugin**
   - Ensure the plugin is enabled in Decky.
   - ProtonDB Badges eXtended will now appear automatically for supported games in your library.

### 🔄 Updating

To update the plugin:
- Download the latest release ZIP  
- Reinstall it via **Install from ZIP** in Decky Loader  

Existing settings are preserved.
