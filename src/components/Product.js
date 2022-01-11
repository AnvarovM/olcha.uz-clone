import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/outline";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Currency from "react-currency-format";

// redux
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { likeToFavorite } from '../slices/likedSlice'

import { useTranslation } from "next-i18next";

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5));
  const [heart, setHeart] = useState(false)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime
    };

    dispatch(addToBasket(product))
  };

  const likedToFavorite = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime
    };

    dispatch(likeToFavorite(product))
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 hover:shadow-2xl rounded-xl cursor-pointer transition duration-200">
      <p className="absolute top-5 left-4 text-sm italic text-gray-400">
        {category}
      </p>
      <img
        className="mx-auto transform hover:scale-105 transition duration-200 ease-out"
        src={image}
        width={200}
        height={200}
        alt="products image"
      />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-red-300" />
        ))}
      </div>

      <p className="text-sm my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-sm text-gray-500">FREE next day delivery</p>
        </div>
      )}
      <span className="absolute top-5 right-4" onClick={() => setHeart(!heart)}>
        {heart ? <AiFillHeart onClick={likedToFavorite - 1} className="text-2xl text-red-500" />:
        <AiOutlineHeart onClick={likedToFavorite} className="text-2xl text-gray-400" />
        }
      </span>

      <button onClick={addItemToBasket} className="mt-auto button">{t("home:card_add_to_backet")}</button>
    </div>
  );
}

export default Product;
