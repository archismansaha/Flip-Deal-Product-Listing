const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
]; // Assuming products.json resides in the same directory

// Function to sort products by rating (high to low)
const sortByPopularity = () => products.sort((a, b) => b.rating - a.rating);

// Function to sort products by price (high to low)
const sortByPriceHighToLow = () => products.sort((a, b) => b.price - a.price);

// Function to sort products by price (low to high)
const sortByPriceLowToHigh = () => products.sort((a, b) => a.price - b.price);

// Function to filter products by RAM
const filterByRam = (req, res) => {
  const ram = parseInt(req.query.ram);
  const filteredProducts = products.filter((product) => product.ram === ram);
  res.json({ products: filteredProducts });
};

// Function to filter products by ROM
const filterByRom = (req, res) => {
  const rom = parseInt(req.query.rom);
  const filteredProducts = products.filter((product) => product.rom === rom);
  res.json({ products: filteredProducts });
};

// Function to filter products by Brand (case-insensitive)
const filterByBrand = (req, res) => {
  const brand = req.query.brand.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.brand.toLowerCase() === brand
  );
  res.json({ products: filteredProducts });
};

// Function to filter products by OS (case-insensitive)
const filterByOs = (req, res) => {
  const os = req.query.os.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.os.toLowerCase() === os
  );
  res.json({ products: filteredProducts });
};

// Function to filter products by price
const filterByPrice = (req, res) => {
  const price = parseInt(req.query.price);
  const filteredProducts = products.filter((product) => product.price <= price);
  res.json({ products: filteredProducts });
};

// Enable CORS
app.use(cors());

// Get all products
app.get('/products', (req, res) => {
  res.json({ products });
});

// Get products sorted by popularity (rating)
app.get('/products/sort/popularity', (req, res) => {
  const sortedProducts = sortByPopularity();
  res.json({ products: sortedProducts });
});

// Get products sorted by price (high to low)
app.get('/products/sort/price-high-to-low', (req, res) => {
  const sortedProducts = sortByPriceHighToLow();
  res.json({ products: sortedProducts });
});

// Get products sorted by price (low to high)
app.get('/products/sort/price-low-to-high', (req, res) => {
  const sortedProducts = sortByPriceLowToHigh();
  res.json({ products: sortedProducts });
});

// Filter products by RAM
app.get('/products/filter/ram', filterByRam);

// Filter products by ROM
app.get('/products/filter/rom', filterByRom);

// Filter products by Brand
app.get('/products/filter/brand', filterByBrand);

// Filter products by OS
app.get('/products/filter/os', filterByOs);

// Filter products by Price
app.get('/products/filter/price', filterByPrice);

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
