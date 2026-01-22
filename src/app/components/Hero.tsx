import { Linkedin, Github, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-6 px-6">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                HI, I AM<br />
                <span className="font-bold">SIDDHANT SINGH RAO.</span>
              </h1>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A Business & Product Development Specialist focused on building growth-driven 
              business models and scalable products, with expertise in AI and automation to 
              optimize performance and accelerate sustainable growth.
            </p>

            {/* CTA and Social Icons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-block px-6 py-2.5 bg-[#D4FF00] text-black text-xs font-bold rounded-md hover:bg-[#bfe600] transition-all"
              >
                GET IN TOUCH
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-3">

                
                <a
                  href="https://www.linkedin.com/in/siddhantsinghrao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#D4FF00] hover:text-black flex items-center justify-center transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#D4FF00] hover:text-black flex items-center justify-center transition-all"
                >
                  <Github size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#D4FF00] hover:text-black flex items-center justify-center transition-all"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative">
            <div className="relative bg-[#B8B8B8] rounded-lg overflow-hidden aspect-square max-w-[400px] mx-auto lg:ml-auto">
              <img
                src="/siddhant.png"
                alt="Siddhant Singh Rao"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}