"use client";
import Link from "next/link";
import Cart from "./icons/cart";
import Heart from "./icons/heart";
import Search from "./icons/search";
import { usePathname, useRouter } from "next/navigation";
import { User } from "../data/user";
import UserIcon from "./icons/user";
import { useState } from "react";
import Star from "./icons/star";
import Mailbag from "./icons/mailbag";
import Cancel from "./icons/cancel";
import Review from "./icons/review";
import Logout from "./icons/logout";
import { cart } from "../data/cart";
import { logout } from "@/lib/auth";

export default function Navbar({ user }: { user: User | null }) {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Sign Up", href: "/signup" },
  ];

  const userMenu = [
    { label: "Manage My Account", href: "#", icon: UserIcon, w: 32, h: 32 },
    { label: "My Order", href: "#", icon: Mailbag, w: 24, h: 24 },
    { label: "My Cancellations", href: "#", icon: Cancel, w: 24, h: 24 },
    { label: "Reviews", href: "#", icon: Review, w: 24, h: 24 },
    { label: "Logout", href: "#", icon: Logout, w: 24, h: 24 },
  ];
  const handleUserClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const userCart = cart.filter((item) => item.uid === user?.id);

  return (
    <div className="flex justify-between items-center mt-[40px] mb-[16px] ">
      <div className="font-innter text-[24px] font-bold">
        <h1>Exclusive</h1>
      </div>

      <div className="flex items-center gap-[48px] font-poppins text-[16px] [&>div]:cursor-pointer">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`cursor-pointer transition-colors
              ${isActive ? "text-black font-semibold border-b border-black" : " hover:text-gray-500"}
            `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-[24px] ">
        {/* sreach */}
        <div
          className="font-poppins text-[12px] flex gap-x-[34px] py-[7px] pl-[20px] pr-[12px] rounded-[4px]  bg-[#F5F5F5] 
        w-full "
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none w-full"
          />
          <div className="cursor-pointer ">
            <Search width={18} height={18} />
          </div>
        </div>
        {/* menu */}
        <div className="flex items-center gap-x-[16px] [&>div]:cursor-pointer relative">
          <div>
            <Heart width={22} height={20} />
          </div>
          <div
          onClick={() => {
            router.push("/cart");
          }}
           
          className="relative hover:bg-[#DB4444] hover:text-white rounded-[50%] p-[2px]">
            {user && (
              <span className="absolute top-[-4px] right-[-4px] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {userCart.length}
              </span>
            )}
            <Cart width={32} height={32} />
          </div>
          {user && (
            <div
              onClick={handleUserClick}
              className={
                "hover:bg-[#DB4444] hover:text-white rounded-[50%] p-[2px] " +
                (isUserMenuOpen ? "bg-[#DB4444] text-white" : "")
              }
            >
              <UserIcon w={35} h={35} />
            </div>
          )}
          {isUserMenuOpen && (
            <div className="absolute top-full right-0 aspect-224/208 w-[224px] px-[16px] bg-black/20 backdrop-blur-3xl text-[#FAFAFA]  rounded-md shadow-lg z-50">
              {userMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex  items-center gap-x-[16px] py-[12px] group"
                >
                  <item.icon w={item.w} h={item.h} />
                  <span
                    onClick={() => {
                      if (item.label === "Logout") {
                        logout();
                      }
                      handleUserClick();
                    }}
                    className="font-poppins text-[14px] group-hover:-translate-y-1 transition-all
                  group-hover:underline group-hover:underline-offset-3"
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
