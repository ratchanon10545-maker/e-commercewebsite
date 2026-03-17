"use client";
import { useEffect, useState } from "react";

export default function Banner() {
    const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  // เวลาปลายทาง
  const targetDate = new Date('2026-02-20'); // Feb 1, 2026

  useEffect(() => {
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
  }, []);

    return (
        <div className="relative">
            <img src="/images/banner.png" alt="" className="aspect-1170/500 w-full object-cover"/>
            <div className="absolute top-1/2 transform -translate-y-1/2 ml-[56px] flex flex-col gap-y-[32px]">
                <p className="font-poppins text-[16px] font-semibold text-[#00FF66]">Categories</p>
                <p className="font-innter text-[48px] font-semibold text-white whitespace-break-spaces">Enhance Your <br />Music Experience</p>
                <div className="flex gap-x-[16px] items-center">
                    <div className="bg-white rounded-full aspect-square w-[62px] font-poppins font-semibold text-[16px] 
                    flex flex-col items-center justify-center">
                        <p>{days}</p>
                        <p className="text-[11px] font-normal">Days</p>
                        
                    </div>
                    <div className="bg-white rounded-full aspect-square w-[62px] font-poppins font-semibold text-[16px] 
                    flex flex-col items-center justify-center">
                        <p>{hours}</p>
                        <p className="text-[11px] font-normal">Hours</p>
                        
                    </div>
                    <div className="bg-white rounded-full aspect-square w-[62px] font-poppins font-semibold text-[16px] 
                    flex flex-col items-center justify-center">
                        <p>{minutes}</p>
                        <p className="text-[11px] font-normal">Minutes</p>
                        
                    </div>
                    <div className="bg-white rounded-full aspect-square w-[62px] font-poppins font-semibold text-[16px] 
                    flex flex-col items-center justify-center">
                        <p>{seconds}</p>
                        <p className="text-[11px] font-normal">Seconds</p>
                        
                    </div>
                </div>
                <button className="bg-[#00FF66] px-[48px] py-[16px] rounded-[4px] w-[171px] aspect-171/56 text-white
                font-poppins font-medium text-[16px] cursor-pointer hover:bg-[#00FF66]/80">Buy Now!</button>
            </div>
        </div>
    );
}