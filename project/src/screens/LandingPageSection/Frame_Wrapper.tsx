import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "../../components/ui/card";

export const Frame_Wrapper = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineSteps = [
    {
      id: 1,
      title: "Join the Waitlist Today",
      description:
        "We're gearing up for launch and it's going to be big. Reserve your spot on the waitlist today.",
      icon: "/handshake.png",
      position: "right",
    },
    {
      id: 2,
      title: "We Notify You at Launch",
      description:
        "Exciting things are on the way. We'll notify you the moment we launch.",
      icon: "/rocket_launch.svg",
      position: "left",
    },
    {
      id: 3,
      title: "You Get Exclusive Early Access",
      description:
        "Be first. Stay ahead. Exclusive early access starts with the waitlist.",
      icon: "/crown.svg",
      position: "right",
    },
    {
      id: 4,
      title: "Start Freelancing & Earning 100%",
      description:
        "Freelance freely, earn fully. Keep every cent you work for—100% yours.",
      icon: "/currency_rupee_circle.svg",
      position: "left",
    },
  ];

  useEffect(() => {
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg: breakpoint
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const timelineTop = rect.top + window.scrollY;
      const timelineBottom = timelineTop + rect.height;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (scrollPosition - timelineTop) / (timelineBottom - timelineTop)
        )
      );

      const newActiveStep = Math.min(
        timelineSteps.length,
        Math.floor(progress * timelineSteps.length) + 1
      );

      setActiveStep(newActiveStep);

      const scrollFill = document.getElementById("scroll-fill");
      if (scrollFill) {
        scrollFill.style.height = `${progress * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 py-16 w-full px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-bold text-black text-3xl sm:text-4xl lg:text-[42px] mb-2">
          How It Works
        </h2>
        <p className="text-primary-font text-lg sm:text-xl">
          Kickstart your freelance journey in just a few steps.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start gap-8 w-full max-w-7xl mx-auto">
        {/* Phone mockup (desktop only) */}
        <div className="hidden lg:block relative w-[330px] h-[670px] flex-shrink-0">
          <div className="absolute w-[289px] h-[629px] top-[21px] left-5 bg-white rounded-[40px] overflow-hidden">
            <img
              src="your-ui-inside-mockup.png"
              className="w-full h-full object-cover"
              alt="Phone UI"
            />
          </div>
          <img
            src="how-it-work-image.png"
            alt="iPhone Mockup"
            className="absolute w-[330px] h-[670px] top-0 left-0 object-cover"
          />
        </div>

        {/* Timeline */}
        <div className="relative w-full flex-1" ref={timelineRef}>
          <div className="relative min-h-[800px]">
            {/* Vertical Line */}
            <div className="absolute left-[-3%] lg:left-[43.5%] sm:left-[0.5%] transform -translate-x-1/2 lg:translate-x-0 h-full w-[4px] bg-gray-200 rounded-full">
              <div
                id="scroll-fill"
                className="absolute top-0 left-0 w-full h-0 bg-black rounded-full transition-all duration-300"
              />
            </div>

            {/* Steps */}
            {timelineSteps.map((step, index) => {
              const isActive = index < activeStep;
              const applyRTL = isDesktop && (step.id === 2 || step.id === 4);
              const applyMarginLeft =
                isDesktop && (step.id === 2 || step.id === 4);

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row ${
                    step.position === "left"
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } items-center gap-4 lg:gap-16 mb-8`}
                >
                  {/* Card */}
                  <div
                    className="flex-1 lg:max-w-[500px] lg:flex-row-reverse"
                    style={applyMarginLeft ? { marginLeft: "-118px" } : {}}
                  >
                    <Card className="w-full bg-transparent border-none shadow-none">
                      <CardContent className="pl-8">
                        <div
                          className={`flex flex-col gap-2 ${
                            applyRTL ? "rtl" : ""
                          }`}
                          {...(applyRTL ? { dir: "rtl" } : {})}
                        >
                          <div
                            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                              isActive
                                ? "scale-110 bg-black text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            {step.id}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-primary-font">
                            {step.title}
                          </h3>
                          <p className="text-base sm:text-lg text-icon-color w-[350px]">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Icon Image */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 z-10">
                    <img
                      src={step.icon}
                      alt={`${step.title} Icon`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame_Wrapper;
