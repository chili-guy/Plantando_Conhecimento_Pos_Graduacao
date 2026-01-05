import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/modern_luxury_office_reception_desk.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Recepção de Escritório Moderno" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Inscrições abertas para a Turma 2026
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            A nova era da <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              medicina veterinária
            </span> <br/>
            já começou.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Conheça a 1ª Pós-graduação em Endocanabinologia Veterinária do mundo e esteja entre os profissionais que lideram o futuro da prática clínica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1">
              Quero fazer parte da nova era
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
