"use client";
import ButtonPrevNext from "./buttonPrevNext";
import Tag from "./tag";
import { categories } from "../data/categories";
import { useEffect, useRef } from "react";

export default function Categories() {
    const sliderRef = useRef<HTMLDivElement>(null);
    function scrollLeft(){
        const slider = sliderRef.current;
        if (!slider) return;
        slider.scrollBy({ left: -170, behavior: "smooth" });
        
    }
    function scrollRight(){
        const slider = sliderRef.current;
        if (!slider) return;
        slider.scrollBy({ left: 170, behavior: "smooth" });
    }
    
    useEffect(() => {
    const el = sliderRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      // เช็คว่ามี scroll แนวนอนจริงไหม
      if (el.scrollWidth <= el.clientWidth) return

      e.preventDefault()
      e.stopPropagation()

      el.scrollLeft += e.deltaY * 0.3;
    }

    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      el.removeEventListener('wheel', onWheel)
    }
  }, [])


  return (
    <div  className="flex flex-col gap-y-[60px] relative pb-[70px] mb-[70px] border-b border-[rgb(0,0,0,0.3)]">
      <Tag tag="Categories">
        <div className="flex items-center ">
          <div className="flex justify-start items-start w-full ">
            <h1 className="text-[36px] font-inter font-semibold text-[#000000]  ">
              Browse by Category
            </h1>
          </div>

          <ButtonPrevNext onPrev={scrollLeft} onNext={scrollRight} />
        </div>
      </Tag>
      <div ref={sliderRef}
      className="flex items-center gap-x-[30px] overflow-x-scroll scrollbar-hide transition-all ">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center justify-center gap-y-[16px] 
          border border-[rgb(0,0,0,0.3)] rounded-[4px] px-[55px] py-[25px] aspect-170/145 w-[170px] hover:bg-[#DB4444] hover:text-white 
          hover:border-none cursor-pointer">
            {category.icon}
            <p className="text-[16px] font-poppins whitespace-nowrap ">{category.name}</p>  
          </div>
        ))}
      </div>
    </div>
  );
}
