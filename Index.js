const Product = require("./Product Class.js");
const Category = require("./Category Class.js");
const Cart = require("./Cart Class.js");
const Order = require("./Order Class.js");

// app.js

// Membuat instance untuk Product
const laptop = new Product(
  1,
  "Laptop",
  800,
  "Powerful laptop for various tasks"
);
const smartphone = new Product(2, "Smartphone", 300, "Feature-rich smartphone");

//Membuat instance untuk Category
const electronicsCategory = new Category(101, "Electronics");
const gadgetsCategory = new Category(102, "Gadgets");

// Menambahkan Product ke dalam Category
electronicsCategory.addProduct(laptop);
electronicsCategory.addProduct(smartphone);
gadgetsCategory.addProduct(smartphone);

// Memunculkan informasi Product
laptop.displayInfo();

// Melakukan update Product
laptop.updateProduct("Laptop Asus", 100, "Laptop Baru");
laptop.displayInfo();

// Memunculkan informasi Category
electronicsCategory.displayInfo();

// Memunculkan informasi Product yang ada dalam Category
electronicsCategory.product();

// Menghapus Product dalam Category
electronicsCategory.removeProduct(laptop);
electronicsCategory.product();

// Membuat keranjang pesanan (Cart)
const shoppingCart = new Cart(1234);

// Menambah item ke dalam keranjang pesanan (Cart)
shoppingCart.addItem(laptop, 2);
shoppingCart.addItem(smartphone, 3);

// Melihat isi keranjang pesanan (Cart)
shoppingCart.viewCart();

// Menghapus Item dari keranjang pesanan (Cart)
shoppingCart.removeItem(laptop);
shoppingCart.viewCart();

// Membuat Order baru dari keranjang pesanan (Cart)
const order = new Order(1);
order.createOrder(shoppingCart);

// Memunculkan detail Order
order.displayOrderDetails();
