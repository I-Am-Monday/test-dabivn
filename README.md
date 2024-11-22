# React + TypeScript + Vite

# Infinite Scrolling Product List

A  React + TypeScript + Vite project implementing infinite scrolling and search functionality using the [DummyJSON Products API](https://dummyjson.com/docs/products).

---

## Features

- **Infinite Scrolling:** Dynamically load more products as the user scrolls to the bottom of the page.
- **Real-Time Search:** Filter products by title while typing in the search bar.
- **Responsive Design:** Ensures compatibility across devices with a clean and intuitive UI.
- **API Integration:** Fetches products data from the DummyJSON API.

---

## Prerequisites

Ensure your environment includes:
- **Node.js** version 18 or higher
- **Yarn** or **npm** for package management

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/I-Am-Monday/test-dabivn.git


- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
cd test-dabivn
npm i
src/
├── components/         # Reusable components (ProductLists, Search)
├── hooks/              # Custom hooks (useProducts)
├── shared/api/         # API functions for fetching data
├── types/              # TypeScript type definitions
├── App.tsx             # Main application entry
└── index.tsx           # React DOM rendering
API Endpoints
Get Products: /products?limit={limit}&skip={skip}
Search Products: /products/search?q={query}
For complete API documentation, visit DummyJSON Products API.

Features Overview
Infinite Scrolling
Dynamically fetches 20 products at a time.
Automatically loads more products as the user scrolls down.
Search
Filter products in real-time by entering keywords in the search bar.
UI Design
Grid layout for product cards.
Hover effects for interactive feedback.
Styles (CSS)
Key styles for the UI:

Input Field:
Rounded corners and smooth transitions.
Focus and hover states for better UX.
Product List:
Responsive grid layout for displaying product cards.
Shadow and scaling effects on hover.
Development Tools
Vite: Fast build tool for modern web projects.
TypeScript: Ensures type safety and scalable codebase.
Axios: Simplifies HTTP requests to APIs.
ESLint: Ensures consistent coding standards.
Running Tests (Optional)
Test infinite scrolling by scrolling to the bottom of the page.
Test search functionality by typing in the search bar and verifying filtered results.
