// product.js
class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }

  displayInfo() {
    console.log("Menampilkan informasi untuk produk berikut :");
    console.log(`Product ID: ${this.productId}`);
    console.log(`Product Name: ${this.productName}`);
    console.log(`Price: ${this.price}`);
    console.log(`Description: ${this.description}\n`);
  }

  updateProduct(newProductName, newPrice, newDescription) {
    console.log(`Update Produk untuk ${this.productName}`);
    console.log(
      `Sebelum, Nama Produk : ${this.productName}, Harga : ${this.price}, Deskripsi : ${this.description}`
    );
    this.productName = newProductName;
    this.price = newPrice;
    this.description = newDescription;
    console.log(
      `Sesudah, Nama Produk : ${this.productName}, Harga : ${this.price}, Deskripsi : ${this.description}\n`
    );
  }
}

module.exports = Product;
