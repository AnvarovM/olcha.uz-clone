import React from "react";
import Product from "./Product";

import { useTranslation } from "next-i18next";

function ProductFeeds({ products }) {
  const { t } = useTranslation();
  return (
    <div className="max-w-screen-2xl mx-auto py-8">
      <h2 className="text-2xl lg:text-4xl my-10 font-light mx-4">
      {t("home:main_popular_things")}
      </h2>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center cursor-pointer my-10">
        <img
          className="banner__image"
          src="https://olcha.uz/image/380x132/discount/KK/KK/c1/1635851437.png"
          alt=""
        />
        <img
          className="banner__image"
          src="https://olcha.uz/image/380x132/discount/KK/KK/cY/1635853258.jpg"
          alt=""
        />
        <img
          className="banner__image"
          src="https://olcha.uz/image/380x132/discount/KK/KK/cm/1631528663.jpg"
          alt=""
        />
      </div>

      <h2 className="text-2xl lg:text-4xl my-10 font-light mx-4">
      {t("home:main_new_products")}
      </h2>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
      {products
        .slice(14, 18, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
        </div>
    </div>
  );
}

export default ProductFeeds;
