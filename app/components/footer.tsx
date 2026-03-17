import Facebook from "./icons/facebook";
import { Instagram } from "./icons/intragram";
import { Linkedin } from "./icons/linked";
import { Send } from "./icons/send";
import Twitter from "./icons/twitter";

export default function Footer() {
  return (
    <div className="w-full bg-black ">
      <div className="flex gap-x-[87px] justify-center text-white py-[80px]">
        <div className="flex flex-col gap-y-[24px]">
        <p className="text-[24px] font-bold font-inter">Exclusive</p>
        <p className="text-[20px] font-medium font-poppins">Subscribe</p>
        <p className="text-[16px] font-normal font-poppins">
          Get 10% off your first order
        </p>
        <div className="flex gap-x-1 border border-white rounded-[4px] px-[16px] py-[12px]">
          <input
            type="text"
            placeholder="Enter your email"
            className="font-poppins text-[16px] font-normal focus:border-none focus:outline-none"
          />
          <button className="cursor-pointer">
            <Send w={24} h={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-[24px]">
        <p className="text-[20px] font-medium font-poppins">Support</p>
        <div className="flex flex-col gap-y-[16px]">
          <p className="text-[16px] font-normal font-poppins">
            111 Bijoy Sarani, Dhaka, Bangladesh
          </p>
          <p className="text-[16px] font-normal font-poppins">
            exclusive@gmail.com
          </p>
          <p className="text-[16px] font-normal font-poppins">
            +88015-88888-9999
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-[24px]">
        <p className="text-[20px] font-medium font-poppins">Account</p>
        <div className="flex flex-col gap-y-[16px]">
          <p className="text-[16px] font-normal font-poppins">My Account</p>
          <p className="text-[16px] font-normal font-poppins">
            Login / Register
          </p>
          <p className="text-[16px] font-normal font-poppins">Cart</p>
          <p className="text-[16px] font-normal font-poppins">Wishlist</p>
          <p className="text-[16px] font-normal font-poppins">Shop</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-[24px]">
        <p className="text-[20px] font-medium font-poppins">Quick Links</p>
        <div className="flex flex-col gap-y-[16px]">
          <p className="text-[16px] font-normal font-poppins">Privacy Policy</p>
          <p className="text-[16px] font-normal font-poppins">Terms Of Use</p>
          <p className="text-[16px] font-normal font-poppins">FAQ</p>
          <p className="text-[16px] font-normal font-poppins">Contact</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-[24px]">
        <p className="text-[20px] font-medium font-poppins">Download App</p>
        <div className="flex flex-col gap-y-[8px]">
          <p className="font-poppins font-medium text-[12px] text-[#FAFAFA]/70">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-x-[8px]">
            <div className="aspect-square w-[80px]">
              <img
                src="/images/dowloadapp/Qr Code.png"
                alt="Qr Code"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-y-[4px] [&>div]:cursor-pointer">
              <div className="aspect-110/40 w-[110px]">
                <img
                  src="/images/dowloadapp/Google Play.png"
                  alt="Google Play"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="aspect-110/40 w-[110px]">
                <img
                  src="/images/dowloadapp/App Store.png"
                  alt="App Store"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-[24px] [&>svg]:cursor-pointer">
            <Facebook w={20} h={20} />
            <Twitter w={20} h={20} />
            <Instagram w={20} h={20} />
            <Linkedin w={20} h={20} />
        </div>
      </div>
      </div>

      <div className="w-full border-t border-white opacity-40 py-[24px]">
        <p className="text-center text-[16px] font-normal font-poppins text-[#FAFAFA] ">
           © Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
}
