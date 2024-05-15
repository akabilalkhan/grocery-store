// Grocery Store Items
const groceryItems = [
  { id: 1, name: "item1", price: 1.5 },
  { id: 2, name: "item2", price: 0.5 },
  { id: 3, name: "item3", price: 1 },
  { id: 4, name: "item4", price: 2 },
  { id: 5, name: "item5", price: 1.5 },
];

// Cart the will have the added items
let cart = [];

// Function to display grocery items
function displayItems() {
    console.log("Welcome to the Grocery Store! \nPlease see the available items below:\n");
    console.log("ID\tItems\t\tPrice");
    console.log("--------------------------------");
    groceryItems.forEach(item => {
        console.log(`${item.id}\t${item.name}\t\t$${item.price}`);
    });
    console.log("--------------------------------");
}

// Calling diplayItems function
displayItems()
