import Delivery from "./icons/delivery";
import { Secure } from "./icons/secure";
import { Service } from "./icons/service";

export default function Policy() {
  return (
    <div className="flex justify-center gap-x-[88px]">
      <div className="relative">
        <div className="p-[11px] bg-[#2F2E30]/30 rounded-full flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
          <div className="p-[9px] text-white bg-black rounded-full ">
            <Delivery width={40} height={40} />
          </div>
        </div>
        <div className="mt-[128px] text-center">
          <p className="text-[20px] font-semibold font-poppins">FREE AND FAST DELIVERY</p>
          <p className="text-[14px] font-normal font-poppins">Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className="relative">
        <div className="p-[11px] bg-[#2F2E30]/30 rounded-full flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
          <div className="p-[9px] text-white bg-black rounded-full ">
            <Service width={40} height={40} />
          </div>
        </div>
        <div className="mt-[128px] text-center">
          <p className="text-[20px] font-semibold font-poppins">24/7 CUSTOMER SERVICE</p>
          <p className="text-[14px] font-normal font-poppins">Friendly 24/7 customer support</p>
        </div>
      </div>

      <div className="relative">
        <div className="p-[11px] bg-[#2F2E30]/30 rounded-full flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2">
          <div className="p-[9px] text-white bg-black rounded-full ">
            <Secure width={40} height={40} />
          </div>
        </div>
        <div className="mt-[128px] text-center">
          <p className="text-[20px] font-semibold font-poppins">MONEY BACK GUARANTEE</p>
          <p className="text-[14px] font-normal font-poppins">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
