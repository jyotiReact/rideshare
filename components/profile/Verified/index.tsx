"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AddCircleHalfDotIcon,
  ArrowRight01Icon,
  Comment01Icon,
  MusicNote03Icon,
  PencilEdit02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { JSX, useState } from "react";
import { AuthModal } from "@/components/modals/authModal";
import { EmailOption } from "@/components/modals/EmailOption";
import { PhoneOption } from "@/components/modals/PhoneOption";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

// Profile verification data
const profileItems = [
  { id: 1, text: "*****3678R", verified: true, editable: false, type: "" },
  {
    id: 2,
    text: "ritikbhardwaj@gmail.com",
    verified: true,
    editable: true,
    type: "Email",
  },
  {
    id: 3,
    text: "+917813897220",
    verified: true,
    editable: true,
    type: "Phone",
  },
];

type Tag =
  | {
      id: number;
      type: "icon";
      icon: IconSvgElement;
      text: string;
    }
  | {
      id: number;
      type: "image";
      icon: string;
      text: string;
    };

// About section tags
const aboutTags: Tag[] = [
  {
    id: 1,
    text: "I am chatty when i feel comfortable",
    icon: Comment01Icon,
    type: "icon",
  },
  {
    id: 2,
    text: "I am chatty when i feel comfortable",
    icon: MusicNote03Icon,
    type: "icon",
  },
  { id: 3, text: "Pets Allowed", icon: "/images/petpaw.svg", type: "image" },
  { id: 4, text: "No Smoking", icon: "/images/smoking.svg", type: "image" },
];

export const Verified = (): JSX.Element => {
  const [modalType, setModalType] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [authData, setAuthData] = useState({});
  const aboutYou = useSelector((state: RootState) => state?.user?.aboutYou);
  return (
    <div className="flex flex-col items-start justify-center gap-5 relative">
      <Card className="flex flex-col items-start gap-5 md:px-[30px] px-2 py-5 relative self-stretch w-full flex-[0_0_auto] bg-white md:rounded-[20px] overflow-hidden border border-solid border-[#f2f1f1]">
        <CardContent className="p-0 w-full">
          {/* Verify your profile section */}
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 self-stretch w-full justify-center relative flex-[0_0_auto]">
              <h2 className="relative flex-1 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-neutralblackb-900 text-lg tracking-[0] leading-[31.5px]">
                Verify your profile
              </h2>
            </div>

            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              {profileItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center ${
                    item.editable ? "justify-between" : ""
                  } px-0 py-5 self-stretch w-full relative flex-[0_0_auto] ${
                    item.id !== profileItems.length
                      ? "border-b [border-bottom-style:solid] border-[#e9e9eb]"
                      : ""
                  }`}
                >
                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <CheckCircleIcon className="relative w-[18px] h-[18px] text-purple-600" />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-neutralblackb-600 text-sm tracking-[0] leading-[24.5px] whitespace-nowrap">
                      {item.text}
                    </div>
                  </div>

                  {item.editable && (
                    <HugeiconsIcon
                      icon={PencilEdit02Icon}
                      color="#631CFF"
                      onClick={() => {
                        setModalType(item.type);
                        setOpen(true);
                      }}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* About you section */}
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] mt-5">
            <div className="flex items-center gap-2.5 self-stretch w-full justify-center relative flex-[0_0_auto]">
              <h2 className="relative flex-1 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-neutralblackb-900 text-lg tracking-[0] leading-[31.5px]">
                About you
              </h2>
            </div>

            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex md:flex-row flex-col items-start md:gap-10 gap-2 pt-0 pb-5 px-0 self-stretch w-full border-b [border-bottom-style:solid] border-[#e9e9eb] relative flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative flex-1 grow">
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-neutralblackb-600 text-sm tracking-[0] leading-[24.5px]">
                    {aboutYou || "Comments/ Introduction"}
                  </p>
                </div>
                <Link href="/profile/edit-about-you">
                  <HugeiconsIcon icon={PencilEdit02Icon} color="#631CFF" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-[10px_10px] px-0 py-5 self-stretch w-full relative ">
                {aboutTags.map((tag) => (
                  <Badge
                    key={tag.id}
                    className="inline-flex md:w-fit w-full  gap-2.5 px-4 py-2.5 bg-[#631cff0d] rounded-[10px] relative  font-medium text-[#474b57] text-sm hover:bg-[#631cff0d]"
                  >
                    {tag.type === "icon" ? (
                      <HugeiconsIcon icon={tag.icon} color="#631CFF" />
                    ) : (
                      <img src={tag.icon as string} alt={tag.text} />
                    )}

                    {tag.text}
                  </Badge>
                ))}

                <Button className="inline-flex items-center w-fit gap-2.5 px-4 py-2.5 bg-[#631cff] rounded-[10px] relative flex-[0_0_auto] hover:bg-[#5016cc]">
                  <HugeiconsIcon icon={PencilEdit02Icon} color="#ffffff" />

                  <span className="font-medium text-white text-base">Edit</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Vehicles section */}
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] mt-5">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-neutralblackb-900 text-lg tracking-[0] leading-[31.5px]">
              Vehicles
            </h2>
            <Link
              href="/profile/edit-vehicle"
              className="flex flex-col  gap-4 px-1 py-3 self-stretch w-full relative flex-[0_0_auto] justify-start"
            >
              <Card className="flex items-center justify-between p-5 self-stretch w-full rounded-[20px] border border-solid border-[#e9e9eb] relative flex-[0_0_auto] bg-white">
                <CardContent className="p-0 flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-1 justify-center relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-600 text-base tracking-[0] leading-7 whitespace-nowrap">
                        Tata Tiago XT
                      </div>
                      <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-neutralblackb-600 text-sm tracking-[0] leading-[24.5px] whitespace-nowrap">
                        White Color
                      </div>
                    </div>
                  </div>
                  <HugeiconsIcon icon={ArrowRight01Icon} color="#631CFF" />
                </CardContent>
              </Card>
              <div className="flex gap-2 items-center">
                <HugeiconsIcon icon={AddCircleHalfDotIcon} color="#631CFF" />
                <span className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-neutralblackb-600 text-sm tracking-[0] leading-[24.5px] whitespace-nowrap">
                  Add a vehicle
                </span>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      <AuthModal
        formType={
          modalType === "Email"
            ? "Edit/Confirm Email"
            : "Edit/Confirm Phone Number"
        }
        open={open}
        onClose={() => setOpen(false)}
        terms={true}
        loginText={false}
        renderComponent={
          modalType === "Email" ? (
            <EmailOption btnLabel="Save" setAuthData={setAuthData} />
          ) : (
            <PhoneOption btnLabel="Save" setAuthData={setAuthData} />
          )
        }
      />
    </div>
  );
};
