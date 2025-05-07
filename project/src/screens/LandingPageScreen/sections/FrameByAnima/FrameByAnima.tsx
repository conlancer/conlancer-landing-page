import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima = (): JSX.Element => {
  const features = [
    {
      title: "Zero Commission Forever",
      description:
        "Be among the first freelancers to join and enjoy 0% commission for life.",
      icon: "/wallet--1--2.svg",
      iconPosition: { top: "202px", left: "86px" },
    },
    {
      title: "Get Paid Instantly",
      description:
        "Work with full payment protection via our built-in escrow system.",
      isRupeeIcon: true,
      iconPosition: { top: "190px", left: "294px" },
    },
    {
      title: "Early Creator Badge",
      description:
        "Stand out with a badge, early access to jobs, and profile boosts.",
      icon: "/verification-check.svg",
      iconPosition: { top: "0", left: "315px" },
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[35px] px-8 py-0 w-full">
      <div className="flex flex-col items-center gap-2.5 w-full">
        <h2 className="w-full mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[42px] text-center tracking-[0] leading-[normal]">
          Why Join Now ?
        </h2>

        <p className="w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-primary-font text-xl text-center tracking-[0] leading-9 whitespace-nowrap">
          Be first. Get rewarded. Grow faster.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 w-full flex-wrap h-[110rem] sm:h-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="flex flex-col items-start gap-5 p-[30px] flex-1 rounded-[20px] overflow-hidden [background:linear-gradient(180deg,rgba(243,243,243,1)_0%,rgba(255,255,255,1)_100%)] border-none relative h-[580px]"
          >
            <img
              className={`absolute w-[${
                index === 2 ? "338" : "247"
              }px] h-[434px] top-2 ${index === 2 ? "left-[83px]" : "left-0"}`}
              src="./back-card.png"
              alt="Artboard"
            />

            <CardContent className="p-0 flex flex-col gap-5 w-full">
              <h3 className="self-stretch mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[34px] tracking-[0] leading-10">
                {feature.title}
              </h3>

              <p className="self-stretch [font-family:'Satoshi-Medium',Helvetica] font-medium text-black text-lg tracking-[0] leading-6">
                {feature.description}
              </p>
            </CardContent>

            {/* Phone mockups */}
            <div
              className={`absolute ${
                index === 0
                  ? "top-[222px] left-[132px]"
                  : index === 1
                  ? "left-[46px] top-[222px]"
                  : "left-[-94px] top-[222px]"
              } w-[330px] h-[670px]`}
            >
              {index === 0 && (
                <div className="h-[670px]">
                  <div className="relative w-[309px] h-[649px]">
                    <div className="absolute w-[289px] h-[629px] top-[21px] left-5 bg-[#ffffff] rounded-[40px] overflow-hidden">
                      {/* <img
                        className="w-[268px] h-[337px] top-0 left-0 absolute object-cover"
                        alt="Placeholder image"
                      /> */}
                    </div>
                    <img
                      className="w-[289px] h-[358px] top-0 left-0 absolute object-cover"
                      src="./iPhone-Mockup.png"
                      alt="Iphone plus"
                    />
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="h-[670px]">
                  <div className="relative w-[330px] h-[649px]">
                    <div className="absolute w-[289px] h-[629px] top-[21px] left-5 rounded-[40px] bg-cover bg-[50%_50%]" />
                    <img
                      className="w-[330px] h-[358px] top-0 left-0 absolute object-cover"
                      src="./iPhone-Mockup3.png"
                      alt="Iphone plus"
                    />
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="relative w-[424px] h-[719px] top-[-49px]">
                  <div className="absolute w-[330px] h-[670px] top-[49px] left-0">
                    <div className="relative w-[309px] h-[649px] left-5">
                      <div className="absolute w-[289px] h-[629px] top-[21px] left-0 rounded-[40px] bg-cover bg-[50%_50%]" />
                      <img
                        className="w-[236px] h-[358px] top-0 left-[74px] absolute object-cover"
                        src="./iPhone-Mockup2.png"
                        alt="Iphone plus"
                      />
                    </div>
                  </div>
                  <img
                    className="absolute w-[109px] h-[106px] top-0 left-[315px] "
                    alt="Verification check"
                    src="/verification-check.svg"
                  />
                </div>
              )}
            </div>

            {/* Icons */}
            {index === 0 && (
              <div className="flex flex-col w-20 h-20 items-center justify-center gap-[16.67px] p-5 absolute top-[202px] left-[86px] rounded-[13.33px] overflow-hidden border-[1.67px] border-solid border-[#e2e2e2] shadow-setup [background:linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(255,255,255,1)_100%)] hidden sm:block">
                <img
                  className="relative w-10 h-10"
                  alt="Wallet"
                  src="/wallet--1--2.svg"
                />
              </div>
            )}

            {index === 1 && (
              <div className="inline-flex flex-col items-center justify-center gap-[16.67px] p-5 absolute top-[190px] left-[294px] rounded-[13.33px] overflow-hidden border-[1.67px] border-solid border-[#e2e2e2] shadow-setup [background:linear-gradient(180deg,rgba(252,252,252,1)_0%,rgba(255,255,255,1)_100%)] hidden sm:block">
                <div className="relative w-10 h-10">
                  <div className="absolute -top-0.5 left-[5px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-primary-font text-[53.3px] tracking-[0] leading-[normal] whitespace-nowrap ">
                    ₹
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
