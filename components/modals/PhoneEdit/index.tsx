import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";


export const PhoneEdit = (): JSX.Element => {
  // Country code data
  const countryCode = {
    code: "+91",
    flag: "/vector.svg",
    flagLines: [
      { src: "/vector.svg", className: "absolute w-3.5 h-[5px] top-0 left-0" },
      {
        src: "/vector-4.svg",
        className: "absolute w-3.5 h-[5px] top-2.5 left-0",
      },
      {
        wrapperClassName:
          "absolute w-[15px] h-[5px] top-[5px] left-0 bg-[url(/vector-2.svg)] bg-[100%_100%]",
        dots: [
          {
            src: "/vector-1.svg",
            className: "absolute w-1 h-1 top-0 left-[5px]",
          },
          {
            src: "/vector-1.svg",
            className: "absolute w-1 h-1 top-px left-1.5",
          },
          { src: "/group.png", className: "absolute w-1 h-1 top-px left-1.5" },
        ],
      },
    ],
  };

  return (
    <Card className="w-[600px] rounded-[15px] shadow-none">
      <div className="relative">
        {/* Header */}
        <div className="flex w-full items-center justify-between px-10 py-[25px] border-b border-[#f0f0f0]">
          <div className="inline-flex items-center justify-center p-1 bg-[#631cff] rounded-md overflow-hidden">
            <img
              className="w-[26.31px] h-[26.42px]"
              alt="Logo"
              src="/logo-8.svg"
            />
          </div>

          <div className="font-medium text-black text-sm text-center">
            Edit/Confirm phone number
          </div>

          <button className="flex items-center justify-center">
            <img className="w-5 h-5" alt="Cancel" src="/cancel-01.svg" />
          </button>
        </div>

        {/* Content */}
        <CardContent className="flex flex-col items-start gap-[30px] p-[50px]">
          <div className="flex flex-col items-center justify-center gap-[35px] w-full">
            <div className="flex flex-col items-start gap-[15px] w-full">
              <label className="font-bold text-black text-sm">
                Enter new phone
              </label>

              <div className="flex items-center justify-between pl-5 pr-2 py-2 w-full rounded-[40px] border-2 border-solid border-[#631cff]">
                <div className="inline-flex items-center gap-[5px]">
                  <div className="inline-flex items-center justify-center">
                    <div className="flex w-11 items-center gap-[5px]">
                      <div className="inline-flex items-center gap-2.5">
                        <div className="relative w-[15px] h-[15px]">
                          {countryCode.flagLines.map((line, index) =>
                            line.wrapperClassName ? (
                              <div
                                key={index}
                                className={line.wrapperClassName}
                              >
                                {line.dots.map((dot, dotIndex) => (
                                  <img
                                    key={dotIndex}
                                    className={dot.className}
                                    alt="Vector"
                                    src={dot.src}
                                  />
                                ))}
                              </div>
                            ) : (
                              <img
                                key={index}
                                className={line.className}
                                alt="Vector"
                                src={line.src}
                              />
                            ),
                          )}
                        </div>
                      </div>

                      <div className="font-bold text-black text-sm">
                        {countryCode.code}
                      </div>
                    </div>

                    <img
                      className="w-5 h-5"
                      alt="Arrow down"
                      src="/arrow-down-01.svg"
                    />
                  </div>

                  <div className="font-medium text-[#cfcfcf] text-sm">
                    7814589880
                  </div>
                </div>

                <Button className="px-5 py-[11px] bg-[#d0f500] text-black rounded-[110px] hover:bg-[#bfe000]">
                  <span className="font-bold text-sm">Send Otp</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[25px] w-full">
            <Button
              className="w-full py-[15px] bg-[#d2d2d2] rounded-[25px] hover:bg-[#c2c2c2]"
              disabled
            >
              <span className="font-bold text-white text-sm tracking-[-0.11px]">
                Save
              </span>
            </Button>

            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-col items-start gap-[15px] w-full">
                <div className="flex items-center justify-center gap-2.5 w-full">
                  <p className="font-medium text-[#a1a1a1] text-xs leading-[19.2px]">
                    By proceeding, you agree to our{" "}
                    <span className="underline">Terms of Use</span> and confirm
                    you have read our <br />
                    <span className="underline">
                      Privacy and Cookie Statement.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
