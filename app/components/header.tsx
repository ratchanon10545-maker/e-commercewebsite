"use client";
import DownArrow from "./icons/downarrow";
import LeftArrow from "./icons/leftarrow";
import { useState, useEffect } from "react";

export default function Header() {
  const [list, setList] = useState([
    {
      title: "Woman’s Fashion",
      subtitle: [
        {
          title: "New Arrivals",
          href: "/new-arrivals",
        },
        {
          title: "New Arrivals2",
          href: "/new-arrivals",
        },
      ],
      isOpen: false,
    },
    {
      title: "Man’s Fashion",
      subtitle: [
        {
          title: "New Arrivals",
          href: "/new-arrivals",
        },
      ],
      isOpen: false,
    },
    {
      title: "Electronics",
      subtitle: [],
      isOpen: false,
    },
    {
      title: "Home & Lifestyle",
      subtitle: [],
      isOpen: false,
    },
    {
      title: "Medicine",
      subtitle: [],
      isOpen: false,
    },
    {
      title: "Sports & Outdoor",
      subtitle: [],
      isOpen: false,
    },
    {
      title: "Baby’s & Toys",
      subtitle: [],
      isOpen: false,
    },
    {
      title: "Groceries & Pets",
      subtitle: [],
      isOpen: false,
    },
    {
      title: "Health & Beauty",
      subtitle: [],
      isOpen: false,
    },
  ]);

  const [banner, setBanner] = useState([
    {
      title: "iPhone 14 seires",
      image: "/images/Frame1.png",
    },
    {
      title: "iPhone 14 seires2",
      image: "/images/Frame2.png",
    },
    {
      title: "iPhone 14 seires3",
      image: "/images/Frame3.png",
    },
  ]);

  const [activeBanner, setActiveBanner] = useState(0);

  const [prevBanner, setPrevBanner] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("left");

  function expandsubtitle(title: string) {
    setList((prev) =>
      prev.map((item) =>
        item.title === title ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  }

  function changeBanner(index: number) {
    if (index === activeBanner) return;

    setPrevBanner(activeBanner);
    setDirection(index > activeBanner ? "left" : "right");
    setActiveBanner(index);

    // ล้าง prev หลัง animation จบ
    // setTimeout(() => setPrevBanner(null), 1000);
  }

  function changeBannerauto() {
    const next = activeBanner === banner.length - 1 ? 0 : activeBanner + 1;
    changeBanner(next);
  }

  useEffect(() => {
    const interval = setInterval(changeBannerauto, 5000);
    return () => clearInterval(interval);
  }, [activeBanner]);

  return (
    <div className="flex items-start">
      <div
        className="overflow-auto scrollbar flex flex-col gap-y-[16px] text-[16px] font-poppins pt-[40px] pr-[16px] border-r 
              border-[#E5E5E5] w-2/8 self-stretch"
      >
        {list.map((item) => {
          return (
            <div key={item.title} >
              <div className="relative">
                <div className="">
                  <p className="">{item.title}</p>
                </div>

                {item.subtitle.length > 0 && (
                  <div
                    className="cursor-pointer absolute right-[16px] top-1/2 -translate-y-1/2"
                    onClick={() => expandsubtitle(item.title)}
                  >
                    {item.isOpen ? (
                      <DownArrow width={16} height={12} />
                    ) : (
                      <LeftArrow width={8} height={12} />
                    )}
                  </div>
                )}
              </div>
              {item.subtitle.length > 0 && item.isOpen && (
                <div className="flex flex-col gap-y-[16px] border-t border-[#E5E5E5] indent-5 p-2">
                  {item.subtitle.map((subtitle) => {
                    return (
                      <div key={subtitle.title}>
                        <p>{subtitle.title}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-6/8 ml-[45px] mt-[40px] ">
        <div className="relative overflow-hidden w-full aspect-892/344 ">
          {banner.map((item, index) => {
            let className = "hidden";

            if (index === activeBanner) {
              className =
                direction === "left" ? "slide-in-left" : "slide-in-right";
            }

            if (index === prevBanner) {
              className =
                direction === "left" ? "slide-out-left" : "slide-out-right";
            }

            return (
              <div
                key={item.title}
                className={`absolute inset-0 ${className}`}
                onAnimationEnd={() => {
                  if (index === prevBanner) {
                    setPrevBanner(null);
                  }
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-fit"
                />
              </div>
            );
          })}

          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex gap-x-[12px] items-center">
            {banner.map((item, index) => {
              return (
                <div
                  key={item.title}
                  onClick={() => changeBanner(index)}
                  className={
                    "p-2  rounded-full cursor-pointer transition-all " +
                    (index === activeBanner
                      ? "border-2 border-white bg-[#DB4444]"
                      : "bg-white opacity-50")
                  }
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
