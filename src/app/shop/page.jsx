"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/page";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/shop")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Apply filtering automatically whenever search input or category changes
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const matchesCategory = categoryFilter
        ? product.category === categoryFilter
        : true;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [searchInput, categoryFilter, products]);

  if (loading) return <div className="mt-10 text-center">Loading...</div>;

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <div className="mb-2  bg-gradient-to-r from-[#bfe30a] via-[#83e54e] to-[#5bb52a] bg-clip-text text-transparent text-3xl font-bold text-center">All Products</div>
      <p className="mb-6 text-center">Explore necessary grocery products.</p>

      {/* Search & Category Filter */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
        {/* Left: Search input + button */}
        <div className="flex w-full gap-2 md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 px-4 py-2 border rounded focus:outline-[#78C841]"
          />
          <button
            onClick={() => {}} // optional if filtering is automatic
            className="px-4 py-2 text-white bg-[#78C841] rounded hover:bg-green-600"
          >
            Search
          </button>
        </div>

        {/* Right: Category Dropdown */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full px-4 py-2 border rounded md:w-1/4 focus:outline-green-400"
        >
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value="Beverages">Beverages</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
