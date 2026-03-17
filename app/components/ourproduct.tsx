"use client";
import { useEffect, useState } from "react";
// import { products } from "../data/products";
import Card from "./Card";
import ButtonPrevNext from "./buttonPrevNext";
import Tag from "./tag";
import { userService } from "@/services/productService";
import { Products } from "../data/products";

export const OurProducts = () => {
  // const products = await userService.getAll();
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await userService.getAll(); // รอข้อมูล
        setProducts(data); // เมื่อได้ข้อมูลแล้วค่อย set state
      } catch (error) {
        console.error("โหลดข้อมูลไม่สำเร็จ:", error);
      }
    };

    // 2. เรียกใช้งานฟังก์ชันนั้น
    fetchProducts();

  }, []);
  
  const listProduct = [...products, ...products, ...products];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 10);
    }
  };

  const handleNext = () => {
    if (currentIndex < listProduct.length - 10) {
      setCurrentIndex((prevIndex) => prevIndex + 10);
    }
  };

  const displayedProducts = listProduct.slice(currentIndex, currentIndex + 10);
  return (
    <div className="flex flex-col gap-y-[60px]">
      <Tag tag="Our Products">
        <div className="flex items-center ">
          <div className="flex justify-start items-start w-full ">
            <h1 className="text-[36px] font-inter font-semibold text-[#000000]  ">
              Explore Our Products
            </h1>
          </div>

          <ButtonPrevNext onPrev={handlePrev} onNext={handleNext} />
        </div>
      </Tag>
      <div className="grid grid-cols-5 grid-rows-2 gap-x-[30px] gap-y-[60px] justify-center">
        {displayedProducts.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>

      <div className="mt-[60px] flex justify-center items-center">
        <button className="bg-[#DB4444] hover:bg-[#DB4444]/80 text-white px-12 font-poppins font-medium text-[16px] cursor-pointer py-4 rounded-[4px]">
          View All Products
        </button>
      </div>
    </div>
  );
};
