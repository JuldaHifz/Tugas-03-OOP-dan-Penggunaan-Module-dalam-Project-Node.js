// category.js
class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.products = []; // Array to store associated products
  }

  displayInfo() {
    console.log(`Berikut informasi untuk kategori tersebut :`);
    console.log(`Category ID: ${this.categoryId}`);
    console.log(`Category Name: ${this.categoryName}\n`);
  }

  updateCategory(newCategoryName) {
    console.log(
      `Mengupdate nama untuk kategori ${this.categoryName} menjadi ${newCategoryName}\n`
    );
    this.categoryName = newCategoryName;
  }

  product() {
    console.log(`Produk untuk kategori ${this.categoryName}`);
    let i = 1;
    this.products.forEach((product) => {
      console.log(`${i}. ${product.productName}`);
      i++;
    });
    console.log(`\n`);
  }

  addProduct(product) {
    console.log(
      `Produk ${product.productName} ditambahkan ke kategori ${this.categoryName}\n`
    );
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    console.log(
      `Produk ${product.productName} telah dihapus dari kategori ${this.categoryName}\n`
    );
  }
}

module.exports = Category;
