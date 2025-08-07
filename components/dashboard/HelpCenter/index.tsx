import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { JSX } from "react";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";

export const HelpCenterSection = (): JSX.Element => {
  // Data for carpool routes
  const carpoolRoutes = [
    "Delhi → Chandigarh",
    "Mumbai → Pune",
    "Kanpur → Lucknow",
    "Bengaluru → Chennai",
    "Pune → Mumbai",
    "All carpool routes",
    "All carpool destinations",
  ];

  // Data for resources
  const resources = ["How It Works", "About Us", "Help Centre", "Press"];

  // Data for social media links

  const socialLinks: {
    icon: any;
    label: string;
  }[] = [
    { icon: InstagramIcon, label: "Instagram" },
    { icon: TwitterIcon, label: "Twitter" },
    { icon: FacebookIcon, label: "Facebook" },
    { icon: YoutubeIcon, label: "YouTube" },
    { icon: LinkedinIcon, label: "LinkedIn" },
  ];

  return (
    <section className="lg:px-12 w-full lg:py-12 pt-6">
      <div className="bg-[#631cff] lg:rounded-[90px] py-20 lg:px-[100px] px-5 flex flex-col gap-20 w-full ">
        <div className="flex md:flex-row flex-col md:justify-between gap-10 w-full ">
          {/* Top carpool routes column */}
          <div className=" md:flex hidden flex-col gap-10 md:order-1">
            <h3 className="font-bold text-2xl text-white tracking-[-0.14px] leading-6  ">
              Top carpool routes
            </h3>
            <ul className="flex flex-col gap-4">
              {carpoolRoutes.map((route, index) => (
                <li
                  key={`route-${index}`}
                  className="font-medium text-base text-white leading-6  "
                >
                  {route}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div className="flex flex-col md:gap-10 gap-4  order-2">
            <h3 className="font-bold text-2xl text-white tracking-[-0.14px] leading-6  ">
              Resources
            </h3>
            <ul className="flex flex-col gap-4">
              {resources.map((resource, index) => (
                <li
                  key={`resource-${index}`}
                  className="font-medium text-base text-white leading-6  "
                >
                  {resource}
                </li>
              ))}
            </ul>
          </div>

          {/* Stay up to date column */}
          <div className="flex flex-col  md:gap-10 gap-6 py-0.5 md:order-3 order-1">
            <div className="w-[300px] h-7">
              <h3 className="font-bold text-2xl text-white tracking-[-0.14px] leading-6  ">
                Stay up to date
              </h3>
            </div>

            <div className="flex flex-col  gap-[23px]">
              <div className="flex md:w-[300px] items-center gap-2.5">
                <div className="relative flex-1 h-11 ">
                  <Input
                    className="h-full bg-transparent rounded-[100px] border border-solid border-[#ffffff99]  text-[#ffffffcc] placeholder:text-[#ffffffcc]   font-medium"
                    placeholder="Email"
                  />
                </div>
              </div>

              <p className="font-medium text-base text-white leading-6  ">
                I confirm that I have read transparent&apos;s <br />
                Privacy policy and agree with it.
              </p>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-5">
              <div className="flex items-center md:gap-5 gap-2">
                {socialLinks.map((social, index) => (
                  <Card
                    key={`social-${index}`}
                    className="flex items-center p-2.5 bg-[#d0f500] rounded-[40px] border border-solid"
                  >
                    <HugeiconsIcon
                      icon={social.icon}
                      className="w-6 h-6"
                      color="#631CFF"
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex md:flex-row flex-col md:items-center justify-between pt-5 w-full border-t border-[#ffffff33]">
          <p className="font-medium text-sm text-white leading-6  ">
            © Reachyo. Ltd.
          </p>

          <div className="flex gap-4">
            <p className="font-medium text-sm text-white leading-6  ">Terms</p>
            <p className="font-medium text-sm text-white leading-6  ">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
