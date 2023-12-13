// cart.js
class Cart {
  constructor(cartId) {
    this.cartId = cartId;
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
    console.log(
      `Item ${[
        product.productName,
      ]} berjumlah ${quantity} buah telah ditambah ke keranjang\n`
    );
  }

  removeItem(product) {
    this.items = this.items.filter((item) => item.product !== product);
    console.log(`Item ${[product.productName]} telah dihapus dari keranjang\n`);
  }

  viewCart() {
    console.log(`Cart ID: ${this.cartId}`);
    console.log(`Daftar produk di dalam keranjang :`);
    let i = 1;
    this.items.forEach((item) => {
      console.log(
        `${i}. Product: ${item.product.productName}, Quantity: ${item.quantity}`
      );
      i++;
    });
    console.log(`\n`);
  }
}

module.exports = Cart;
