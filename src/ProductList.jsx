import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();

  // Track which items are already added to cart
  const [addedToCart, setAddedToCart] = useState({});

  // Plant data
  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1524593166156-312f362cada0",
          description: "Fragrant lavender plant for relaxation.",
          cost: 15,
        },
        {
          name: "Mint",
          image:
            "https://images.unsplash.com/photo-1628556270448-4d4e4148e54f",
          description: "Fresh mint plant perfect for kitchens.",
          cost: 10,
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
          description: "Healing plant with medicinal benefits.",
          cost: 20,
        },
        {
          name: "Tulsi",
          image:
            "https://images.unsplash.com/photo-1593691509543-c55fb32e8f2b",
          description: "Sacred medicinal herb with many uses.",
          cost: 12,
        },
      ],
    },
  ];

  // Add to cart functionality
  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>
            <div>{category.category}</div>
          </h1>

          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />

                <div className="product-title">{plant.name}</div>

                <div className="product-description">
                  {plant.description}
                </div>

                <div className="product-cost">${plant.cost}</div>

                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name]
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;