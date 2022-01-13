import React from "react";
import { SearchIcon, UserIcon, HeartIcon, ShoppingCartIcon, MenuIcon } from "@heroicons/react/outline";
import ReactCountryFlag from "react-country-flag"

import { useRouter } from 'next/router'

import { useTranslation } from "next-i18next";

import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { likedItems } from '../slices/likedSlice'

function Header({counter}) {
    const router = useRouter();
    const { t } = useTranslation();

    const items = useSelector(selectItems);
    const liked = useSelector(likedItems);

    const navItem = [
      {
          id: "1",
          title: `${t("home:nav_term_payment")}`,
          path: '/installment',
          class: "nav"
      },
      {
          id: "2",
          title: `${t("home:nav_discounts")}`,
          path: '/discounts',
          class: "nav"
      },
      {
          id: "3",
          title: `${t("home:nav_comparison")}`,
          path: '/comparison',
          class: "nav"
      },
      {
          id: "4",
          title: `${t("home:nav_help")}`,
          path: '/help',
          class: "nav"
      },
      {
          id: "5",
          title: `${t("home:nav_site_map")}`,
          path: '/sitemap',
          class: "nav"
      },
    ];


  return (
    <header className="bg-gradient-to-r from-[#e66345] to-[#924f94]">
      <div className="border-b border-blue-900">
      {/* top nav */}
        <div className="max-w-screen-2xl mx-auto flex justify-between text-white">
          {/* left top navbar */}
          <div className="flex items-center justify-between py-8 lg:py-5">
            {navItem.map((item) => (
              <ul className="hidden lg:inline-flex" key={item.id}>
                <li className={item.class}>{item.title}</li>
              </ul>
            ))}
          </div>
          {/* right top navbar */}
          <div className="flex items-center space-x-4">
              <div className='space-x-4'>
                  <span className="text-lg font-medium">+998 (71) 202 202 1</span>
                  <button className="hidden md:inline-flex p-2 border-2 rounded-3xl font-light outline-none">{t("home:nav_btn")}</button>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                  <div onClick={() => router.push("/uz", "/uz", { locale: "uz" })} className="flex items-center md:space-x-2 cursor-pointer">
                    <ReactCountryFlag countryCode="UZ" />
                    <p className="font-medium">O'z</p>
                  </div>
                  <div onClick={() => router.push("/ru", "/ru", { locale: "ru" })} className="flex items-center md:space-x-2 cursor-pointer">
                    <ReactCountryFlag countryCode="RU" />
                    <p className="font-medium">Ру</p>
                  </div>
                  <div onClick={() => router.push("/en", "/en", { locale: "en" })} className="flex items-center md:space-x-2 cursor-pointer">
                    <ReactCountryFlag countryCode="US" />
                    <p className="font-medium">En</p>
                  </div>
              </div>
          </div>
        </div>

      </div>
      {/* bottom navbar */}
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-4 lg:py-8 text-white space-x-4">
        <div className="flex space-x-4">
          <img onClick={() => router.push('/')} className="hidden md:inline-flex cursor-pointer object-contain" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAdCAMAAABoivUCAAAARVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////9SnXPCAAAAFnRSTlMAQMCAEKBgML8g8FBwf5DvsNDP36/gHk3eyAAAAvtJREFUWMPtl8miqyAMhiujDCoO9f0f9SpTgNja3k03519REshniJE+3qhb9k3e2n8juR+a1K39Jxr3U/bW/hMRH5z+hx3rD+43cHLo131fNqteBpdjPx0T/aCwHW/H+1ODuTCavrfwi/Z9cBJDrS41hX7P4grBIRdW282wHRgshWN8At91aNnsOT1Wr5Xxg1Y2O4AmcQFHaxdZ2LsV1sFC0NbAPf1sehD/YzlGO9IEmxUSCI6368AuYNb74jAcwMDcxQPZE+qO5QMjmQbOIg+W7EuagYi6dZafwOFjdUfBxOFMBeU6JoZVcCq6PKmxwUV7O1IfKvtwmUdKafLg93CHJI2K2dIqlYAOR6lmOCCA42WBMucPHuA04ZmTBZeOPcrtpnu4QmwJ28qcOJNMc1tTqWjhBZOdKkqVsHPqCSFLyTCtvoBjCxDxECHbVFoLcCI8CbtswjoEFgiufNbuUzh4ZgFjgRs/DCgUDoYjVyHFtvoet4nlWzgObOCaRTMcGmA4OOwn7BMbH+germXjpStr4UYEZ99/W0kOaQDqazhRv966XT2ihLkw+BCOTbHvEELmb+CAzdUhbFvCFtWc+xBOlEWj3Ds4SHP1Y2Z1otbwGx5FFcFNnrqHa/M8voKzyQ5wcgK2qhPxusvMVfDY/tMisVn2Cg4GqJWIwTIPl9MBNVCwaYb7yqbiHyovAcHhSrJ4F9mfwzs4AwcVS3FJt5ln3M08mFn3DMfW/GEAdXvUwrfkS+pjYzq5bFukly/heEiM8sma9mbadwssn+Pg0ScN11cOrUq4pjvcwYnocWw/Fa1E58LtLuEMnhzRXRMyW1a2aFwc2FGfm3GYLs+GYgW5BEfxqinfcUAkVqSt+lHlMiL7g+c3WhauPE9TqBelwR4y6i4z94zv6KjzDHxmXflFZVRn+u7KPufmxjjs5UFsSu2sgoODWEbHoxpRcZlMYignhFpVvSv0XFW4OEK4lS/sBhYrQR2nnQexyUlSiCYtdTT2aSvSLbAWe/wD4pmeVzYlTdEAAAAASUVORK5CYII=" alt="" />
          <div className="flex items-center cursor-pointer py-3 px-4 border-2 rounded-3xl space-x-2">
            <span>{t("home:nav_katalog")}</span> 
            <MenuIcon className="h-6" />
          </div>
        </div>
        <div className="hidden lg:inline-flex flex-grow rounded-3xl py-2 md:py-3 border-2 bg-white">
          <input className="flex flex-grow bg-transparent outline-none px-4" type="text" placeholder={`${t("home:nav_placeholeder")}`} />
          <SearchIcon className="h-6 cursor-pointer text-red-600 px-3" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center space-y-1">
            <UserIcon className="h-6 cursor-pointer mb-1" />
            <p className="text-md font-light">{t("home:nav_login")}</p>
          </div>
          <div onClick={() => router.push("/favorite")} className="relative flex flex-col items-center space-y-1">
            <span className="absolute top-0 right-4 bg-gray-900 h-4 w-4 text-center rounded-full text-xs">{liked.length}</span>
            <HeartIcon className="h-6 cursor-pointer" />
            <p className="text-md font-light">{t("home:nav_favorites")}</p>
          </div>
          <div onClick={() => router.push("/basket")} className="relative flex flex-col items-center space-y-1">
            <span className="absolute top-0 right-4 bg-gray-900 h-4 w-4 text-center rounded-full text-xs">{items.length}</span>
            <ShoppingCartIcon className="h-6 cursor-pointer" />
            <p className="text-md font-light">{t("home:nav_bascket")}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
