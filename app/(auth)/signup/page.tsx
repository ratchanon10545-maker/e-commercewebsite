
"use client";
import Google from "../../components/icons/google";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-[48px] ">
        <div className="flex flex-col gap-[24px]">
          <p className="text-[36px] font-medium font-inter">
            Create an account
          </p>
          <p className="text-[16px] font-normal font-poppins">
            Enter your details below
          </p>
        </div>
        <div className="flex flex-col gap-y-[40px] text-[16px] font-normal font-poppins">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-black/50 pb-[8px]  focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full border-b border-black/50 pb-[8px]  focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-black/50 pb-[8px]  focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] justify-center">
          <button
            className="text-white bg-[#DB4444] font-medium py-[16px] w-full rounded-[4px] cursor-pointer 
                    hover:bg-[#DB4444]/80 "
          >
            Create Account
          </button>
          <div className="flex gap-x-[12px] items-center justify-center border border-black/50 py-[16px] rounded-[4px] cursor-pointer">
            <Google w={24} h={24} />
            <p className="text-[16px] font-normal font-poppins">
              Login with Google
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-[8px] font-poppins">
          <p className="text-[16px] font-normal text-black/70">
            Already have an account?
          </p>
          <p onClick={() => router.push("/signin")} className="text-[16px] font-medium text-black/70 underline underline-offset-8 cursor-pointer hover:text-[#DB4444]">
            Login
          </p>
        </div>
      </div>
  );
}
