import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";




import PropTypes from "prop-types";

function Catogeries({ onCategorySelect }) {
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categoryName) => {
    onCategorySelect(categoryName);
    navigate(`/catogeries/${categoryName}`);
  };

  return (
    <>
      <Swiper
        spaceBetween={130}
        slidesPerView={5}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <NavLink
              to={`/catogeries/${category.name}`}
              className="category-link"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img src={category.image.secure_url} alt={category.name} />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

Catogeries.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
};

export default Catogeries;
