"use client";
import React, { JSX, useState } from "react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { ProfileLayout } from "../layout/ProfileLayout";
import VerifyAccount from "./VerifyAccount";
import { Verified } from "./Verified";
import { Account } from "./Account";
import { useSelector } from "react-redux";

const tabOptions = [
  {
    id: "about",
    label: "About you",
    icon: ArrowRight01Icon,
  },
  {
    id: "account",
    label: "Account",
    icon: ArrowRight01Icon,
  },
];
export const Profile = (): JSX.Element => {
  const [tab, setTab] = useState("about");
  const login = true;
  const data = useSelector((state: any) => state.profile);
   console.log(data)
  return (
    <div className="flex flex-col w-full bg-zinc-50 h-full lg:px-20 p-2 pb-20 ">
      <div className="flex justify-center items-start">
        {tab === "about" ? (
          <ProfileLayout
            tabOptions={tabOptions}
            handleTabClick={(tab) => setTab(tab)}
          >
            {login ? <Verified data={data} /> : <VerifyAccount />}
          </ProfileLayout>
        ) : (
          <ProfileLayout
            tabOptions={tabOptions}
            handleTabClick={(tab) => setTab(tab)}
          >
            <Account />
          </ProfileLayout>
        )}
      </div>
    </div>
  );
};
