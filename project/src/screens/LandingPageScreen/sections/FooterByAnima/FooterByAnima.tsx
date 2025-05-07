import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterByAnima = (): JSX.Element => {
  const socialLinks = [
    {
      icon: "/icon-3.svg",
      alt: "Twitter icon",
      url: "https://twitter.com/yourhandle",
    },
    {
      icon: "/icon.svg",
      alt: "LinkedIn icon",
      url: "https://linkedin.com/company/yourcompany",
    },
    {
      icon: "/icons8-instagram.svg",
      alt: "Instagram icon",
      url: "https://www.instagram.com/conlancer?igsh=d3ZoNXM4am5tc2V1&utm_source=qr",
    },
  ];

  return (
    <footer className="flex flex-col items-center gap-8 px-4 md:px-8 py-[60px] w-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(122,122,122,0.5)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(17,17,17,1)_0%,rgba(17,17,17,1)_100%)]">
      {/* Logo section */}
      <div className="flex flex-col w-full max-w-[1323px] items-start gap-2.5">
        <img
          className="w-[382px] h-[74px]"
          src="./footer-logo.png"
          alt="Conlancer logo"
        />
      </div>

      {/* Main content section */}
      <div className="flex flex-col md:flex-row w-full max-w-[1323px] items-start justify-between gap-8">
        <div className="flex flex-col w-full md:w-[749px] items-start pb-10">
          <p className="w-full md:w-[618px] font-medium text-white text-lg leading-normal font-['Satoshi-Medium',Helvetica]">
            Empowering Indian students, creators &amp; hustlers with zero
            commissions, instant payouts, and full freedom.
          </p>
        </div>

        <div className="flex flex-col w-full md:w-[409px] items-start md:items-end justify-center gap-5">
          <p className="w-full font-normal text-2xl md:text-right text-white tracking-[0] leading-normal font-['Satoshi-Regular',Helvetica]">
            Don&apos;t Miss the Launch – Be the First to Freelance without Fees.
          </p>

          <div className="w-full max-w-[240px]">
            <Button className="w-full h-[54px] px-6 py-2 bg-zinc-950 rounded-full border-none">
              <span className="font-bold text-white text-xl leading-6 whitespace-nowrap font-['Satoshi-Bold',Helvetica]">
                Get Early Access Now
              </span>
            </Button>
            <div className="w-full h-0.5 mt-1 [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_50%,rgba(0,0,0,0)_100%)]" />
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1323px] gap-6 md:gap-0">
        <div className="font-normal text-[#797b85] text-sm tracking-[0] leading-[21px] whitespace-nowrap font-['Satoshi-Regular',Helvetica]">
          © 2025 Conlancer. All rights reserved.
        </div>

        <div className="flex items-center gap-2.5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Button
                variant="outline"
                size="icon"
                className="p-[10.58px] bg-[#1c1c21] rounded-[75.57px] border-none"
              >
                <img
                  className="w-[15.11px] h-[15.11px]"
                  alt={link.alt}
                  src={link.icon}
                />
              </Button>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
