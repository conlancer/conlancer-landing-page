import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { WaitlistForm } from "../../components/ui/WaitlistForm";

export const Special_Launch_Section = (): JSX.Element => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <Card className="border-2 border-solid border-[#e2e2e2] [background:linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(245,245,245,1)_100%)] flex w-full max-w-[1300px] h-auto min-h-[362px] items-center gap-2.5 p-10 relative rounded-[40px] overflow-hidden">
      <CardContent className="p-0 w-full">
        <div className="flex flex-col items-start gap-8 relative">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-10">
            Special Launch Offer
          </h2>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-primary-font text-2xl tracking-[0] leading-[normal]">
              Student Creator Offer: Get Access for ₹150 (90% OFF)
            </h3>

            <p className="relative self-stretch rotate-[0.35deg] [font-family:'Satoshi-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
              Student Creator Offer: Get Access for ₹150 (90% OFF) Sign up{" "}
              <br />
              early and lock in your discount when we go live.
            </p>
          </div>

          <div className="relative">
            <div className="relative">
              <Button
                className="h-[54px] px-4 py-1.5 bg-zinc-950 rounded-[10043px] border-none"
                onClick={() => setIsWaitlistOpen(true)}
              >
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-xl tracking-[0] leading-6 whitespace-nowrap">
                  Get Early Access Now
                </span>
              </Button>

              <div className="absolute w-[174px] h-0.5 bottom-[-2px] left-[60px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_50%,rgba(0,0,0,0)_100%)]" />
            </div>
          </div>
        </div>

        <img
          className="absolute w-[359px] h-[362px] top-0 right-0"
          src="star-background-image.png"
          alt="Group"
        />
      </CardContent>
      {/* Waitlist Form */}
      <WaitlistForm open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </Card>
  );
};

export default Special_Launch_Section;
