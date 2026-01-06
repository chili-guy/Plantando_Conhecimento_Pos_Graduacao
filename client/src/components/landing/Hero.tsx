import { motion } from "framer-motion";
import { ArrowRight, Microscope, ShieldCheck, Award, Users } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_modern_medical_architecture_interior.png";

import anhangueraLogo from "@assets/image_1767725302166.png";
import plantandoLogo from "@assets/image-removebg-preview_1767725759434.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-ivory overflow-hidden pt-12">
      {/* Refined Background - Matching the rest of the page (Ivory & Gold hints) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-ivory"></div>
        {/* Subtle radial gradients to create depth without dark emerald */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/3 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mt-8">
          <div className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-12">
            A Excelência em Endocanabinologia
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-medium text-brand-green leading-[0.95] mb-12 tracking-tighter">
            Lidere a <br/>
            <span className="text-brand-gold italic font-light">Nova Era</span> Clínica
          </h1>
          
          <p className="text-lg md:text-2xl text-brand-green/60 mb-16 max-w-3xl leading-relaxed font-light tracking-wide">
            Domine a ciência do sistema endocanabinoide na 1ª Pós-graduação do mundo dedicada a veterinários de alta performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
            <button className="bg-brand-gold hover:bg-[#a68a4d] text-brand-ivory font-bold text-xs sm:text-sm px-6 sm:px-12 md:px-20 py-5 sm:py-6 md:py-7 transition-[background-color] duration-200 shadow-xl tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase border border-brand-gold/20">
              SOLICITAR MATRÍCULA
              <ArrowRight className="inline-block ml-3 sm:ml-4 md:ml-6 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
