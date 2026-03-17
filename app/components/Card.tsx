// components/Card.tsx
import Image from "next/image"
import Link from "next/link"
import Star from "./icons/star"
import { StarRating } from "./rating"
import Eye from "./icons/eye"
import Heart from "./icons/heart"

type CardProps = {
  name: string
  image: string
  href: string
  price: number
  discount: number
  review: {
    star: number
    count: number
  }[]
}

export default function Card({ name, image, href, price, discount, review }: CardProps) {
  const totalReview = review.reduce((acc, item) => acc + item.count, 0)
  const totalStar = review.reduce((acc, item) => acc + item.star * item.count, 0)
  const averageStar = totalStar / totalReview
  return (
    <div
      className=" bg-white transition flex flex-col gap-y-[16px] group "
    >
      <div className="relative overflow-hidden aspect-270/250 w-[270px] items-center  py-[35px] px-[40px] bg-[#F5F5F5] rounded-[4px]">
        <img src={image} alt={name} className="w-full h-full object-contain select-none pointer-events-none" />
        {discount > 0 && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </span>
        )}
        <div className="absolute bottom-0 left-0 w-full cursor-pointer bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all">
            Add to Cart
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-y-[8px] [&>div]:cursor-pointer">
            <div className="bg-white rounded-full p-[8px] hover:bg-[#DB4444] hover:text-white transition-all">
                <Heart width="20" height="20" />
            </div>
            <div className="bg-white rounded-full p-[8px] hover:bg-[#DB4444] hover:text-white transition-all">
                <Eye width="20" height="20" />
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <div className="font-medium font-poppins text-[16px]">{name}</div>
        <div className="font-medium font-poppins text-[16px] text-[#DB4444] flex gap-x-[12px]">
          <p>${price - price * discount / 100}</p>
          {discount > 0 && (
          <p className="text-[#000000] opacity-50 line-through">${price}</p>
          )}
        </div>
        <div className="flex gap-x-[8px] items-center">
          <StarRating rating={averageStar} />   
          <p className="text-[12px] font-poppins font-medium text-[#000000]">
            ({totalReview})
          </p>
        </div>
      </div>
    </div>
  )
}
