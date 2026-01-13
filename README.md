# 🍳 Cook.io - Discover Your Next Favorite Meal
Cook.io is a comprehensive web platform for recipe discovery, designed to be fast, intuitive, and highly functional. By leveraging the robust Edamam API, the project provides access to thousands of recipes with granular filters for health labels, diets, and cuisine types.

---

## 🚀 Key Features

- Smart Search: Find specific recipes by name or key ingredients instantly.
- Advanced Filtering: Refine results by diet (Vegan, Low-Carb), allergies, meal types, and cuisines.
- Recipe Book (Favorites): Save your favorite recipes using localStorage for persistent access.
- Native Dark Mode: Built-in theme switcher with automatic system preference detection.
- Responsive UI: Optimized interface focusing on seamless mobile and desktop experiences.
- High Performance: Smooth user experience with skeleton screens and infinite scroll logic.

---

## 🛠️ Tech Stack & Tools

| Tool | Usage |
| :--- | :--- |
| **JavaScript (ES6+)** | Modular logic, DOM manipulation, and state management. |
| **HTML5 & CSS3** | Semantic structure and advanced styling with CSS Variables. |
| **Edamam API** | Real-time data source for recipes and nutritional info. |
| **Material Symbols** | Modern system icons provided by Google. |
| **Google Fonts** | Premium typography (DM Sans & DM Serif Display). |

---

## 📂 Project Structure
The directory is organized into a clean, modular architecture:

```
  Cook.io/
  ├── assets/
  │   ├── css/
  │   │   └── style.css          # Global styles and theme variable definitions
  │   ├── images/                # Logos, interface icons, and placeholders
  │   └── js/
  │       ├── api.js             # API configuration and fetch handling
  │       ├── global.js          # Core utilities and favorites management
  │       ├── home.js            # Homepage logic and tab navigation
  │       ├── recipes.js         # Filtering logic and dynamic result listing
  │       ├── detail.js          # Individual recipe data rendering
  │       ├── theme.js           # Theme manager (Light/Dark persistence)
  │       └── module.js          # Helper functions (time conversion, etc.)
  ├── index.html                 # Main Entry Point
  ├── recipes.html               # Search Results and Filters Page
  ├── detail.html                # Single Recipe Detail View
  └── saved-recipes.html         # User's Personal Recipe Gallery

```
