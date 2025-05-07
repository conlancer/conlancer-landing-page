import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { HeroByAnima } from "./sections/HeroByAnima";
import { LandingPageByAnima } from "./sections/LandingPageByAnima";
import { LandingPageWrapperByAnima } from "./sections/LandingPageWrapperByAnima";
import { TimerByAnima } from "./sections/TimerByAnima";
import { TimerWrapperByAnima } from "./sections/TimerWrapperByAnima";

export const LandingPageScreen = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT US", href: "#" },
  ];

  return (
    <div
      className="flex flex-col items-center relative bg-[#ffffff] w-full"
      data-model-id="2945:5556"
    >
      {/* Navigation Menu */}
      <NavigationMenu className="absolute top-[30px] z-10">
        <NavigationMenuList className="flex gap-[70px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-ffffff text-lg"
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-col w-full max-w-[100%] items-center justify-center gap-[100px]">
        <HeroByAnima />
        <FrameByAnima />
        <FrameWrapperByAnima />
        <TimerByAnima />
        <TimerWrapperByAnima />
        <LandingPageByAnima />
        <LandingPageWrapperByAnima />
        <DivWrapperByAnima />
        <FooterByAnima />
      </div>

      <div className="relative w-28 h-28 self-start ml-[353px] mt-[-5518px] rotate-[-15deg] hidden sm:block">
        <img
          className="absolute w-[111px] h-[111px] top-[13rem] left-[-3rem] rotate-[15deg]"
          src="./up-arrow-icon.png"
          alt="Group"
        />
      </div>
    </div>
  );
};
