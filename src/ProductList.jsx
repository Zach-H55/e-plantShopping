import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://i.imgur.com/2nCt3Sbl.jpg",
          description:
            "Produces oxygen at night, improving air quality.",
          cost: 15,
        },
        {
          name: "Spider Plant",
          image:
            "https://i.imgur.com/7Aden6Al.jpg",
          description:
            "Filters formaldehyde and xylene from the air.",
          cost: 12,
        },
        {
          name: "Peace Lily",
          image:
            "https://i.imgur.com/1bX5QH6l.jpg",
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
          name: "Basil",
          image:
            "https://i.imgur.com/lt4FQGSl.jpg",
          description:
            "Fresh basil perfect for cooking and aroma.",
          cost: 10,
        },
        {
          name: "Mint",
          image:
            "https://i.imgur.com/sNEJPwCl.jpg",
          description:
            "Refreshing mint herb used in drinks and dishes.",
          cost: 8,
        },
        {
          name: "Strawberry",
          image:
            "https://i.imgur.com/5qn7Z6Al.jpg",
          description:
            "Sweet strawberry plant with delicious fruits.",
          cost: 20,
        },
      ],
    },
  ];

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
                <div className="sale-badge">SALE</div>

                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />

                <h3 className="product-title">
                  {plant.name}
                </h3>

                <p className="product-cost">
                  ${plant.cost}
                </p>

                <p className="product-description">
                  {plant.description}
                </p>

                <button
                  className="product-button"
                  onClick={() =>
                    handleAddToCart(plant)
                  }
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