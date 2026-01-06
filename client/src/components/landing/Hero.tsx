import { motion } from "framer-motion";
import { ArrowRight, Microscope, ShieldCheck, Award, Users } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_modern_medical_architecture_interior.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#041a1a] overflow-hidden pt-20">
      {/* Background with texture and gradients */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Modern Medical Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#041a1a]/50 via-[#041a1a] to-[#041a1a]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,225,55,0.08),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4e137] text-sm font-semibold mb-8 backdrop-blur-md"
          >
            <Award className="w-4 h-4" />
            1ª Pós-graduação em Endocanabinologia Veterinária do Mundo
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-heading font-medium text-white leading-[1.05] mb-8 tracking-tighter"
          >
            Lidere a <span className="italic font-light opacity-90">Nova Era</span> da <br className="hidden md:block" /> Medicina Veterinária
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/60 mb-12 max-w-3xl leading-relaxed font-light tracking-wide"
          >
            Domine a ciência do sistema endocanabinoide e transforme sua prática clínica com terapias inovadoras e seguras.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center"
          >
            <button className="bg-[#b89b5e] hover:bg-[#a68a4d] text-white font-medium text-lg px-16 py-6 rounded-none transition-all shadow-2xl hover:-translate-y-1 group tracking-[0.2em] uppercase">
              RESERVAR MINHA VAGA
              <ArrowRight className="inline-block ml-4 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-20 pt-10 border-t border-white/10 w-full"
          >
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#d4e137]" />
              <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Certificado MEC</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Microscope className="w-6 h-6 text-[#d4e137]" />
              <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Base Científica</span>
            </div>
            <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
              <Users className="w-6 h-6 text-[#d4e137]" />
              <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Mentoria VIP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
