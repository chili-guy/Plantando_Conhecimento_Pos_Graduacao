import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-[#062d2d] overflow-hidden">
      {/* Background Image - Using the provided image directly */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-image.png" 
          alt="Veterinária e Animais" 
          className="w-full h-full object-cover object-center md:object-right"
        />
        {/* Subtle overlay to ensure text readability if needed, though the image already has it */}
        <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#d4e137] leading-tight mb-6">
              Pronto para a nova era <br/>
              da medicina <br/>
              veterinária?
            </h1>
            
            <div className="space-y-1 mb-10">
              <p className="text-xl md:text-2xl text-white font-medium">
                Conheça a 1ª
              </p>
              <p className="text-lg md:text-xl text-white/90">
                Pós-graduação em Endocanabinologia <br/> do mundo.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <button className="w-fit bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-lg px-10 py-4 rounded-full transition-all shadow-lg hover:-translate-y-1 uppercase tracking-wide">
                Quero aprender
              </button>
              
              {/* Logos and verification from reference */}
              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col items-center">
                   <div className="text-[10px] text-white/60 uppercase font-bold mb-1">Parceiros</div>
                   <div className="flex items-center gap-4 grayscale brightness-200 opacity-70">
                      <div className="h-8 w-px bg-white/20"></div>
                      <span className="text-white font-bold text-xs">Plantando Conhecimento</span>
                      <div className="h-8 w-px bg-white/20"></div>
                      <span className="text-white font-bold text-xs">Anhanguera</span>
                   </div>
                </div>
                <div className="flex items-center gap-2 border border-white/30 rounded-full px-3 py-1 bg-white/5">
                   <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-[8px] font-bold text-white text-center leading-none">
                     REC. <br/> MEC
                   </div>
                   <span className="text-[10px] text-white font-bold uppercase">Reconhecida <br/> pelo MEC</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            {/* Image is handled by the absolute background */}
          </div>
        </div>
      </div>
    </section>
  );
}
