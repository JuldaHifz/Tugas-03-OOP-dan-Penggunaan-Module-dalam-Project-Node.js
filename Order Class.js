// order.js
class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
    this.totalAmount = 0;
  }

  createOrder(cart) {
    this.items = [...cart.items];
    this.totalAmount = this.calculateTotal();
    console.log(
      `Pesanan untuk Cart ID ${cart.cartId} masuk menjadi Order ID ${this.orderId}\n`
    );
  }

  calculateTotal() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  displayOrderDetails() {
    console.log(`Order ID: ${this.orderId}`);
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.productName}, Quantity: ${item.quantity}`
      );
    });
    console.log(`Total Amount: ${this.totalAmount}\n`);
  }
}

module.exports = Order;
