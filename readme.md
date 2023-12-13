# Sistem E-commerce OOP dengan JavaScript

Sistem e-commerce sederhana berbasis pemrograman berorientasi objek (OOP) dalam JavaScript dengan modul Node.js.

## Interaksi dengan kelas

### Produk (Product Class.js):

- displayInfo(): Menampilkan detail produk.
- updateProduct(): Memperbarui detail produk.

### Kategori (Category Class.js):

- displayInfo(): Menampilkan detail kategori.
- updateCategory(): Memperbarui detail kategori.
- product() : Menampilkan produk-produk dalam kategori
- addProduct(product): Menambahkan produk ke kategori.
- removeProduct(product): Menghapus produk dari kategori.

### Keranjang (Cart Class.js):

- addItem(product, quantity): Menambahkan produk ke dalam keranjang dengan kuantitas tertentu.
- removeItem(product): Menghapus produk dari keranjang.
- viewCart(): Menampilkan isi keranjang dan kalkulasi jumlah total.

### Pesanan (Order Class.js):

- createOrder(cart): Membuat pesanan baru dari item di dalam keranjang.
- displayOrderDetails(): Menampilkan detail pesanan, termasuk produk dan jumlah total.

## Contoh Penggunaan menggunakan index.js

Berikut adalah contoh penggunaan kelas untuk membuat produk, kategori, keranjang belanja, dan pesanan:

1. Membuat instace Product untuk Laptop dan Smartphone

```
const laptop = new Product(1, "Laptop", 800, "Powerful laptop for various tasks");
const smartphone = new Product(2, "Smartphone", 300, "Feature-rich smartphone");
```

2. Membuat instance Category untuk Electronics dan Gadgets

```
const electronicsCategory = new Category(101, "Electronics");
const gadgetsCategory = new Category(102, "Gadgets");
```

3. Menambahkan Product ke dalam Category

```
electronicsCategory.addProduct(laptop);
electronicsCategory.addProduct(smartphone);
gadgetsCategory.addProduct(smartphone);
```

4. Memunculkan informasi Product

```
laptop.displayInfo();
```

5. Melakukan update Product

```
laptop.updateProduct("Laptop Asus", 100, "Laptop Baru");
laptop.displayInfo();
```

6. Memunculkan informasi Category

```
electronicsCategory.displayInfo();
```

7. Memunculkan informasi Product yang ada dalam Category

```
electronicsCategory.product();
```

8. Menghapus Product dalam Category

```
electronicsCategory.removeProduct(laptop);
electronicsCategory.product();
```

9. Membuat keranjang pesanan (Cart)

```
const shoppingCart = new Cart(1234);
```

10. Menambah item ke dalam keranjang pesanan (Cart)

```
shoppingCart.addItem(laptop, 2);
shoppingCart.addItem(smartphone, 3);
```

11. Melihat isi keranjang pesanan (Cart)

```
shoppingCart.viewCart();
```

12. Menghapus Item dari keranjang pesanan (Cart)

```
shoppingCart.removeItem(laptop);
shoppingCart.viewCart();
```

13. Membuat Order baru dari keranjang pesanan (Cart)

```
const order = new Order(1);
order.createOrder(shoppingCart);
```

14. Memunculkan detail Order

```
order.displayOrderDetails();
```
