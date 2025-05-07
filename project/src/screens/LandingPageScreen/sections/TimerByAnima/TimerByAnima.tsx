import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const TimerByAnima = (): JSX.Element => {
  // Set your target date/time here (e.g., 104 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 104);
  targetDate.setHours(targetDate.getHours() + 6);
  targetDate.setMinutes(targetDate.getMinutes() + 20);
  targetDate.setSeconds(targetDate.getSeconds() + 56);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((distance / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hour(s)" },
    { value: timeLeft.minutes, label: "Minute(s)" },
    { value: timeLeft.seconds, label: "Second(s)" },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-20 px-4 md:px-20 lg:px-[209px] relative self-stretch w-full flex-[0_0_auto] overflow-hidden bg-[#111111]">
      {/* You can keep or adjust background effects here if they are not interfering with number text */}
      <div className="absolute w-full h-[900px] top-[-278px] left-0 opacity-60 bg-cover bg-[50%_50%] pointer-events-none">
        <div className="relative w-[588px] h-0.5 top-56 left-[479px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_60%,rgba(0,0,0,0)_100%)]" />
      </div>

      <div className="flex items-center justify-center flex-wrap gap-10 relative self-stretch w-full flex-[0_0_auto]">
        {timerItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
              {/* Apply gradient background only to the number text */}
              <div className="relative w-fit mt-[-1.00px] bg-gradient-to-b from-white to-[#E9E9E900] bg-clip-text text-transparent [font-family:'Satoshi-Bold',Helvetica] font-bold text-[120px] text-center tracking-[0] leading-[normal]">
                {item.value}
              </div>
              <div className="relative w-fit [font-family:'Satoshi-Bold',Helvetica] font-bold text-bg-grey text-2xl text-center tracking-[0] leading-[normal]">
                {item.label}
              </div>
            </div>

            {index < timerItems.length - 1 && (
              <div className="inline-flex h-[216px] items-center py-5 relative flex-[0_0_auto]">
                <Separator
                  orientation="vertical"
                  className="h-full w-px bg-gradient-to-b from-white/20 to-transparent"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="relative w-[223px] h-[53px]">
        <div className="relative w-[212px] h-[54px] -top-px left-5">
          <Button className="inline-flex h-[54px] items-center justify-center gap-2.5 px-4 py-1.5 absolute top-0 left-0 bg-zinc-950 rounded-[10043px] overflow-hidden border-[none] w-fit text-[#ffffff] text-xl text-center leading-6 whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[0]">
            Join the Waitlist
          </Button>
          <div className="absolute w-[174px] h-0.5 top-[52px] left-[38px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_50%,rgba(0,0,0,0)_100%)]" />
        </div>
      </div>
    </section>
  );
};
