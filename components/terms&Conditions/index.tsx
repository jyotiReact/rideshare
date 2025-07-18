import React from "react";

export default function Terms() {
  return (
    <div className="flex   gap-2.5">
      <p className="relative flex-1 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#a1a1a1] text-xs  tracking-[0] leading-[16.8px]">
        By proceeding, you agree to our
        <span className="underline"> Terms of Use</span>
        <span>
          {" "}
          and confirm you have read our Privacy and Cookie Statement.
        </span>
      </p>
    </div>
  );
}
