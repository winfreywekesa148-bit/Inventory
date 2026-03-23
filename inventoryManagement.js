// products
const products = [
    "Laptop", "Phone", "Headphones", "Monitor"
];

// logFirstProduct
function logFirstProduct(products) {
    console.log(products[0]);
};

// addProduct
function addProduct(products, product) {
    products.push(product); // adds a new product to the array
}

// updateProductName
function updateProductName(products, newName) {
    products[0] = newName; // gives new name
}
