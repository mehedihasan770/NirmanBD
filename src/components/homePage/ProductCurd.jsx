"use client";

import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart, FaEye, FaStar, FaFire } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="group relative bg-white/50 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100"
      initial={{y: 100, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{duration: 0.1, type: "spring", bounce: 0.4,}}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Top Ribbon - Hot Deal */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
          <FaFire className="animate-pulse" />
          <span>HOT DEAL</span>
        </div>
      </div>
      
      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 hover:bg-red-50 transition-all duration-300 group/wish">
        <FaHeart className="text-gray-600 group-hover/wish:text-red-500 transition-colors" />
      </button>

      {/* Image Section with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
        
        <img 
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Quick View Button */}
        <motion.button 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-2 rounded-full font-medium shadow-xl opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <FaEye />
          Quick View
        </motion.button>
      </div>

      {/* Content Section */}
      <div className="relative p-6">
        {/* Category Badge */}
        <div className="inline-block bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-amber-200">
          PREMIUM
        </div>
        
        {/* Title & Name */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-amber-700 transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            by <span className="text-gray-700">{product.name}</span>
          </p>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} className="text-amber-400 text-sm" />
          ))}
          <span className="text-sm text-gray-500 ml-2">(4.8)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
            <div className="text-xs text-gray-500 mt-1">
              <span className="line-through mr-2">${(product.price * 1.2).toFixed(2)}</span>
              <span className="text-green-600 font-semibold">20% OFF</span>
            </div>
          </div>
          
          {/* Stock Indicator */}
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">In Stock</div>
            <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.button 
            className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3.5 rounded-xl font-bold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group/cart"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaShoppingCart className="group-hover/cart:animate-bounce" />
            <span>ADD TO CART</span>
          </motion.button>
          
          <motion.button 
            className="px-5 py-3.5 border-2 border-gray-300 rounded-xl font-bold text-gray-700 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>DETAILS</span>
          </motion.button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

export default ProductCard;