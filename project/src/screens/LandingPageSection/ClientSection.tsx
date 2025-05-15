import React from "react";

export const ClientSectionByConlancer = (): JSX.Element => {
  // Array of individual logo paths and sizes
  const partnerLogos = [
    { id: 1, src: "/client-logo.png", width: 154, height: 50 },
    { id: 2, src: "/client-logo2.png", width: 154, height: 50 },
    { id: 3, src: "/client-logo3.png", width: 154, height: 50 },
    { id: 4, src: "/client-logo4.png", width: 154, height: 49 },
    { id: 5, src: "/client-logo5.png", width: 155, height: 49 },
    { id: 6, src: "/client-logo6.png", width: 155, height: 50 },
    { id: 7, src: "/client-logo7.png", width: 155, height: 50 },
    { id: 8, src: "/client-logo8.png", width: 154, height: 50 },
    { id: 9, src: "/client-logo9.png", width: 155, height: 50 },
    { id: 10, src: "/client-logo10.png", width: 154, height: 49 },
    { id: 11, src: "/client-logo311.png", width: 154, height: 50 },
    { id: 12, src: "/client-logo12.png", width: 155, height: 50 },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 sm:px-8 md:px-[55px] py-5 w-full">
      <header className="flex flex-col items-center gap-2.5 w-full">
        <h2 className="mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-3xl md:text-[44px] text-center tracking-[0.88px] leading-[52.8px]">
          Trusted and Backed by
        </h2>

        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-primary-font text-lg md:text-xl text-center tracking-[0] leading-9">
          Backed by industry leaders who believe in the future of freelancing.
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 w-full max-w-[1330px]">
        {partnerLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={`Partner logo ${logo.id}`}
            className="object-contain"
            style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientSectionByConlancer;
