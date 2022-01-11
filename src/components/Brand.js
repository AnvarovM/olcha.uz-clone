import React from "react";
import { brand } from "./Data/BrandData";

function Brand() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        <h2 className="text-2xl lg:text-4xl my-10 font-light mx-4">Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 pb-10">
          <div className="flex flex-col items-center p-4 border rounded-lg space-y-2 hover:bg-gray-300 transition duration-200 cursor-pointer">
            <img
              className="h-12 transform hover:scale-110 transition-all duration-300"
              src="https://cdn-icons-png.flaticon.com/128/1532/1532495.png"
              alt=""
            />
            <p>Apple</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg space-y-2 hover:bg-gray-300 transition duration-200 cursor-pointer">
            <img
              className="h-14 transform hover:scale-110 transition-all duration-300"
              src="https://cdn-icons-png.flaticon.com/128/5969/5969116.png"
              alt=""
            />
            <p>Samsung</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg space-y-2 hover:bg-gray-300 transition duration-200 cursor-pointer">
            <img
              className="h-12 transform hover:scale-110 transition-all duration-300"
              src="https://cdn-icons-png.flaticon.com/128/1532/1532495.png"
              alt=""
            />
            <p>Apple</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg space-y-2 hover:bg-gray-300 transition duration-200 cursor-pointer">
            <img
              className="h-14 transform hover:scale-110 transition-all duration-300"
              src="https://cdn-icons-png.flaticon.com/128/5969/5969116.png"
              alt=""
            />
            <p>Samsung</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg space-y-2 hover:bg-gray-300 transition duration-200 cursor-pointer">
            <img
              className="h-12 transform hover:scale-110 transition-all duration-300"
              src="https://cdn-icons-png.flaticon.com/128/1532/1532495.png"
              alt=""
            />
            <p>Apple</p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg space-y-2 hover:bg-gray-300 transition duration-200 cursor-pointer">
            <img
              className="h-14 transform hover:scale-110 transition-all duration-300"
              src="https://cdn-icons-png.flaticon.com/128/5969/5969116.png"
              alt=""
            />
            <p>Samsung</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
