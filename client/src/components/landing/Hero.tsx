import { motion } from "framer-motion";
import { ArrowRight, Microscope, ShieldCheck, Award, Users } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_modern_medical_architecture_interior.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-ivory overflow-hidden pt-20">
      {/* Refined Background - Matching the rest of the page (Ivory & Gold hints) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-ivory"></div>
        {/* Subtle radial gradients to create depth without dark emerald */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        
        {/* Subtle texture/noise from index.css applies to body, so we keep it clean here */}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 border-l border-r border-brand-gold/40 text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-12"
          >
            A Excelência em Endocanabinologia
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-heading font-medium text-brand-green leading-[0.95] mb-12 tracking-tighter"
          >
            Lidere a <br/>
            <span className="text-brand-gold italic font-light">Nova Era</span> Clínica
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-brand-green/60 mb-16 max-w-3xl leading-relaxed font-light tracking-wide"
          >
            Domine a ciência do sistema endocanabinoide na 1ª Pós-graduação do mundo dedicada a veterinários de alta performance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-8 w-full justify-center"
          >
            <button className="bg-brand-gold hover:bg-[#a68a4d] text-brand-ivory font-bold text-sm px-20 py-7 transition-all shadow-xl hover:-translate-y-1 tracking-[0.25em] uppercase border border-brand-gold/20">
              SOLICITAR MATRÍCULA
              <ArrowRight className="inline-block ml-6 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-12 md:gap-24 mt-24 pt-12 border-t border-brand-gold/10 w-full max-w-4xl"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase">Certificação MEC</span>
              <div className="w-8 h-[1px] bg-brand-gold/20"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase">Base Científica</span>
              <div className="w-8 h-[1px] bg-brand-gold/20"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase">Mentoria Expert</span>
              <div className="w-8 h-[1px] bg-brand-gold/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
