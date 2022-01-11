import React from 'react'
import {AiFillInstagram} from "react-icons/ai"
import {FaTelegram, FaFacebook} from "react-icons/fa"

function Footer() {
    return (
        <div className="py-14 bg-[#242020] text-white">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-6 lg:px-0">
                <div className="">
                     <img onClick={() => router.push('/')} className="hidden md:inline-flex cursor-pointer object-contain pb-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAdCAMAAABoivUCAAAAP1BMVEUAAADrFDbrFDTrFDbrFDbvEDDqFTbsEzXqFTXvEDjsEzbqFTbrFDfrFDbsEzfrFDfqFTfrFDbrFDfqFTfrFTdczmhMAAAAFHRSTlMAwECA8BDQYDAgUKBwf5Cw36/gnx0MDQsAAALoSURBVFjD7ZfLgqsgDIYbwx28+/7PeqwNBogdO7Pp5vwrSgL5DDHSxw/qzDa7W/t35LZdyt/av6Jheyrd2r8iOILjH+xS/+G+A+d6mLbNzMm/De4GUPsE9F7a5XYrPNWHC2MAKCoVAV5Otq/V5aYA26nVCzjhomt76OcdQ+dwelXsO/UtW3pOD9VrFWhQK50OLGUv4LB2cYW9m3gdL2TNDdxyzOYHOX6YfbQJKdqslhVwsV3HdktT2VeGWRmMzR0dyJZRNykK3Cg0cEl46Gw3eYYjqtbZfQInj3XcC4aGBi1G2lfpCs6Ty4IhRcWZE4JXZe8uZkDE7BHv4XY5JEWC8FQCuWC84QNiuFgWqB6Pg2c4BfHk1C+XTj/K7dQ9XCFNi9yZuJBNpq2pXLT8grnOF6UK+jm1cMhS7jXtfwGnDRNFOo8sn9cynKWjlk2Yv/xWwJXP2n0Kx89seWxl4+cBcuFIOLgKaefp6HGz/TVcJDbpyh0NJaWAqw574X2o8bHu4Vq2WLrqFm4QcOnnbytQSKriP8LZ+vVW7epBJGykwWdwWlHfAQDzGzhmG+sQqS3hJGpu/BDOlkXjxxs4SnP1w+g6URP9Ph/FF8HDOXUP1+Z5eAeXsp3hnCK2thOtdZcxVXBuaPQuJv0ejgayldg+aYKjdHANFGxKy74ye/pDdchWwZHSfbg4eA7v4AIfFJWiybeZhXYLDx0m/sTrfUwurG4jmXXOvlAfm1bZZZ6J3r2Fi6/EePrKNtPtRYPhDGUUsvrrK4fyJVzTHe7gLHkAgCpaCY09ZaPRZQMa5F2TMltXtpW3GbLLPmcu+5zhhgrlRhkOry+bnP268FPVjyqXQdjpsDwVdlY8p5HrxSu2P9R5cxNa6B0d1DnDn9mx/KJqPF2gu7Kbs7npyHsdICmn1ni6dXGsoOioBpG4cJIEjACYfPWuoKMRuYwAMbk39sCLvcUxYneApOzkkKO5hCNSn0423wJr6cc/ax2OvLqICpMAAAAASUVORK5CYII=" alt="" />
                    <p className="text-base">Murojaat Uchun:</p>
                    <p className="text-base pb-3">+998 (71) 202 202 1</p>
                    <img className="pt-4 h-14 cursor-pointer" src="https://olcha.uz/_nuxt/img/appstore.367673c.png" alt="" />
                </div>
                <div className="">
                    <div className="flex items-center space-x-2 pb-3">
                        <FaTelegram className="text-3xl" />
                        <p>Instagram</p>
                    </div>
                    <div className="flex items-center space-x-2 pb-3">
                        <AiFillInstagram className="text-3xl" />
                        <p>Instagram</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaFacebook className="text-3xl" />
                        <p>Instagram</p>
                    </div>
                    <img className="pt-4 h-14 cursor-pointer" src="https://olcha.uz/_nuxt/img/appstore.367673c.png" alt="" />
                </div>

                <div className="cursor-pointer pt-4 lg:pt-0">
                    <h2 className="text-xl font-semibold text-[#eb1537]">Информация</h2>
                    <p className="text-base py-3">О компании</p>
                    <p className="text-base pb-3">Вакансии</p>
                    <p className="text-base py-3">Публичная оферта</p>
                    <p className="text-base pb-3">Возврат и обмен товаров</p>
                    <p className="text-base py-3">B2B и сотрудничество</p>
                    <p className="text-base border rounded-full p-1 w-56 px-3">Корпоративным клиентам</p>
                </div>
                <div className="cursor-pointer pt-4 lg:pt-0">
                    <p className="text-base py-3">Eco-friendly</p>
                    <p className="text-base pb-3">Политика обработки персональных</p>
                    <p className="text-base py-3">Оплата и Доставка Товара</p>
                    <p className="text-base pb-3">Бонусы и акции</p>
                    <p className="text-base py-3">Условия рассрочки</p>
                </div>

                <div className="grid-rows-2 lg:grid-cols-3 gap-4 hidden lg:inline-grid">
                    <div className="p-3 rounded-xl bg-white h-14">
                        <img src="https://olcha.uz/_nuxt/img/apelsin.93106ae.png" alt="" />
                    </div>
                    <div className="p-3 rounded-xl bg-white h-14">
                        <img src="https://olcha.uz/_nuxt/img/click.93445f6.png" alt="" />
                    </div>
                    <div className="p-3 rounded-xl bg-white h-14">
                        <img src="https://olcha.uz/_nuxt/img/payme.e57aa2a.png" alt="" />
                    </div>
                     <div className="p-3 rounded-xl bg-white h-14">
                        <img src="https://olcha.uz/_nuxt/img/apelsin.93106ae.png" alt="" />
                    </div>
                    <div className="p-3 rounded-xl bg-white h-14">
                        <img src="https://olcha.uz/_nuxt/img/click.93445f6.png" alt="" />
                    </div>
                    <div className="p-3 rounded-xl bg-white h-14">
                        <img src="https://olcha.uz/_nuxt/img/payme.e57aa2a.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
