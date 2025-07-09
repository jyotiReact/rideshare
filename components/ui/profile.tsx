import React from "react";
import { Avatar, AvatarImage } from "./avatar";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge02Icon } from "@hugeicons/core-free-icons";

function Profile() {
  return (
    <div className="relative cursor-pointer" >
      <Avatar className="w-[50px] h-[50px] border-2 border-[#D0F500]">
        <AvatarImage
          src="/images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </Avatar>
      <div className="absolute top-[26px] left-8  w-6 h-6 p-1  flex items-center justify-center   rounded-full bg-[#631CFF]">
        <HugeiconsIcon icon={CheckmarkBadge02Icon} color="#D0F500" />
      </div>
    </div>
  );
}

export default Profile;
