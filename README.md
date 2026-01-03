# Currency Converter 💱

This is the second and final version of the Currency Converter - a modern, high-performance currency converter web application. Originally built with CRA, now fully migrated to **Vite** and rewritten in **TypeScript** for better type safety and developer experience.

## Features ✨

- **Real-time Conversion** 💵: Instantly convert between currencies like USD, EUR, GBP, PLN, and more.
- **Smart Fetching** 🧠: Utilizes `AbortController` to cancel unnecessary API requests during rapid typing (prevents race conditions).
- **TypeScript Powered** 🛡️: Robust type safety for props, state, and API responses.
- **Dynamic UI** 🔄: Browser tab title updates dynamically to show the current conversion result.
- **Reverse Functionality** ↔️: Quickly swap "From" and "To" currencies.
- **Error & Loading States** ⏳❌: Elegant handling of network errors and loading indicators.
- **Responsive Design** 📱💻: Fully optimized for all screen sizes using CSS Flexbox/Grid.
- **Custom Selects** 🎨: Integrated `react-select` with custom theme styling.

## Technologies & Tools 💻

- **React 18** (Functional Components, Hooks)
- **TypeScript** (Static Typing)
- **Vite** (Next-generation frontend tooling)
- **CSS3** (Modular styling & Media Queries)
- **React Select** (Accessible & styled dropdowns)
- **Frankfurter API** (Reliable exchange rate data)

## Technical Highlights 🛠️

- **Custom Hooks**: `useCurrencyConverter` encapsulates complex logic, including API calls and state management.
- **Efficient Effects**: Optimized `useEffect` with proper cleanup functions to manage memory and network resources.
- **Type Safety**: Types for API schemas, component props, and currency options.
- **Abort Signals**: Implementation of `AbortController` to handle user input spikes (e.g., rapid backspacing).
- **Vite Migration**: Faster HMR (Hot Module Replacement) and optimized build process compared to CRA.

## Project Structure 🏗️

- `src/hooks/` 🔧: Custom logic and data fetching (`useCurrencyConverter.ts`).
- `src/components/` 🧩: Modular, reusable UI components (Atomic Design approach).
- `src/assets/` 🎨: Organized static resources:
  - `images/`: Raster graphics (PNG, JPG).
  - `styles/`: Global CSS and layout definitions.
  - `svgs/`: Scalable vector icons and branding.
- `src/types/` 📝: Centralized TypeScript interfaces and definitions.
- `public/` 📂: Root-level static assets (favicons, manifest.json).

## License 📄

This project is open source and available under the MIT License.

## Acknowledgements 🙏


- Exchange rates API https://frankfurter.dev

- react-select: https://react-select.com

- SVG icons: https://www.flaticon.com
