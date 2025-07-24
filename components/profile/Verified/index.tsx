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
import {
  ArrowRightIcon,
  BadgeInfoIcon,
  CarIcon,
  CheckCircleIcon,
  HashIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import React, { JSX, useState } from "react";
import { AuthModal } from "@/components/modals/authModal";
import { EmailOption } from "@/components/modals/EmailOption";
import { PhoneOption } from "@/components/modals/PhoneOption";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AuthData } from "@/types";

interface Vehicle {
  brand: string;
  model: string;
  number: string;
}

interface VerifiedProps {
  data: {
    vehicles?: Vehicle[];
  };
}

interface ProfileItem {
  id: number;
  text: string;
  verified: boolean;
  editable: boolean;
  type: string;
}

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

interface IconOption {
  icon: IconSvgElement;
  label: string;
}

export const Verified: React.FC<VerifiedProps> = ({ data }): JSX.Element => {
  const [modalType, setModalType] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [authData, setAuthData] = useState<Record<string, unknown>>({});
  const [isEditingTags, setIsEditingTags] = useState(false);
  const [tags, setTags] = useState<Tag[]>([
    {
      id: 1,
      text: "I am chatty when I feel comfortable",
      icon: Comment01Icon,
      type: "icon",
    },
    {
      id: 2,
      text: "I enjoy music during rides",
      icon: MusicNote03Icon,
      type: "icon",
    },
    { id: 3, text: "Pets Allowed", icon: "/images/petpaw.svg", type: "image" },
    { id: 4, text: "No Smoking", icon: "/images/smoking.svg", type: "image" },
  ]);
  const [newTagText, setNewTagText] = useState("");
  const [selectedTagType, setSelectedTagType] = useState<"icon" | "image">(
    "icon"
  );
  const [selectedIcon, setSelectedIcon] =
    useState<IconSvgElement>(Comment01Icon);

  const { aboutYou, userInfo } = useSelector((state: RootState) => state?.user);

  const profileItems: ProfileItem[] = [
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
      text: userInfo?.phone || "+91 9876543210",
      verified: true,
      editable: true,
      type: "Phone",
    },
  ];

  const handleAddTag = () => {
    if (!newTagText.trim()) return;

    const newTag: Tag =
      selectedTagType === "icon"
        ? {
            id: tags.length + 1,
            text: newTagText,
            icon: selectedIcon,
            type: "icon",
          }
        : {
            id: tags.length + 1,
            text: newTagText,
            icon: "/images/default-icon.svg",
            type: "image",
          };

    setTags([...tags, newTag]);
    setNewTagText("");
  };

  const handleRemoveTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const availableIcons: IconOption[] = [
    { icon: Comment01Icon, label: "Chatty" },
    { icon: MusicNote03Icon, label: "Music" },
  ];

  function handleSendOtp(formData: AuthData) {
    console.log(formData);
    if (formData?.email || formData?.phone) {
      setAuthData({ ...formData, otp: "123456" });
    }
  }

  function handleContinue() {
    setOpen(false);
    setAuthData({});
  }

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

              <div className="flex flex-wrap items-center gap-[10px_10px] px-0 py-5 self-stretch w-full relative">
                {tags.map((tag) => (
                  <Badge
                    key={tag.id}
                    className={`inline-flex md:w-fit w-full gap-2.5 px-4 py-2.5 rounded-[10px] relative font-medium text-[#474b57] text-sm hover:bg-[#631cff0d] ${
                      isEditingTags ? "pr-2" : ""
                    }`}
                    style={{ backgroundColor: "#631cff0d" }}
                  >
                    {tag.type === "icon" ? (
                      <HugeiconsIcon
                        icon={tag.icon}
                        color="#631CFF"
                        className="w-4 h-4"
                      />
                    ) : (
                      <img
                        src={tag.icon as string}
                        alt={tag.text}
                        className="w-4 h-4"
                      />
                    )}
                    {tag.text}
                    {isEditingTags && (
                      <button
                        onClick={() => handleRemoveTag(tag.id)}
                        className="ml-2 text-[#631CFF] hover:text-[#5016cc]"
                      >
                        <XIcon size={16} />
                      </button>
                    )}
                  </Badge>
                ))}

                {isEditingTags ? (
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex gap-2 w-full">
                        <Input
                          value={newTagText}
                          onChange={(e) => setNewTagText(e.target.value)}
                          placeholder="Enter tag text"
                          className="flex-1 rounded-[10px]"
                        />
                        <Select
                          value={selectedTagType}
                          onValueChange={(value: "icon" | "image") =>
                            setSelectedTagType(value)
                          }
                        >
                          <SelectTrigger className="w-[120px] rounded-[10px]">
                            <SelectValue placeholder="Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="icon">Icon</SelectItem>
                            <SelectItem value="image">Image</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {selectedTagType === "icon" && (
                        <div className="flex gap-2 flex-wrap">
                          {availableIcons.map((iconItem) => (
                            <button
                              key={iconItem.label}
                              onClick={() => setSelectedIcon(iconItem.icon)}
                              className={`p-2 rounded-[10px] ${
                                selectedIcon === iconItem.icon
                                  ? "bg-[#631CFF] text-white"
                                  : "bg-[#631cff0d] text-[#631CFF]"
                              }`}
                            >
                              <HugeiconsIcon icon={iconItem.icon} />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleAddTag}
                        className="bg-[#631CFF] hover:bg-[#5016cc]"
                      >
                        Add Tag
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsEditingTags(false)}
                      >
                        Done
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    className="inline-flex items-center w-fit gap-2.5 px-4 py-2.5 bg-[#631cff] rounded-[10px] relative flex-[0_0_auto] hover:bg-[#5016cc]"
                    onClick={() => setIsEditingTags(true)}
                  >
                    <HugeiconsIcon icon={PencilEdit02Icon} color="#ffffff" />
                    <span className="font-medium text-white text-base">
                      Edit
                    </span>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Vehicles section */}
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] mt-5">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-neutralblackb-900 text-lg tracking-[0] leading-[31.5px]">
              Vehicles
            </h2>
            {data?.vehicles?.length
              ? data.vehicles.map((vehicle, index) => (
                  <Link
                    href={`/profile/edit-vehicle/${encodeURIComponent(
                      btoa(JSON.stringify(vehicle?.number))
                    )}`}
                    key={index}
                    className="flex items-center justify-between cursor-pointer p-5 w-full rounded-[20px] border border-[#e9e9eb] bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <Card className="flex justify-between cursor-pointer w-full border-none p-0">
                      <CardContent className="p-0 w-full flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <CarIcon size={16} color="#631CFF" />
                              <span className="text-base font-medium text-[#1C1C1E]">
                                Brand:
                              </span>
                              <span className="text-sm font-medium text-gray-500">
                                {vehicle?.brand}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <BadgeInfoIcon size={16} color="#631CFF" />
                              <span className="text-base font-medium text-[#1C1C1E]">
                                Model:
                              </span>

                              <span className="text-sm font-medium text-gray-500">
                                {vehicle?.model}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <HashIcon size={16} color="#631CFF" />
                              <span className="text-base font-medium text-[#1C1C1E]">
                                Vehicle Number:
                              </span>

                              <span className="text-sm font-medium text-gray-500">
                                {vehicle?.number || "No number provided"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ArrowRightIcon
                          size={20}
                          color="#631CFF"
                          className="min-w-[20px]"
                        />
                      </CardContent>
                    </Card>
                  </Link>
                ))
              : null}

            <Link
              href="/profile/edit-vehicle"
              className="flex flex-col gap-4 px-1 py-3 self-stretch w-full relative flex-[0_0_auto] justify-start"
            >
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
            <EmailOption
              btnLabel={!authData?.email ? "Send OTP" : "Verify"}
              setAuthData={setAuthData}
              authData={authData}
              handleSendOtp={handleSendOtp}
              handleContinue={handleContinue}
            />
          ) : (
            <PhoneOption
              btnLabel={!authData?.phone ? "Send OTP" : "Verify"}
              setAuthData={setAuthData}
              authData={authData}
              handleSendOtp={handleSendOtp}
              handleContinue={handleContinue}
            />
          )
        }
      />
    </div>
  );
};
