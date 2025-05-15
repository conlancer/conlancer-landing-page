import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { WaitlistForm } from "../../components/ui/WaitlistForm";

export const Timer_Section = (): JSX.Element => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
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

  // Particle animation effect
  useEffect(() => {
    // Dot particle animation script
    const canvas = document.getElementById(
      "timer-particle-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement?.offsetHeight || 600;

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 25 : 50; // Adjusted particle count for timer section

    // Mouse position tracking
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120, // Interaction radius for timer section
    };

    window.addEventListener("mousemove", function (event) {
      const rect = canvas.getBoundingClientRect();
      // Only track mouse position when it's inside the timer section
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      density: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 1.3 + 0.7; // Particles for timer section
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.25 - 0.125; // Movement speed for timer section
        this.speedY = Math.random() * 0.25 - 0.125;
        this.density = Math.random() * 18 + 4; // Density for interaction
        // Slightly brighter particles for timer section
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.25 + 0.1})`;
      }

      update() {
        // Check for mouse interaction
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Repel effect
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * this.density * -0.25;
            const directionY = forceDirectionY * force * this.density * -0.25;

            this.x -= directionX;
            this.y -= directionY;
          }
        }

        // Normal movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check with bounce effect
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }

        // Size pulsing effect - more pronounced for timer section
        this.size =
          this.baseSize + Math.sin(Date.now() * 0.0015 + this.density) * 0.25;
      }

      draw() {
        if (!ctx) return; // Added null check for ctx

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(255, 255, 255, 0.15)";
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!ctx) return; // Added null check for ctx

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reset shadow properties
      ctx.shadowBlur = 0;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 600;
    };

    window.addEventListener("resize", handleResize);

    // Clear events on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const timerItems = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hour(s)" },
    { value: timeLeft.minutes, label: "Minute(s)" },
    { value: timeLeft.seconds, label: "Second(s)" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center gap-10 py-20 px-4 md:px-20 lg:px-[209px] w-full flex-[0_0_auto] overflow-hidden bg-[#111111]">
      {/* Particle canvas */}
      <canvas
        id="timer-particle-canvas"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Background effects */}
      <div className="absolute w-full h-[900px] top-[-278px] left-0 opacity-60 bg-cover bg-[50%_50%] pointer-events-none">
        <div className="relative w-[588px] h-0.5 top-56 left-[479px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_60%,rgba(0,0,0,0)_100%)]" />
      </div>

      {/* Timer content with z-index to appear above canvas */}
      <div className="relative z-10 flex items-center justify-center flex-wrap gap-10 self-stretch w-full flex-[0_0_auto]">
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

      {/* Button with z-index to appear above canvas */}
      <div className="relative z-10 w-[223px] h-[53px]">
        <div className="relative w-[212px] h-[54px] -top-px left-5">
          <Button
            className="inline-flex h-[54px] items-center justify-center gap-2.5 px-4 py-1.5 absolute top-0 left-0 bg-zinc-950 rounded-[10043px] overflow-hidden border-[none] w-fit text-[#ffffff] text-xl text-center leading-6 whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[0]"
            onClick={() => setIsWaitlistOpen(true)}
          >
            Join the Waitlist
          </Button>
          <div className="absolute w-[174px] h-0.5 top-[52px] left-[38px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_50%,rgba(0,0,0,0)_100%)]" />
        </div>
      </div>

      {/* Waitlist Form */}
      <WaitlistForm open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </section>
  );
};

export default Timer_Section;
