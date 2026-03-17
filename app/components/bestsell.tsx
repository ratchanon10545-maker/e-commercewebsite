import { bestsell } from "../data/bestsell";
import Card from "./Card";
import Tag from "./tag";
import { userService } from "@/services/productService";
import { Products } from "../data/products";

export default async function BestSell() {
  const products = await userService.getAll();
  const topRatedProducts = products
  .map((product:Products) => {
    const totalReviews = product.review.reduce((acc:number, r:{star: number, count: number}) => acc + r.count, 0);
    const totalScore = product.review.reduce((acc:number, r:{star: number, count: number}) => acc + (r.star * r.count), 0);
    const averageRating = totalReviews > 0 ? totalScore / totalReviews : 0;

    return { ...product, averageRating };
  })
  .sort((a:Products, b:Products) => b.averageRating! - a.averageRating!);

  const bestSellProducts = topRatedProducts.slice(0, 5);

  return (
    <div className="flex flex-col gap-y-[60px]">
      <Tag tag="This Month">
        <div className="flex items-center ">
          <div className="flex justify-start items-start w-full ">
            <h1 className="text-[36px] font-inter font-semibold text-[#000000]  ">
              Best Selling Products
            </h1>
          </div>

          <div>
            <button className="text-[16px] font-poppins font-medium bg-[#DB4444] hover:bg-[#DB4444]/80 text-white px-[48px] py-[16px] rounded-[4px] whitespace-nowrap cursor-pointer">
              View All
            </button>
          </div>
        </div>
      </Tag>
      <div className="grid grid-cols-5 gap-x-[30px] ">
        {bestSellProducts.map((product:Products) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
