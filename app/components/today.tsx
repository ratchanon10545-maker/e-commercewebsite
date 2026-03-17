"use client";
import { useEffect, useRef, useState } from "react";
import ButtonPrevNext from "./buttonPrevNext";
import Twodot from "./icons/twodot";
import Tag from "./tag";
import Card from "./Card";
import { flashsaleService } from "@/services/flashsaleService";
import { Flashsales } from "../data/flashsales";

export default function Today() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [flashsales, setFlashsales] = useState<Flashsales>({
    product: [],
    targetDate: ""
  });
  useEffect(() => {
    const fetchFlashsales = async () => {
      try {
        const data = await flashsaleService.getAll(); // รอข้อมูล
        setFlashsales(data); // เมื่อได้ข้อมูลแล้วค่อย set state
      } catch (error) {
        console.error("โหลดข้อมูลไม่สำเร็จ:", error);
      }
    };

    // 2. เรียกใช้งานฟังก์ชันนั้น
    fetchFlashsales();

  }, []);
  // const CARD_WIDTH = 1
  // const AUTO_SCROLL_DELAY = 1;

  const speed = 1; // 👉 px ต่อ frame (ปรับตรงนี้)

  const loopCards = [
    ...flashsales.product,
    ...flashsales.product,
    ...flashsales.product,
    ...flashsales.product,
  ];

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const isAutoScroll = useRef(true);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      const slider = sliderRef.current;
      if (!slider) return;

      if (isAutoScroll.current && !isDragging.current) {
        slider.scrollLeft += speed;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const startDrag = (clientX: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDragging.current = true;
    isAutoScroll.current = false;

    startX.current = clientX;
    scrollStart.current = slider.scrollLeft;
  };

  const onDrag = (clientX: number) => {
    const slider = sliderRef.current;
    if (!slider || !isDragging.current) return;

    const walk = startX.current - clientX;
    slider.scrollLeft = scrollStart.current + walk;
  };

  const endDrag = () => {
    isDragging.current = false;
    isAutoScroll.current = true;
    // ให้ auto scroll กลับมาหลังปล่อย
    // setTimeout(() => {
    //   isAutoScroll.current = true;
    // }, 800);
  };

  const pauseAutoScroll = () => {
    isAutoScroll.current = false;
    setTimeout(() => {
      isAutoScroll.current = true;
    }, 1000);
  };

  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    pauseAutoScroll();

    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollWidth / 2;
    }

    slider.scrollBy({ left: -270, behavior: "smooth" });
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    pauseAutoScroll();

    slider.scrollBy({ left: 270, behavior: "smooth" });

    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      setTimeout(() => {
        slider.scrollLeft = 0;
      }, 400);
    }
  };

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  // เวลาปลายทาง
  
  useEffect(() => {
    if (!flashsales.targetDate) return;
    
    const targetDate = new Date(flashsales.targetDate); // Feb 1, 2026  

    const countdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const m = Math.floor((distance / (1000 * 60)) % 60);
      const s = Math.floor((distance / 1000) % 60);

      setDays(String(d).padStart(2, "0"));
      setHours(String(h).padStart(2, "0"));
      setMinutes(String(m).padStart(2, "0"));
      setSeconds(String(s).padStart(2, "0"));
    };

    countdown(); // run ครั้งแรก
    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval);
  }, [flashsales.targetDate]);

  return (
    <div className="relative pb-[60px] border-b border-[rgb(0,0,0,0.3)]">
      <Tag tag="Today's">
        <div className="flex items-center ">
          <div className="flex justify-start items-start w-full ">
            <h1 className="text-[36px] font-inter font-semibold text-[#000000]  ">
              Flash Sales
            </h1>
            <div className="flex gap-x-[17px] ml-[84px] items-end">
              <div className="leading-6 ">
                <p className="text-[12px] font-poppins font-medium text-[#000000] ">
                  Days
                </p>
                <p className="text-[32px] font-inter font-bold text-[#000000]">
                  {days}
                </p>
              </div>
              <div className="text-[#E07575] ">
                <Twodot width="4" height="4" />
              </div>
              <div className="leading-6">
                <p className="text-[12px] font-poppins font-medium text-[#000000]">
                  Hours
                </p>
                <p className="text-[32px] font-inter font-bold text-[#000000]">
                  {hours}
                </p>
              </div>
              <div className="text-[#E07575] ">
                <Twodot width="4" height="4" />
              </div>
              <div className="leading-6">
                <p className="text-[12px] font-poppins font-medium text-[#000000]">
                  Minutes
                </p>
                <p className="text-[32px] font-inter font-bold text-[#000000]">
                  {minutes}
                </p>
              </div>
              <div className="text-[#E07575] ">
                <Twodot width="4" height="4" />
              </div>
              <div className="leading-6">
                <p className="text-[12px] font-poppins font-medium text-[#000000]">
                  Seconds
                </p>
                <p className="text-[32px] font-inter font-bold text-[#000000]">
                  {seconds}
                </p>
              </div>
            </div>
          </div>

          <ButtonPrevNext onPrev={scrollLeft} onNext={scrollRight} />
        </div>
      </Tag>
      <div
        ref={sliderRef}
        className="absolute left-1/2 -translate-x-1/2 w-screen top-[160px] flex gap-4 scrollbar-hide overflow-x-auto mb-[60px] pr-4"
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => onDrag(e.clientX)}
        onMouseUp={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => onDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        {loopCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="mt-[450px] flex justify-center items-center">
        <button className="bg-[#DB4444] hover:bg-[#DB4444]/80 text-white px-12 font-poppins font-medium text-[16px] cursor-pointer py-4 rounded-[4px]">View All Products</button>
      </div>
    </div>
  );
}
