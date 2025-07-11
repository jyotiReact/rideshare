"use client";
import React, { useState } from "react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { ProfileLayout } from "./ProfileLayout";
import VerifyAccount from "./VerifyAccount";
import { Verified } from "./Verified";
import { Account } from "./Account";

const tabOptions = [
  {
    id: "about",
    label: "About you",
    // icon: ArrowRight01Icon,
  },
  {
    id: "account",
    label: "Account",
    // icon: ArrowRight01Icon,
  },
];
export const Profile = (): JSX.Element => {
  const [tab, setTab] = useState("about");
  const login = true;

  return (
    <div className="flex flex-col w-full bg-zinc-50 h-full px-20 pt-5 pb-20 border-4">
      <div className="flex justify-center items-start">
        {tab === "about" ? (
          <ProfileLayout
            tabOptions={tabOptions}
            handleTabClick={(tab) => setTab(tab)}
          >
            {login ? <Verified /> : <VerifyAccount />}
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
