import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { WaitlistForm } from "../../components/ui/WaitlistForm";

export const Footer = (): JSX.Element => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const socialLinks = [
    {
      icon: "/icon-3.svg",
      alt: "Facebook icon",
      url: "https://www.facebook.com/share/1AfPX5ucUH/?mibextid=wwXIfr",
    },
    {
      icon: "/icon-1.svg",
      alt: "LinkedIn icon",
      url: "https://www.linkedin.com/company/conlancer/",
    },
    {
      icon: "/icons8-instagram.svg",
      alt: "Instagram icon",
      url: "https://www.instagram.com/conlancer?igsh=d3ZoNXM4am5tc2V1&utm_source=qr",
    },
  ];

  useEffect(() => {
    // Dot particle animation script
    const canvas = document.getElementById(
      "footer-particle-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement?.offsetHeight || 400;

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 20 : 40; // Reduced particle count for footer

    // Mouse position tracking
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 80, // Smaller interaction radius for footer
    };

    window.addEventListener("mousemove", function (event) {
      const rect = canvas.getBoundingClientRect();
      // Only track mouse position when it's inside the footer
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
        this.baseSize = Math.random() * 1.9 + 0.5; // Smaller particles for footer
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.4 - 0.2; // Slower movement for footer
        this.speedY = Math.random() * 0.2 - 0.1;
        this.density = Math.random() * 15 + 3; // Less density for weaker interaction
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.05})`; // More transparent for footer
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
            const directionX = forceDirectionX * force * this.density * -0.2; // Reduced force for footer
            const directionY = forceDirectionY * force * this.density * -0.2;

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
          this.baseSize + Math.sin(Date.now() * 0.001 + this.density) * 0.15;
      }

      draw() {
        if (!ctx) return; // Added null check for ctx

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // More subtle glow
        ctx.shadowBlur = 3;
        ctx.shadowColor = "rgba(255, 255, 255, 0.05)";
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
      canvas.height = canvas.parentElement?.offsetHeight || 400;
    };

    window.addEventListener("resize", handleResize);

    // Clear events on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="relative flex flex-col items-center gap-8 px-4 md:px-8 py-[60px] w-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(122,122,122,0.5)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(17,17,17,1)_0%,rgba(17,17,17,1)_100%)]">
      {/* Particle canvas */}
      <canvas
        id="footer-particle-canvas"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Content with relative positioning to appear above the canvas */}
      <div className="relative z-10 w-full">
        {/* Logo section */}
        <div className="flex flex-col w-full max-w-[1323px] mx-auto items-start gap-2.5">
          <img
            className="w-[382px] h-[74px]"
            src="./footer-logo.png"
            alt="Conlancer logo"
          />
        </div>

        {/* Main content section */}
        <div className="flex flex-col md:flex-row w-full max-w-[1323px] mx-auto items-start justify-between gap-8 mt-8">
          <div className="flex flex-col w-full md:w-[749px] items-start pb-10">
            <p className="w-full md:w-[618px] font-medium text-white text-lg leading-normal font-['Satoshi-Medium',Helvetica]">
              Empowering Indian students, creators &amp; hustlers with zero
              commissions, instant payouts, and full freedom.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-[409px] items-start md:items-end justify-center gap-5">
            <p className="w-full font-normal text-2xl md:text-right text-white tracking-[0] leading-normal font-['Satoshi-Regular',Helvetica]">
              Don&apos;t Miss the Launch – Be the First to Freelance without
              Fees.
            </p>

            <div className="w-full max-w-[240px]">
              <Button
                className="w-full h-[54px] px-6 py-2 bg-zinc-950 rounded-full border-none"
                onClick={() => setIsWaitlistOpen(true)}
              >
                <span className="font-bold text-white text-xl leading-6 whitespace-nowrap font-['Satoshi-Bold',Helvetica]">
                  Get Early Access Now
                </span>
              </Button>
              <div className="w-full h-0.5 mt-1 [background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(56,56,56,1)_50%,rgba(0,0,0,0)_100%)]" />
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1323px] mx-auto gap-6 md:gap-0 mt-8">
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
      </div>

      {/* Waitlist Form */}
      <WaitlistForm open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </footer>
  );
};

export default Footer;
