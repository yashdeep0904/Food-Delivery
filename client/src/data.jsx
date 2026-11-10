export const restaurantsData = [
    {
      id: 1,
      name: "Tandoor Grill",
      rating: 4.5,
      deliveryTime: 35, // Changed to number for sorting
      tags: ["North Indian", "Mughlai"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      categories: ["Starters", "Main Course", "Breads"],
      menu: [
        { id: 101, name: "Paneer Tikka", category: "Starters", price: 250, isVeg: true, addons: ["Extra Mint Chutney", "Onion Salad"] },
        { id: 102, name: "Butter Chicken", category: "Main Course", price: 350, isVeg: false, addons: ["Extra Butter", "Boneless"] },
        { id: 103, name: "Garlic Naan", category: "Breads", price: 60, isVeg: true, addons: ["Extra Garlic", "Cheese Stuffed"] }
      ]
    },
    {
      id: 2,
      name: "Biryani House",
      rating: 4.2,
      deliveryTime: 25,
      tags: ["Biryani", "Desserts"],
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80",
      categories: ["Biryani", "Desserts"],
      menu: [
        { id: 201, name: "Chicken Biryani", category: "Biryani", price: 299, isVeg: false, addons: ["Double Masala", "Extra Raita", "Boiled Egg"] },
        { id: 202, name: "Gulab Jamun", category: "Desserts", price: 90, isVeg: true, addons: ["Rabdi Base"] }
      ]
    },
    {
      id: 3,
      name: "Pure Green Cafe",
      rating: 4.8,
      deliveryTime: 20,
      tags: ["Healthy", "Salads", "Pure Veg"],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      categories: ["Salads", "Beverages"],
      menu: [
        { id: 301, name: "Quinoa Salad", category: "Salads", price: 220, isVeg: true, addons: ["Extra Feta", "Olive Oil"] },
        { id: 302, name: "Detox Green Juice", category: "Beverages", price: 150, isVeg: true, addons: ["No Sugar", "Ice"] }
      ]
    }
  ];