import { useReducer } from "react";
import Head from "next/head";
import Header from "../components/Header";

// next.js
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Basket from "../components/Basket/Basket";

import { useSelector } from "react-redux";
import { selectItems  } from "../slices/basketSlice";

export async function getServerSideProps({ locale }) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      products,
    },
  };
}

export default function Home() {
  const { t } = useTranslation();
  const basket = useSelector(selectItems);

  return (
    <div className="">
      <Head>
        <title>Olcha.uz | home</title>
        <link
          rel="shortcut icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAdCAMAAABoivUCAAAAP1BMVEUAAADrFDbrFDTrFDbrFDbvEDDqFTbsEzXqFTXvEDjsEzbqFTbrFDfrFDbsEzfrFDfqFTfrFDbrFDfqFTfrFTdczmhMAAAAFHRSTlMAwECA8BDQYDAgUKBwf5Cw36/gnx0MDQsAAALoSURBVFjD7ZfLgqsgDIYbwx28+/7PeqwNBogdO7Pp5vwrSgL5DDHSxw/qzDa7W/t35LZdyt/av6Jheyrd2r8iOILjH+xS/+G+A+d6mLbNzMm/De4GUPsE9F7a5XYrPNWHC2MAKCoVAV5Otq/V5aYA26nVCzjhomt76OcdQ+dwelXsO/UtW3pOD9VrFWhQK50OLGUv4LB2cYW9m3gdL2TNDdxyzOYHOX6YfbQJKdqslhVwsV3HdktT2VeGWRmMzR0dyJZRNykK3Cg0cEl46Gw3eYYjqtbZfQInj3XcC4aGBi1G2lfpCs6Ty4IhRcWZE4JXZe8uZkDE7BHv4XY5JEWC8FQCuWC84QNiuFgWqB6Pg2c4BfHk1C+XTj/K7dQ9XCFNi9yZuJBNpq2pXLT8grnOF6UK+jm1cMhS7jXtfwGnDRNFOo8sn9cynKWjlk2Yv/xWwJXP2n0Kx89seWxl4+cBcuFIOLgKaefp6HGz/TVcJDbpyh0NJaWAqw574X2o8bHu4Vq2WLrqFm4QcOnnbytQSKriP8LZ+vVW7epBJGykwWdwWlHfAQDzGzhmG+sQqS3hJGpu/BDOlkXjxxs4SnP1w+g6URP9Ph/FF8HDOXUP1+Z5eAeXsp3hnCK2thOtdZcxVXBuaPQuJv0ejgayldg+aYKjdHANFGxKy74ye/pDdchWwZHSfbg4eA7v4AIfFJWiybeZhXYLDx0m/sTrfUwurG4jmXXOvlAfm1bZZZ6J3r2Fi6/EePrKNtPtRYPhDGUUsvrrK4fyJVzTHe7gLHkAgCpaCY09ZaPRZQMa5F2TMltXtpW3GbLLPmcu+5zhhgrlRhkOry+bnP268FPVjyqXQdjpsDwVdlY8p5HrxSu2P9R5cxNa6B0d1DnDn9mx/KJqPF2gu7Kbs7npyHsdICmn1ni6dXGsoOioBpG4cJIEjACYfPWuoKMRuYwAMbk39sCLvcUxYneApOzkkKO5hCNSn0423wJr6cc/ax2OvLqICpMAAAAASUVORK5CYII="
        />
      </Head>

      <Header t={t} />
      <div className="flex flex-col space-y-5 max-w-screen-2xl mx-auto h-screen">
        <h1 className="text-2xl border-b p-4">
          {basket.length === 0
            ? "Savat hozircha bo`sh"
            : "Savatdagilar ro`yxati"}
        </h1>
        {basket.map((item, i) => (
          <Basket
            key={i}
            id={item.id}
            title={item.title}
            rating={item.rating}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            hasPrime={item.hasPrime}
          />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
