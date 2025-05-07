import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const LandingPageByAnima = (): JSX.Element => {
  return (
    <Card className="[background:radial-gradient(50%_50%_at_50%_0%,rgba(122,122,122,0.5)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(17,17,17,1)_0%,rgba(17,17,17,1)_100%)] max-w-[1300px] w-full h-auto lg:h-[362px] rounded-[40px] overflow-hidden border-none">
      <CardContent className="flex flex-col lg:flex-row items-center p-6 lg:p-10 h-full relative gap-6 lg:gap-0">
        {/* Decorative gradient line (desktop only) */}
        <div className="hidden lg:block absolute w-full h-[900px] top-[-278px] left-0 opacity-60 pointer-events-none">
          <div className="relative w-[588px] h-0.5 top-56 left-[479px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_60%,rgba(0,0,0,0)_100%)]" />
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center justify-between relative z-10 gap-8 lg:gap-0">
          {/* Left Image Section */}
          <div className="relative w-full max-w-[500px] h-[300px] lg:h-[350px] flex-shrink-0">
            <img
              src="/side-image-phone.png"
              alt="Phone Mockup"
              className="absolute w-full bottom-0 left-1/2 lg:left-10 -translate-x-1/2 lg:translate-x-0 z-0"
            />
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col w-full lg:w-[710px] items-start gap-6 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-2 w-full">
              <h2 className="w-fit font-bold text-[32px] lg:text-[40px] text-white leading-snug">
                Don&apos;t Miss the Launch
              </h2>
              <p className="text-white text-base lg:text-xl font-medium">
                Be the First to Freelance without Fees.
              </p>
            </div>

            <div className="relative mx-auto lg:mx-0">
              <Button className="h-[48px] lg:h-[54px] px-4 py-1.5 bg-zinc-950 rounded-full border-none">
                <span className="font-bold text-white text-base lg:text-xl leading-6 whitespace-nowrap">
                  Get Early Access Now
                </span>
              </Button>
              <div className="hidden lg:block absolute w-[174px] h-0.5 bottom-0 left-[60px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_50%,rgba(0,0,0,0)_100%)]" />
            </div>
          </div>

          {/* Background Icon Right */}
          <img
            className="absolute w-[200px] lg:w-[300px] h-auto right-0 top-0 z-0 opacity-50"
            src="/backgronicon-lanch.png"
            alt="Background Art"
          />
        </div>
      </CardContent>
    </Card>
  );
};
