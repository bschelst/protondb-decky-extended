# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Decky Loader plugin for the Steam Deck that displays ProtonDB compatibility badges on game pages. It's a TypeScript/React-based project that integrates with the Steam Deck's interface to show ProtonDB ratings and native Linux game support indicators.

## Core Architecture

### Plugin Structure
- **Frontend (React/TypeScript)**: Located in `src/`, handles UI rendering and Steam interface patching
- **Backend (Python)**: `main.py` provides settings persistence via Decky's plugin API
- **Build System**: Rollup-based build process using `@decky/rollup`

### Key Components
- **Main Plugin Entry**: `src/index.tsx` - Defines the plugin, loads settings, and manages library patching
- **Library Patching**: `src/lib/patchLibraryApp.tsx` - Injects ProtonMedal component into Steam's game detail pages using React tree patching
- **Badge Component**: `src/components/protonMedal/index.tsx` - Main UI component that displays ProtonDB rating badges with positioning and styling
- **Settings Management**: `src/components/settings/index.tsx` and `src/hooks/useSettings.ts` - User preferences for badge size, position, and behavior
- **Data Layer**: `src/hooks/useBadgeData.ts` and `src/actions/protondb.ts` - ProtonDB API integration and caching

### Localization
Comprehensive i18n support with JSON files in `src/localisation/` for 25+ languages.

## Development Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Development with hot reload
npm run watch

# Lint code
npx eslint src/

# Type checking
npx tsc --noEmit
```

## Key Development Patterns

### React Tree Patching
The plugin uses Decky's `createReactTreePatcher` to inject UI components into Steam's existing interface. The patching targets the library app route (`/library/app/:appid`) and injects the ProtonMedal component into the game details container.

### Settings Management
Settings are persisted via the Python backend and synchronized with the frontend using custom hooks. The settings include badge size (regular/small/minimalist), position (tl/tr/bl/br), and hover behavior.

### Component Architecture
- **Hooks-based state management** for app ID detection, badge data fetching, and settings
- **CSS-in-JS styling** using template literals for dynamic styling
- **Mutation observers** to handle Steam's fullscreen transitions and UI state changes

### API Integration
ProtonDB data is fetched via their public API with built-in caching using localforage. The system handles both ProtonDB tier ratings and native Linux support detection.

## File Organization

```
src/
├── components/          # React components
│   ├── protonMedal/    # Main badge component with styling
│   ├── settings/       # Plugin settings UI
│   ├── button/         # Reusable button component
│   └── spinner/        # Loading indicator
├── hooks/              # Custom React hooks
├── lib/                # Core utilities (patching, translations, time)
├── actions/            # API calls and data fetching
├── cache/              # Data caching logic
├── localisation/       # Translation files
└── constants.ts        # App-wide constants
```

## Testing and Quality

The project uses ESLint with TypeScript rules and Prettier for code formatting. No test framework is currently configured - tests should be added manually if needed.

## Plugin-Specific Considerations

- **Decky API**: Uses `@decky/api` for router hooks and `@decky/ui` for UI components and styling classes
- **Steam Integration**: Directly patches Steam's React components, requiring careful handling of Steam's UI state changes
- **Performance**: Badge visibility is managed via mutation observers to avoid unnecessary renders during fullscreen transitions