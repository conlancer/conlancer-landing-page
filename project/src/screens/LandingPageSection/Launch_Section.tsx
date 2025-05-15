import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { WaitlistForm } from "../../components/ui/WaitlistForm";

export const Launch_Section = (): JSX.Element => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    // Dot particle animation script
    const canvas = document.getElementById(
      "landing-particle-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.offsetHeight || 362;

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 30 : 60; // Adjusted particle count

    // Mouse position tracking
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 100, // Interaction radius
    };

    window.addEventListener("mousemove", function (event) {
      const rect = canvas.getBoundingClientRect();
      // Only track mouse position when it's inside the card
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
        this.baseSize = Math.random() * 1.4 + 0.6; // Slightly larger particles
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.3 - 0.15; // Slightly faster movement
        this.speedY = Math.random() * 0.3 - 0.15;
        this.density = Math.random() * 20 + 5; // More density for stronger interaction
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`; // Less transparent
      }

      update() {
        // Check for mouse interaction
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * this.density * -0.3;
            const directionY = forceDirectionY * force * this.density * -0.3;

            this.x -= directionX;
            this.y -= directionY;
          }
        }

        // Normal movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }

        // Subtle size pulsing
        this.size =
          this.baseSize + Math.sin(Date.now() * 0.001 + this.density) * 0.2;
      }

      draw() {
        if (!ctx) return;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(255, 255, 255, 0.1)";
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!ctx) return;

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
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 362;
    };

    window.addEventListener("resize", handleResize);

    // Clear events on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Card className="[background:radial-gradient(50%_50%_at_50%_0%,rgba(122,122,122,0.5)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(17,17,17,1)_0%,rgba(17,17,17,1)_100%)] max-w-[1300px] w-full h-auto lg:h-[362px] rounded-[40px] overflow-hidden border-none relative">
      {/* Particle canvas */}
      <canvas
        id="landing-particle-canvas"
        className="absolute top-0 left-0 w-full h-full"
      />

      <CardContent className="flex flex-col lg:flex-row items-center p-6 lg:p-10 h-full relative z-10 gap-6 lg:gap-0">
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
              <Button
                className="h-[48px] lg:h-[54px] px-4 py-1.5 bg-zinc-950 rounded-full border-none"
                onClick={() => setIsWaitlistOpen(true)}
              >
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
      {/* Waitlist Form */}
      <WaitlistForm open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </Card>
  );
};

export default Launch_Section;
