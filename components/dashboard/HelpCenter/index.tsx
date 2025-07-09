import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";


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
  const socialLinks = [
    { src: "/link.svg", alt: "Link" },
    { src: "/link-1.svg", alt: "Link" },
    { src: "/link-4.svg", alt: "Link" },
    { src: "/link-3.svg", alt: "Link" },
    { src: "/link-2.svg", alt: "Link" },
  ];

  return (
      <section className="px-12 w-full py-12 ">
           <div className="bg-[#631cff] rounded-[90px] py-20 px-[100px] flex flex-col gap-20 w-full ">
      <div className="flex justify-between w-full">
        <div className="flex gap-40 flex-1">
          {/* Top carpool routes column */}
          <div className="flex flex-col gap-10">
            <h3 className="font-bold text-2xl text-white tracking-[-0.14px] leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
              Top carpool routes
            </h3>
            <ul className="flex flex-col gap-4">
              {carpoolRoutes.map((route, index) => (
                <li
                  key={`route-${index}`}
                  className="font-medium text-base text-white leading-6 font-['Plus_Jakarta_Sans',Helvetica]"
                >
                  {route}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div className="flex flex-col gap-10">
            <h3 className="font-bold text-2xl text-white tracking-[-0.14px] leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
              Resources
            </h3>
            <ul className="flex flex-col gap-4">
              {resources.map((resource, index) => (
                <li
                  key={`resource-${index}`}
                  className="font-medium text-base text-white leading-6 font-['Plus_Jakarta_Sans',Helvetica]"
                >
                  {resource}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stay up to date column */}
        <div className="flex flex-col items-end gap-10 py-0.5">
          <div className="w-[300px] h-7">
            <h3 className="font-bold text-2xl text-white tracking-[-0.14px] leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
              Stay up to date
            </h3>
          </div>

          <div className="flex flex-col items-end gap-[23px]">
            <div className="flex w-[300px] items-center gap-2.5">
              <div className="relative flex-1 h-11 rounded-[100px] border border-solid border-[#ffffff99]">
                <Input
                  className="h-full bg-transparent border-none text-[#ffffffcc] placeholder:text-[#ffffffcc] font-['Plus_Jakarta_Sans',Helvetica] font-medium"
                  placeholder="Email"
                />
              </div>
            </div>

            <p className="font-medium text-base text-white leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
              I confirm that I have read transparent&apos;s <br />
              Privacy policy and agree with it.
            </p>
          </div>

          {/* Social media links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link, index) => (
              <Card
                key={`social-${index}`}
                className="flex items-center p-2.5 bg-[#d0f500] rounded-[40px] border border-solid"
              >
                <img className="w-6 h-6" alt={link.alt} src={link.src} />
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-5 w-full border-t border-[#ffffff33]">
        <p className="font-medium text-sm text-white leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
          © RideShare. Ltd.
        </p>

        <div className="flex gap-4">
          <p className="font-medium text-sm text-white leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
            Terms
          </p>
          <p className="font-medium text-sm text-white leading-6 font-['Plus_Jakarta_Sans',Helvetica]">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
   </section>
  );
};
