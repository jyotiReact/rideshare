import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { JSX } from "react";

export const Routes = (): JSX.Element => {
  // Create an array of route data to map over
  const routes = Array(12).fill({
    from: "Chandigarh",
    to: "Shimla",
  });

  return (
    <div className="grid grid-cols-3 items-center gap-5">
      {routes.map((route, index) => (
        <Card
          key={`route-${index}`}
          className=" border border-solid border-[#F2F2F2] rounded-[20px]"
        >
          <CardContent className="flex items-center justify-between py-10">
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-start gap-[5px]">
                <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-500 text-lg leading-6">
                  {route.from} →&nbsp;&nbsp;{route.to}
                </h3>
              </div>
            </div>

            <Badge className="flex items-center justify-center gap-1 px-2  rounded-[28px] bg-[#631CFF] custom-shadow ">
              <HugeiconsIcon icon={ArrowUpRight03Icon} width={20} />
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
