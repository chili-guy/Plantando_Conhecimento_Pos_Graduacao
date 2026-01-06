import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function InvestmentSection() {
  return (
    <section className="py-24 bg-brand-green relative overflow-hidden text-brand-gold">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase block">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium leading-[1.1] uppercase tracking-tight">
              Invista na sua carreira e <br/> <span className="italic font-light opacity-80">lidere o mercado</span>
            </h2>
            <p className="text-brand-gold/60 text-lg font-light leading-relaxed">
              Faça parte do grupo seleto de profissionais capacitados para prescrever com segurança e eficácia.
            </p>
            <ul className="space-y-4 mt-8">
              {[
                "Acesso completo por 12 meses",
                "Certificado reconhecido pelo MEC",
                "Comunidade exclusiva de alunos",
                "Bônus: Masterclass de Gestão"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-none border border-brand-gold/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-brand-gold" />
                  </div>
                  <span className="text-brand-gold/80 font-light tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-ivory text-brand-green p-12 rounded-none shadow-2xl relative border border-brand-gold/20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-ivory font-bold px-6 py-2 rounded-none text-[10px] tracking-[0.3em] uppercase shadow-lg">
              Vagas Limitadas
            </div>
            
            <div className="text-center space-y-4 mb-10 mt-4">
              <p className="text-brand-gold/60 line-through text-xs tracking-widest">de R$ 14.997,00</p>
              <div className="text-6xl font-medium font-heading text-brand-gold tracking-tighter">
                <span className="text-2xl align-top mr-1 font-light tracking-normal italic">12x</span>
                987
                <span className="text-2xl font-light">,00</span>
              </div>
              <p className="text-xs text-brand-gold/70 font-medium tracking-widest uppercase">ou R$ 9.997,00 à vista</p>
            </div>

            <button className="w-full bg-brand-gold hover:bg-[#a68a4d] text-brand-ivory font-bold py-6 px-8 rounded-none text-xs tracking-[0.25em] transition-all shadow-xl hover:-translate-y-1 uppercase">
              Garantir minha vaga agora
            </button>
            
            <p className="text-center text-[10px] text-brand-gold/40 mt-6 flex items-center justify-center gap-3 uppercase tracking-[0.2em]">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30"></div>
              Compra 100% segura
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
