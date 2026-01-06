import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function InvestmentSection() {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Invista na sua carreira e <span className="text-accent">lidere o mercado</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Faça parte do grupo seleto de profissionais capacitados para prescrever com segurança e eficácia.
            </p>
            <ul className="space-y-4 mt-6">
              {[
                "Acesso completo por 12 meses",
                "Certificado reconhecido pelo MEC",
                "Comunidade exclusiva de alunos",
                "Bônus: Masterclass de Gestão"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-foreground p-8 rounded-2xl shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-foreground font-bold px-4 py-1 rounded-full text-sm shadow-lg">
              Vagas Limitadas
            </div>
            
            <div className="text-center space-y-2 mb-8 mt-4">
              <p className="text-muted-foreground line-through text-sm">de R$ 14.997,00</p>
              <div className="text-5xl font-bold font-heading text-primary">
                <span className="text-2xl align-top mr-1">12x</span>
                987
                <span className="text-2xl">,00</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">ou R$ 9.997,00 à vista</p>
            </div>

            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl text-lg transition-[background-color] duration-200 shadow-lg shadow-primary/30">
              Garantir minha vaga agora
            </button>
            
            <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Compra 100% segura
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
