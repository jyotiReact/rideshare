"use client";

import { JSX, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AddCircleHalfDotIcon,
  ArrowUpRight03Icon,
  Call02Icon,
  LanguageSkillIcon,
  Logout01Icon,
  Mail01Icon,
  Message01Icon,
  Money01Icon,
  Search01Icon,
  TaxiFreeIcons,
  UserIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import Profile from "../ui/profile";
import { AuthModal } from "../modals/authModal";
import { LoginOptions } from "../modals/LoginOptions";
import { PhoneOption } from "../modals/PhoneOption";
import { useDispatch } from "react-redux";
import { resetAuthState } from "@/store/authslice";
import { EmailOption } from "../modals/EmailOption";
import { PersonalDetailModal } from "../modals/PersonalDetailModal";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";

export const ChangeLanguage = ({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const options = [
    {
      label: "Language",
      value: "English",
      icon: LanguageSkillIcon,
    },
    {
      label: "Currency",
      value: "₹ Rupee (INR)",
      icon: Money01Icon,
    },
  ];

  return (
    <Card
      ref={cardRef}
      className="w-[248px] rounded-[10px] border border-solid border-[#e5e5e5] absolute top-12 right-0 z-50"
    >
      <CardContent className="p-5 space-y-10">
        <div className="space-y-2.5">
          {options.map((option, index) => (
            <div key={index} className="space-y-[15px]">
              <div className="font-semibold text-xs text-[#353535] font-['Plus_Jakarta_Sans',Helvetica]">
                {option.label}
              </div>
              <div className="flex items-center justify-between pl-5 pr-2 py-2 rounded-[40px] border border-solid border-[#c4c4c1]">
                <div className="flex items-center gap-2.5">
                  <HugeiconsIcon
                    icon={option.icon}
                    className="w-5 h-5 text-[#631CFF]"
                  />
                  <div className="font-medium text-xs text-black font-['Plus_Jakarta_Sans',Helvetica]">
                    {option.value}
                  </div>
                </div>
                <div className="inline-flex items-center justify-center p-2 bg-[#d0f500] rounded-[110px]">
                  <ChevronDownIcon className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm text-[#353535] ">
            Auto Detect
          </div>
          <Switch className="data-[state=unchecked]:bg-gray-200 border data-[state=checked]:bg-[#631CFF]" />
        </div>
      </CardContent>
    </Card>
  );
};

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const [showLanguage, setShowLanguage] = useState(false);
  const login = true;
  const [switchToLogin, setSwitchToLogin] = useState(false);
  const [buttonClick, setButtonClick] = useState("");
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({});
  const [showProfile, setShowProfile] = useState(false);

  const handleGoogleLogin = async () => {
   
  };

  const handleModalClose = () => {
    setOpen(false);
    setButtonClick("");
    dispatch(resetAuthState());
  };

  const menuItems = [
    { icon: TaxiFreeIcons, label: "Your Rides", path: "/your-rides" },
    {
      icon: TaxiFreeIcons,
      label: "Previous Rides",
      path: "/previous-rides",
    },
    { icon: Message01Icon, label: "Inbox", path: "/inbox" },
    { icon: UserIcon, label: "Profile", path: "/profile" },
    { icon: Logout01Icon, label: "Logout", path: "/logout" },
  ];

  return (
    <header className="py-5 lg:px-20 px-5 bg-[#fafafa] shadow w-full border-b border-[#E0E1E0] flex flex-col gap-5">
      <div className="flex w-full justify-between items-center relative">
        {/* Logo */}
        <Link href={"/dashboard"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/images/Logo.png" alt="Logo" width={24} height={24} />
            <span className="font-semibold md:text-lg text-md text-[#1A1A1A]">
              RideShare
            </span>
          </div>
        </Link>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/search-ride"
            className="py-2 px-4 w-8 h-8 md:w-fit justify-center bg-white rounded-full border border-gray-300 flex items-center gap-1 custom-shadow"
          >
            <span className="text-[#1A1A1A]">
              <HugeiconsIcon icon={Search01Icon} width={20} />
            </span>
            <span className="text-[#1A1A1A] md:block hidden">
              Search a ride
            </span>
          </Link>
          <Link
            href="/publish-ride/step-1"
            className="py-2 px-4 w-8 h-8 md:w-fit justify-center bg-white rounded-full border border-gray-300 flex items-center gap-1 custom-shadow"
          >
            <span className="text-[#1A1A1A]">
              <HugeiconsIcon icon={AddCircleHalfDotIcon} width={20} />
            </span>
            <span className="text-[#1A1A1A] md:block hidden">
              Publish a ride
            </span>
          </Link>
        </div>

        <div className="relative flex items-center gap-4">
          <div className="relative">
            <button
              className="py-2 px-4 bg-white rounded-full border border-gray-300 md:flex hidden items-center gap-1 custom-shadow"
              onClick={() => setShowLanguage(!showLanguage)}
            >
              <span className="text-[#1A1A1A]">
                <HugeiconsIcon icon={LanguageSkillIcon} width={20} />
              </span>
              <span className="text-[#1A1A1A]">INR</span>
            </button>
            {showLanguage && (
              <ChangeLanguage onClose={() => setShowLanguage(false)} />
            )}
          </div>

          {login ? (
            <div onClick={() => setOpenMenu(!openMenu)}>
              <Profile />
            </div>
          ) : (
            <button
              className="py-2 md:px-4 px-2 bg-white rounded-full border border-gray-300 flex items-center gap-1 custom-shadow"
              onClick={() => setOpen(true)}
            >
              <span className="text-[#1A1A1A]">Sign In</span>
              <span className="text-[#1A1A1A]">
                <HugeiconsIcon icon={ArrowUpRight03Icon} width={20} />
              </span>
            </button>
          )}

          {openMenu && (
            <div className="bg-white rounded-xl shadow-md  px-[14px] pt-2 w-64 space-y-3 absolute top-14 right-0 z-10">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setOpenMenu(false)}
                  className={`flex items-center gap-3 py-2 rounded-lg cursor-pointer border-b ${
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <AuthModal
        formType={switchToLogin ? "Sign In" : "Sign Up"}
        open={open}
        onClose={handleModalClose}
        title={
          switchToLogin && !showProfile
            ? "Sign In To RideShare"
            : showProfile
            ? "Personal Details"
            : "Welcome To RideShare"
        }
        terms={true}
        switchForm={() => setSwitchToLogin(!switchToLogin)}
        switchToLogin={switchToLogin}
        renderComponent={
          !buttonClick ? (
            <LoginOptions
              setButtonClick={setButtonClick}
              handleGoogleLogin={handleGoogleLogin}
              buttonClick={buttonClick}
            />
          ) : !showProfile && buttonClick === "Email" ? (
            <EmailOption
              btnLabel={"Continue"}
              setAuthData={setAuthData}
              setShowProfile={setShowProfile}
            />
          ) : !showProfile && buttonClick === "Phone" ? (
            <PhoneOption
              btnLabel={"Continue"}
              setAuthData={setAuthData}
              setShowProfile={setShowProfile}
            />
          ) : showProfile ? (
            switchToLogin ? null : (
              <PersonalDetailModal authData={authData} />
            )
          ) : null
        }
      />
    </header>
  );
};

export default Header;
