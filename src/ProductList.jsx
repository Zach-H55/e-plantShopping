import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();

  // Track added items
  const [addedToCart, setAddedToCart] = useState({});

  // Plant Data
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://images.unsplash.com/photo-1593691509543-c55fb32e5b13",
          description:
            "Produces oxygen at night, improving air quality.",
          cost: 15,
        },
        {
          name: "Spider Plant",
          image:
            "https://images.unsplash.com/photo-1593482892290-f54927ae2b0c",
          description:
            "Filters formaldehyde and xylene from the air.",
          cost: 12,
        },
        {
          name: "Peace Lily",
          image:
            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
          description:
            "Removes mold spores and purifies the air.",
          cost: 18,
        },
      ],
    },

    {
      category: "Aromatic Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1524593166156-312f362cada0",
          description:
            "Known for its calming fragrance and beautiful flowers.",
          cost: 20,
        },
        {
          name: "Mint",
          image:
            "https://images.unsplash.com/photo-1628556270448-4d4e4148e54f",
          description:
            "Fresh mint leaves perfect for teas and cooking.",
          cost: 10,
        },
        {
          name: "Basil",
          image:
            "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
          description:
            "Popular herb used in many delicious recipes.",
          cost: 8,
        },
      ],
    },
  ];

  // Handle Add to Cart
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
          <h2 className="plant-category">
            {category.category}
          </h2>

          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div
                className="product-card"
                key={plantIndex}
              >
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />

                <div className="product-title">
                  {plant.name}
                </div>

                <div className="product-cost">
                  ${plant.cost}
                </div>

                <div className="product-description">
                  {plant.description}
                </div>

                <button
                  className="product-button"
                  onClick={() =>
                    handleAddToCart(plant)
                  }
                  disabled={addedToCart[plant.name]}
                  style={{
                    backgroundColor:
                      addedToCart[plant.name]
                        ? "gray"
                        : "green",
                    cursor:
                      addedToCart[plant.name]
                        ? "not-allowed"
                        : "pointer",
                  }}
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