"use client";

import { useState } from "react";
import Image from "next/image";
import AuthForm from "../auth/AuthForm";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AddCircleHalfDotIcon,
  ArrowDataTransferDiagonalIcon,
  ArrowUpRight03Icon,
  LanguageSkillIcon,
  Logout01Icon,
  Message01Icon,
  PaymentSuccess01Icon,
  Search01Icon,
  TaxiFreeIcons,
  UserIcon,
} from "@hugeicons/core-free-icons";
import SearchForm from "../searchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "../ui/profile";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const login = true;
  function handleSearch() {}

  const menuItems = [
    { icon: TaxiFreeIcons, label: "Your Rides", path: "/your-rides" },
    {
      icon: TaxiFreeIcons,
      label: "Previous Rides",
      path: "/previous-rides",
    },
    { icon: Message01Icon, label: "Inbox", path: "/inbox" },
    { icon: UserIcon, label: "Profile", path: "/profile" },
    {
      icon: ArrowDataTransferDiagonalIcon,
      label: "Transfers",
      path: "/transfers",
    },
    {
      icon: PaymentSuccess01Icon,
      label: "Payments and Refunds",
      path: "/payments-and-refunds",
    },
    { icon: Logout01Icon, label: "Logout", path: "/logout" },
  ];

  return (
    <header className=" py-5 px-20  bg-[#fafafa] shadow w-full border-b border-[#E0E1E0] flex flex-col gap-5">
      <div className="flex w-full justify-between  items-center ">
        {/* Logo */}
        <Link href={"/dashboard"}>
          <div className="flex items-center gap-2 cursor-pointer ">
            {/* <div className="w-6 h-6 bg-purple-600 rounded" /> */}
            <Image src="/images/logo.png" alt="Logo" width={24} height={24} />
            <span className="font-semibold text-lg text-[#1A1A1A]">
              RideShare
            </span>
          </div>
        </Link>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/search-ride"
            className="py-2 px-4 bg-white rounded-full border border-gray-300 flex items-center gap-1 custom-shadow"
          >
            <span className="text-[#1A1A1A]">
              <HugeiconsIcon icon={Search01Icon} width={20} />
            </span>
            <span className="text-[#1A1A1A]">Search a ride</span>
          </Link>
          <Link
            href="/publish-ride/step-1"
            className="py-2 px-4 bg-white rounded-full border border-gray-300 flex items-center gap-1 custom-shadow"
          >
            <span className="text-[#1A1A1A]">
              <HugeiconsIcon icon={AddCircleHalfDotIcon} width={20} />
            </span>
            <span className="text-[#1A1A1A]">Publish a ride</span>
          </Link>
        </div>

        <div className=" relative flex items-center gap-4">
          <button className="py-2 px-4 bg-white rounded-full border border-gray-300 flex items-center gap-1 custom-shadow">
            <span className="text-[#1A1A1A]">
              <HugeiconsIcon icon={LanguageSkillIcon} width={20} />
            </span>
            <span className="text-[#1A1A1A]">INR</span>
          </button>
          {login ? (
            <div onClick={() => setOpen(!open)}>
              <Profile />
            </div>
          ) : (
            <button
              className="py-2 px-4 bg-white rounded-full border border-gray-300 flex items-center gap-1 custom-shadow"
              // onClick={() => setOpen(true)}
            >
              <span className="text-[#1A1A1A]">Sign In</span>
              <span className="text-[#1A1A1A]">
                <HugeiconsIcon icon={ArrowUpRight03Icon} width={20} />
              </span>
            </button>
          )}
          {open && (
            <div className="bg-white rounded-xl shadow-md  px-[14px] pt-2 w-64 space-y-3 absolute top-14 right-0 z-10">
              {menuItems.map((item, index) => (
                <Link href={item?.path}>
                  <div
                    key={index}
                    className={`flex items-center gap-3 py-2 rounded-lg cursor-pointer  border-b ${
                      item.label === "Logout" ? "text-red-500" : "text-gray-700"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        item.label === "Logout"
                          ? "bg-red-200 text-red-500"
                          : "bg-[#631CFF1A] text-[#631CFF]"
                      } `}
                    >
                      <HugeiconsIcon icon={item.icon} width={20} />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <AuthForm open={open} onOpenChange={setOpen} /> */}
      {pathname === "/rides" && <SearchForm handleSearch={handleSearch} />}
    </header>
  );
};

export default Header;
