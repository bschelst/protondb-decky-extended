# ProtonDB Badges eXtended


Display tappable ProtonDB badges on your game pages, extended edition.


![ProtonDB Badges](./assets/screenshot.jpg)

## How it works

This plugin retrieves ProtonDB ratings from the ProtonDB API and overlays a tappable badge on the game page. Tapping the badge opens the corresponding ProtonDB page for the game.
This is an update to the protondb-decky plugin, extending it with a Submit button. It allows users to submit a report directly from their library.
The new submit button can be disabled in the settings.

## Options

### Size
Choose between Regular, Small, and Minimalist (No text)

### Position
Place the badge around different corners of the game page header.

## Limitations

**Store Pages:** ProtonDB badges are currently **not supported on Steam store pages** due to Steam's security architecture. Store pages run in an isolated browsing context that cannot be accessed by Decky plugins. Badges work on **library game pages only**.

## Decky Loader

This plugin requires [Decky Loader](https://github.com/SteamDeckHomebrew/decky-loader).


