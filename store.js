const prompt = require("prompt-sync")({ sigint: true });

// Grocery Store Items
const groceryItems = [
  { id: 1, name: "Apple", price: 1.5 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Carrot", price: 1 },
  { id: 4, name: "Milk", price: 2 },
  { id: 5, name: "Eggs", price: 1.5 },
];

// Cart that will have the added items
let cart = [];

// Function to display grocery items
function displayItems() {
  console.log(
    "Welcome to the Grocery Store! \nPlease see the available items below:\n"
  );
  console.log("ID\tItems\t\tPrice");
  console.log("--------------------------------");
  groceryItems.forEach((item) => {
    console.log(`${item.id}\t${item.name}\t\t$${item.price.toFixed(2)}`);
  });
  console.log("--------------------------------");
}

// Function to add item to cart
function addItemToCart(itemId) {
  const item = groceryItems.find((item) => item.id === itemId);
  if (item) {
    cart.push(item);
    console.log(`${item.name} has been added to your cart.`);
  } else {
    console.log("Item not found.");
  }
}

// Function to display cart items
function displayCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
  } else {
    console.log("Your cart items are:");
    console.log("ID\tItems\t\tPrice");
    console.log("--------------------------------");
    cart.forEach((item) => {
      console.log(`${item.id}\t${item.name}\t\t$${item.price.toFixed(2)}`);
    });
    console.log("--------------------------------");
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total Price: $${total.toFixed(2)}`);
  }
}

// Function to remove item from cart
function removeItemFromCart(itemId) {
  const itemIndex = cart.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    const removedItem = cart.splice(itemIndex, 1);
    console.log(`${removedItem[0].name} has been removed from your cart.`);
  } else {
    console.log("Item not found in cart.");
  }
}

// Main function to run the app
function main() {
  displayItems();

  let choice;
  do {
    console.log("\nWhat would you like to do?");
    console.log("1. Add item to cart");
    console.log("2. View cart");
    console.log("3. Remove item from cart");
    console.log("4. Checkout");
    console.log("5. Exit");

    choice = prompt("Enter your choice (1-4): ");

    switch (choice) {
      case "1":
        const itemId = parseInt(
          prompt("Enter the ID of the item you want to add: ")
        );
        addItemToCart(itemId);
        break;
      case "2":
        displayCart();
        break;
      case "3":
        const removeItemId = parseInt(
          prompt("Enter the ID of the item you want to remove: ")
        );
        removeItemFromCart(removeItemId);
        break;
      case "4":
        displayCart();
        if (cart.length === 0) console.log("Please add items to the cart");
        else console.log("\nPlease pay here");
        break;
      case "5":
        console.log("Thank you for shopping with us!");
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  } while (choice !== "5");
}

main();
