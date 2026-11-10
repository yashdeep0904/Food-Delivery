# FoodExpress - Food Delivery Web Application

A feature-rich, responsive food delivery frontend built using React and Tailwind CSS. This application allows users to explore restaurants, filter menus based on dietary preferences, customize dishes with add-ons, manage an advanced cart, and simulate live order tracking.

## 🚀 Features

* **Restaurant Discovery**: Browse top-rated restaurants with dynamic sorting (Rating & Fastest Delivery) and search functionality.
* **Smart Menu Filtering**: Strict "Veg Only" toggle and category-based navigation.
* **Customization & Add-ons**: Interactive modals to customize dishes before adding them to the cart.
* **Advanced Cart Management**: 
  * Increment/decrement item quantities.
  * Apply promo codes (e.g., `FESTIVE50`).
  * Add driver tips.
  * Select saved delivery addresses and specific delivery instructions.
  * Auto-calculated taxes (5% GST) and delivery fees.
* **Live Order Tracking**: Visual progress bar simulating real-time delivery stages (Order Placed → Preparing → Out for Delivery → Delivered).
* **Favorites System**: Save and toggle favorite restaurants using a heart icon.
* **Modern UI/UX**: Built with Tailwind CSS, featuring glassmorphism elements, hover interactions, and a fully responsive grid layout.

## 🛠️ Tech Stack

* **Frontend Framework**: React (Functional Components, Hooks)
* **Styling**: Tailwind CSS
* **Build Tool**: Vite (Recommended) or Create React App

## 📁 File Structure

```text
food-delivery-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigation, search, and cart summary
│   │   ├── Hero.jsx               # Attractive top banner for the homepage
│   │   ├── RestaurantList.jsx     # Restaurant grid with sorting and favorites
│   │   ├── Menu.jsx               # Category navigator, Veg-only toggle, and dish list
│   │   ├── CustomizationModal.jsx # Popup for selecting dish add-ons
│   │   ├── Cart.jsx               # Checkout logic, promo codes, and tips
│   │   └── OrderTracking.jsx      # Order progress simulator
│   ├── data.js                    # Mock database for restaurants and menus
│   ├── App.jsx                    # Main layout and state management
│   ├── index.css                  # Tailwind directives and base styles
│   └── main.jsx                   # React entry point
├── package.json
├── tailwind.config.js
└── README.md