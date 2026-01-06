import { motion } from "framer-motion";
import { ArrowRight, Microscope, ShieldCheck, Award, Users } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_modern_medical_architecture_interior.png";
import { FloatingBubbles } from "./FloatingBubbles";

import anhangueraLogo from "@assets/image_1767725302166.png";
import plantandoLogo from "@assets/image-removebg-preview_1767725759434.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#032832] via-[#044F5F] to-[#032832] overflow-hidden pt-12">
      {/* Textured Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='1' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='75' cy='75' r='1' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='50' cy='10' r='0.5' fill='%23ffffff' opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      {/* CBD Molecules */}
      <FloatingBubbles count={8} color="rgba(248, 156, 34, 0.08)" />
      
      {/* Refined Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F89C22]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E75C23]/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mt-8">
          <div className="text-[#F89C22] text-xs font-bold tracking-[0.3em] uppercase mb-12">
            A Excelência em Endocanabinologia
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-white leading-[1.15] mb-12 tracking-tighter">
            Lidere a <br/>
            <span className="bg-gradient-to-r from-[#E75C23] to-[#F89C22] bg-clip-text text-transparent font-bold inline-block">Nova Era</span> Clínica
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 mb-16 max-w-3xl leading-relaxed font-light tracking-wide">
            Domine a ciência do sistema endocanabinoide na 1ª Pós-graduação do mundo dedicada a veterinários de alta performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center">
            <button className="bg-gradient-to-r from-[#E75C23] to-[#F89C22] hover:from-[#F89C22] hover:to-[#E75C23] text-white font-bold text-xs sm:text-sm px-6 sm:px-12 md:px-20 py-5 sm:py-6 md:py-7 transition-all duration-200 shadow-2xl tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase rounded-lg flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mx-auto sm:mx-0">
              SOLICITAR MATRÍCULA
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
