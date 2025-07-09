import React from "react";

export default function Terms() {
  return (
    <div className="flex flex-col items-center gap-[30px] self-stretch w-full">
      <div className="inline-flex flex-col items-start justify-center gap-[15px]">
        <div className="flex w-[500px] items-center justify-center gap-2.5">
          <p className="relative flex-1 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#a1a1a1] text-xs text-center tracking-[0] leading-[16.8px]">
            By proceeding, you agree to our
            <span className="underline"> Terms of Use</span>
            <span>
              {" "}
              and confirm you have read our Privacy and Cookie Statement.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
