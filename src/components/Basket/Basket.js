import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-format";
import { useDispatch } from "react-redux";

const Favorite = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const [star] = useState(Math.floor(Math.random() * 5));
  return (
    <div className="max-w-screen-2xl mx-auto p-5 flex">
      <div className="flex flex-col items-center w-[350px] p-6 shadow-lg rounded-md">
        <Image
          src={image}
          alt="Picture of the author"
          width={200}
          height={200}
          objectFit="contain"
        />

        <Currency quantity={price} currency="usd" />
        <div className="col-span-3 mx-5">
          <p>{title}</p>
          <div className="flex">
            {Array(star)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="py-2 text-sm mb-2 line-clamp-2">{description}</p>
        </div>
        <div className="mt-3">
          <button className="px-5 py-2 border border-black rounded-3xl">
            Sotib olish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
