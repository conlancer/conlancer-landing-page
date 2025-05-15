import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { WaitlistForm } from "../../components/ui/WaitlistForm";

export const Hero_Section = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    // Dot particle animation script
    const canvas = document.getElementById(
      "particle-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 30 : 60; // Reduced particle count

    // Mouse position tracking
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 100, // Smaller interaction radius
    };

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
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
        this.baseSize = Math.random() * 1 + 0.5; // Smaller particles
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.3 - 0.15; // Slower movement
        this.speedY = Math.random() * 0.3 - 0.15;
        this.density = Math.random() * 20 + 5; // Less density for weaker interaction
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`; // More transparent
      }

      update() {
        // Check for mouse interaction
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // More subtle repel effect
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * this.density * -0.3; // Reduced force
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

        // Very subtle size pulsing
        this.size =
          this.baseSize + Math.sin(Date.now() * 0.002 + this.density) * 0.2;
      }

      draw() {
        if (!ctx) return; // Added null check for ctx

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // More subtle glow
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
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Clear events on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", function () {});
    };
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Particle canvas */}
      <canvas
        id="particle-canvas"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="relative w-full min-h-[100vh] md:min-h-[800px] lg:min-h-[998px]">
        {/* Background gradient */}
        <div className="absolute inset-0 [background:radial-gradient(50%_50%_at_50%_0%,rgba(122,122,122,0.5)_0%,rgba(0,0,0,0)_100%)]">
          {/* Top gradient line */}
          <div className="relative w-[80%] sm:w-[500px] md:w-[588px] h-0.5 mx-auto mt-[50px] sm:mt-[80px] md:mt-[133px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_60%,rgba(0,0,0,0)_100%)]" />

          {/* Main content container */}
          <div className="flex flex-col items-center justify-center w-[90%] max-w-[1061px] mx-auto mt-[18px] gap-[10px] sm:gap-[17px] px-4 sm:px-0">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="font-medium text-[24px] sm:text-[30px] md:text-[36px] text-white text-center leading-[30px] sm:leading-[40px] md:leading-[50px] [font-family:'Satoshi-Medium',Helvetica]">
                India&apos;s First
              </h1>
              <div className="bg-gradient-to-b from-[#ffffff] to-[#4b4b4b] bg-clip-text text-transparent">
                <img
                  className="p-3 sm:p-6 w-full max-w-[500px] md:max-w-none"
                  src="./zero-commision.svg"
                  alt="ZERO COMMISION"
                />
              </div>
              <h2 className="font-medium text-[28px] sm:text-[32px] md:text-4xl text-white leading-[35px] sm:leading-[40px] md:leading-[45px] [font-family:'Satoshi-Medium',Helvetica] text-center mx-auto max-w-[80%]">
                Freelance Platform Is Coming
              </h2>
            </div>

            {/* Subtitle */}
            <p className="font-medium text-[16px] sm:text-[20px] md:text-2xl text-zinc-400 text-center [font-family:'Satoshi-Medium',Helvetica] max-w-[90%] sm:max-w-none">
              Join Thousands Of Indian Freelancers &amp; Students Already
              Signing Up To Get Early Access.
            </p>
          </div>

          {/* Phone mockup */}
          <div className="absolute w-[280px] sm:w-[350px] md:w-[429px] h-[320px] sm:h-[400px] md:h-[488px] top-[350px] sm:top-[380px] md:top-[420px] left-1/2 -translate-x-1/2">
            <div className="absolute w-[250px] sm:w-[300px] md:w-[330px] h-[260px] sm:h-[380px] md:h-[433px] top-0 left-1/2 -translate-x-1/2 overflow-hidden">
              <div className="h-[500px] sm:h-[570px] md:h-[670px]">
                <div className="w-full h-full">
                  <div className="relative h-full">
                    <div className="absolute w-[90%] h-[90%] top-[5%] left-[5%] bg-white rounded-[30px] md:rounded-[40px] overflow-hidden">
                      <img
                        className="absolute w-full h-[70%] top-0 left-0 object-cover"
                        src="./home-image.png"
                        alt="Placeholder image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button shadow */}
            <div className="absolute w-full h-10 sm:h-12 md:h-14 top-[230px] sm:top-[320px] md:top-[400px] left-0 bg-black blur-[8px] sm:blur-[10px] md:blur-[12.1px]" />

            {/* Join waitlist button */}
            <Button
              className="absolute w-[180px] sm:w-[200px] md:w-[223px] h-[45px] sm:h-[50px] md:h-[53px] bottom-[0%] ls:bottom-[-25%] sm:top-[340px] md:top-[435px] left-1/2 -translate-x-1/2 bg-zinc-950 rounded-[10043px] font-bold text-[16px] sm:text-[18px] md:text-xl [font-family:'Satoshi-Bold',Helvetica]"
              onClick={() => setIsWaitlistOpen(true)}
            >
              Join the waitlist!
            </Button>

            {/* Button bottom line */}
            <div className="absolute w-[120px] sm:w-[150px] md:w-[174px] h-0.5 top-[320px] sm:top-[380px] md:top-[487px] left-1/2 -translate-x-1/2 sm:-translate-x-[45px] md:-translate-x-[57px] [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_50%,rgba(0,0,0,0)_100%)]" />
          </div>

          {/* Tagline */}
          <div className="absolute w-[80%] sm:w-[300px] md:w-[332px] h-auto top-[550px] sm:top-[600px] md:top-[707px] left-1/2 -translate-x-1/2 sm:left-36 sm:translate-x-0 font-bold text-[18px] sm:text-[20px] md:text-2xl text-zinc-400 text-center [font-family:'Satoshi-Bold',Helvetica] hidden sm:block">
            Keep 100% of your earnings. No cuts. No delays.
          </div>

          {/* Learn more link */}
          <div
            className="absolute w-[105px] h-[46px] bottom-2 sm:top-[-70px] md:top-[934px] left-1/2 -translate-x-1/2 opacity-[0.81] flex flex-col items-center cursor-pointer"
            onClick={() => {
              const nextSection = document.getElementById("aboutus");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="font-bold text-sm text-[#f3f3f3] [font-family:'Satoshi-Bold',Helvetica]">
              Learn more
            </span>
            <ChevronDown className="w-[18px] h-[18px] mt-1 text-white cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Waitlist Form */}
      <WaitlistForm open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </section>
  );
};

export default Hero_Section;
