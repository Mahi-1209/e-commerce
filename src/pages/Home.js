import React from "react";
import ProductCard from "../components/ProductCard";

/*
 Home page shows the filtered product grid
 Props:
   - products: array
   - onAdd: function
   - search: string
   - category: string
   - setCategory: function
*/
function Home({ products, onAdd, search, category, setCategory }) {
  // find unique categories to build the filter dropdown
  const categories = ["All"];
  products.forEach(p => {
    if (!categories.includes(p.category)) categories.push(p.category);
  });

  // filter by category and search text (case-insensitive)
  const filtered = products.filter(product => {
    const matchesCategory = (category === "All") || (product.category === category);
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page">
      <div className="controls">
        <div>
          <label>Category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="results-count">{filtered.length} products</div>
      </div>

      <div className="products-grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

export default Home;