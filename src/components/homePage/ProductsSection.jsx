"use client";

import { motion } from 'framer-motion';
import ProductCard from './ProductCurd';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      title: "Wireless Bluetooth Headphones",
      name: "SoundBeats Pro",
      price: 129.99,
      description: "Premium noise-cancelling headphones with 30hr battery life"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      title: "Smart Watch Series 7",
      name: "FitTrack Pro",
      price: 299.99,
      description: "Advanced fitness tracking with AMOLED display"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=400&fit=crop",
      title: "Professional Camera",
      name: "FotoMaster X",
      price: 899.99,
      description: "24MP mirrorless camera with 4K video"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
      title: "Running Shoes",
      name: "SpeedRun Air",
      price: 89.99,
      description: "Lightweight running shoes with air cushion"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop",
      title: "Gaming Laptop",
      name: "GameForce RTX",
      price: 1499.99,
      description: "RTX 4060, 16GB RAM, 1TB SSD, 144Hz display"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=400&fit=crop",
      title: "Coffee Maker",
      name: "BrewMaster Deluxe",
      price: 199.99,
      description: "Smart coffee maker with app control"
    }
  ];

  // Container variants for staggered children
  return (
    <div className="bg-amber-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.2,
            duration: 0.5 
          }}
        >
          <ProductCard product={product}/>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductsSection;