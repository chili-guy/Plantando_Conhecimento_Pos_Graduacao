import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, CheckCircle2, Award, BookOpen, Users, 
  Microscope, Leaf, Scale, HeartHandshake, ChevronDown, 
  Clock, ShieldCheck 
} from "lucide-react";
import scienceImage from "@assets/generated_images/abstract_endocannabinoid_system_illustration.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Evolução</span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-gold uppercase tracking-tight">
              A medicina veterinária mudou — <br/> <span className="italic font-light opacity-80">e sua formação acompanhou essa evolução?</span>
            </h2>
            <div className="space-y-4 text-lg text-brand-gold/70 font-light">
              <p>
                Tutores mais exigentes buscam terapias que vão além do convencional. 
                Os casos clínicos tornam-se cada vez mais complexos e crônicos.
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  "Necessidade de terapias seguras e naturais",
                  "Abordagens baseadas em evidências científicas",
                  "Falta de formação aprofundada em Endocanabinologia"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                    <span className="text-brand-gold/90 font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-gold/10 -z-10 blur-xl"></div>
            <img 
              src="/cannabis-dog.png" 
              alt="Administração de cannabis medicinal em cão" 
              className="shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  const cards = [
    { icon: Microscope, title: "Ciência Aplicada", desc: "Protocolos baseados nas últimas pesquisas internacionais." },
    { icon: Users, title: "Prática Clínica Real", desc: "Discuta casos reais e aprenda a prescrever com segurança." },
    { icon: Scale, title: "Segurança Jurídica", desc: "Entenda a legislação e proteja sua atuação profissional." },
    { icon: Leaf, title: "Abordagem Integrativa", desc: "Una a medicina tradicional às novas terapias naturais." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block text-center">Propósito</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 uppercase tracking-tight text-brand-gold">
            Uma especialização para <br/> <span className="italic font-light opacity-80">quem busca a elite</span>
          </h2>
          <div className="w-20 h-[1px] bg-brand-gold/30 mx-auto"></div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="bg-brand-ivory p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-brand-gold/10 text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-brand-gold/5 rounded-full flex items-center justify-center mb-10 group-hover:bg-brand-gold group-hover:text-white transition-all duration-700">
                <card.icon className="w-6 h-6 text-brand-gold group-hover:text-brand-ivory transition-colors" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium mb-6 tracking-[0.1em] uppercase text-brand-gold">{card.title}</h3>
              <p className="text-brand-gold/70 font-light leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function WhatIsSection() {
  return (
    <section className="py-24 bg-brand-green text-brand-gold overflow-hidden relative border-y border-brand-gold/10">
      <div className="absolute inset-0 z-0 opacity-10 grayscale">
         <img src={scienceImage} alt="Sistema Endocanabinoide" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Fisiologia</span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6 uppercase tracking-tight">
              O que é o <br/><span className="italic font-light opacity-80 text-brand-gold-light">Sistema Endocanabinoide?</span>
            </h2>
            <p className="text-brand-gold/60 text-lg mb-8 leading-relaxed font-light">
              Descoberto há poucas décadas, é o maestro fisiológico do organismo. 
              Ele regula o equilíbrio (homeostase) de quase todos os sistemas do corpo animal.
            </p>
            <div className="space-y-4">
              <div className="flex gap-6 p-6 border border-brand-gold/10 bg-white/5 backdrop-blur-sm">
                <div className="w-[1px] h-auto bg-brand-gold/30"></div>
                <div>
                  <h4 className="font-medium text-brand-gold uppercase tracking-widest text-sm mb-2">Essencial para a Saúde</h4>
                  <p className="text-xs text-brand-gold/50 font-light tracking-wide">Sem ele, o corpo não responde adequadamente a doenças.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 border border-brand-gold/10 bg-white/5 backdrop-blur-sm">
                <div className="w-[1px] h-auto bg-brand-gold/30"></div>
                <div>
                  <h4 className="font-medium text-brand-gold uppercase tracking-widest text-sm mb-2">Uso Ético e Seguro</h4>
                  <p className="text-xs text-brand-gold/50 font-light tracking-wide">A cannabis medicinal atua diretamente nesses receptores para restaurar o equilíbrio.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function UniqueSection() {
  const features = [
    { title: "Pioneirismo Mundial", desc: "A 1ª Pós-graduação do mundo inteiramente dedicada à área." },
    { title: "Certificação MEC", desc: "Diploma reconhecido e válido em todo território nacional." },
    { title: "Mentoria Expert", desc: "Acompanhamento próximo com os maiores nomes da área." },
    { title: "Conteúdo Vivo", desc: "Atualizações constantes conforme a ciência avança." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Exclusividade</span>
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-gold uppercase tracking-tight">
            Por que esta pós-graduação é <br/> <span className="italic font-light opacity-80">única no mundo?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-none bg-brand-ivory border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-500 text-center flex flex-col items-center">
              <Award className="w-10 h-10 text-brand-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-medium mb-4 tracking-wide text-brand-gold uppercase">{f.title}</h3>
              <p className="text-brand-gold/70 font-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ModulesSection() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const modules = [
    {
      title: "Fundamentos da Endocanabinologia",
      desc: "Base científica do Sistema Endocanabinoide e seus componentes",
      duration: "40h",
      topics: [
        "História da Cannabis Medicinal",
        "Anatomia do Sistema Endocanabinoide",
        "Receptores e Ligantes",
        "Mecanismos de Ação"
      ]
    },
    {
      title: "Fitoquímica e Farmacologia",
      desc: "Compostos da Cannabis e suas propriedades terapêuticas",
      duration: "50h",
      topics: [
        "Fitocanabinoides: THC, CBD, CBG, CBN e outros",
        "Terpenos e efeito entourage",
        "Farmacocinética e farmacodinâmica",
        "Formas farmacêuticas e vias de administração",
        "Interações medicamentosas"
      ]
    },
    {
      title: "Aplicações Clínicas em Pequenos Animais",
      desc: "Protocolos terapêuticos para cães e gatos",
      duration: "60h",
      topics: [
        "Manejo da Dor Crônica",
        "Neurologia Veterinária",
        "Oncologia Integrativa",
        "Doenças Inflamatórias"
      ]
    },
    {
      title: "Casos Clínicos e Prática",
      desc: "Estudos de casos reais e discussões práticas",
      duration: "50h",
      topics: [
        "Discussão de Prontuários",
        "Acompanhamento de Pacientes",
        "Ajuste de Dosagens",
        "Manejo de Efeitos Adversos"
      ]
    },
    {
      title: "Aspectos Jurídicos e Éticos",
      desc: "Legislação, regulamentação e responsabilidade profissional",
      duration: "30h",
      topics: [
        "Legislação Brasileira Atual",
        "Ética na Prescrição",
        "Documentação Necessária",
        "Direito Veterinário"
      ]
    },
    {
      title: "Biotecnologia e Inovação",
      desc: "Avanços tecnológicos e futuro da área",
      duration: "40h",
      topics: [
        "Novas Tecnologias de Extração",
        "Nanoencapsulamento",
        "Futuro da Terapia Canabinoide",
        "Medicina de Precisão"
      ]
    },
    {
      title: "Desenvolvimento Profissional",
      desc: "Comunicação, marketing e responsabilidade social",
      duration: "30h",
      topics: [
        "Posicionamento de Mercado",
        "Comunicação com Tutores",
        "Marketing Ético",
        "Carreira na Endocanabinologia"
      ]
    }
  ];

  return (
    <section className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Conteúdo Programático</span>
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-brand-gold uppercase tracking-tight text-center">
            Grade Curricular <br/> <span className="italic font-light opacity-80">Completa e Atualizada</span>
          </h2>
          
          <div className="flex justify-center gap-8 md:gap-16 mt-8 py-6 border-y border-brand-gold/20 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl font-medium text-brand-gold tracking-widest">7</p>
              <p className="text-[10px] text-brand-gold/60 uppercase font-bold tracking-[0.2em]">Módulos</p>
            </div>
            <div className="w-px h-10 bg-brand-gold/10"></div>
            <div className="text-center">
              <p className="text-2xl font-medium text-brand-gold tracking-widest">300h</p>
              <p className="text-[10px] text-brand-gold/60 uppercase font-bold tracking-[0.2em]">Carga Horária</p>
            </div>
            <div className="w-px h-10 bg-brand-gold/10"></div>
            <div className="text-center">
              <p className="text-2xl font-medium text-brand-gold tracking-widest">12</p>
              <p className="text-[10px] text-brand-gold/60 uppercase font-bold tracking-[0.2em]">Meses</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((mod, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-none border transition-all duration-500 ${openModule === i ? 'border-brand-gold shadow-xl' : 'border-brand-gold/10 hover:border-brand-gold/30'}`}
            >
              <button 
                onClick={() => setOpenModule(openModule === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <div className="flex items-start gap-8">
                  <span className="text-3xl font-light text-brand-gold/30 font-heading italic">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-brand-gold tracking-tight uppercase">{mod.title}</h3>
                    <p className="text-sm text-brand-gold/50 font-light mt-1 tracking-wide">{mod.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[10px] text-brand-gold/60 border border-brand-gold/20 px-3 py-1 uppercase tracking-widest font-bold">
                    <Clock className="w-3 h-3" strokeWidth={3} />
                    {mod.duration}
                  </div>
                  <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-500 ${openModule === i ? 'rotate-180' : ''}`} strokeWidth={1} />
                </div>
              </button>
              
              <AnimatePresence>
                {openModule === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-20 pb-10">
                      <div className="h-[1px] bg-brand-gold/10 mb-8"></div>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {mod.topics.map((topic, j) => (
                          <div key={j} className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40"></div>
                            <span className="text-sm text-brand-gold/70 font-light tracking-wide">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <button className="px-12 py-6 bg-transparent border border-brand-gold text-brand-gold font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-gold hover:text-brand-ivory transition-all shadow-xl">
             Download Programa Completo PDF
           </button>
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section className="py-24 bg-white border-y border-brand-gold/10">
      <div className="container mx-auto px-4 md:px-6">
        <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block text-center">Jornada</span>
        <h2 className="text-3xl font-heading font-medium text-center mb-20 text-brand-gold uppercase tracking-tight">Metodologia <span className="italic font-light opacity-80">de Alto Impacto</span></h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-brand-gold/10 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { icon: BookOpen, title: "Aulas Online", desc: "Ao vivo e gravadas" },
              { icon: Users, title: "Mentoria", desc: "Encontros com experts" },
              { icon: Microscope, title: "Prática", desc: "Discussão de casos" },
              { icon: Award, title: "Certificação", desc: "Reconhecida pelo MEC" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white p-6">
                <div className="w-20 h-20 bg-brand-ivory border border-brand-gold/20 text-brand-gold flex items-center justify-center mb-6 shadow-xl ring-8 ring-white group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  <step.icon className="w-8 h-8" strokeWidth={1} />
                </div>
                <h3 className="text-sm font-medium mb-2 tracking-widest uppercase text-brand-gold">{step.title}</h3>
                <p className="text-xs text-brand-gold/50 font-light tracking-wide">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PartnersSection() {
  return (
    <section className="py-20 bg-brand-ivory border-b border-brand-gold/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-[10px] font-bold text-brand-gold/40 uppercase tracking-[0.5em] mb-12">Chancela e Credibilidade</p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-60 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0">
           <div className="text-xl font-heading font-light text-brand-gold tracking-[0.2em] uppercase flex items-center gap-4">
             <Leaf className="w-6 h-6" strokeWidth={1} />
             Plantando Conhecimento
           </div>
           <div className="text-xl font-heading font-medium text-brand-gold tracking-[0.2em] uppercase flex items-center gap-4 border-l border-brand-gold/20 pl-16">
             Anhanguera
           </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block text-center">Testemunhos</span>
        <h2 className="text-3xl font-heading font-medium text-center mb-20 text-brand-gold uppercase tracking-tight">Excelência <span className="italic font-light opacity-80">Reconhecida</span></h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-brand-ivory p-12 rounded-none border border-brand-gold/10 shadow-sm relative group hover:shadow-2xl transition-all duration-700">
              <div className="text-brand-gold/10 text-8xl font-serif absolute -top-4 -left-2 pointer-events-none italic">"</div>
              <p className="text-brand-gold/70 mb-10 italic font-light leading-relaxed relative z-10 text-sm">
                "Essa pós-graduação mudou completamente minha visão clínica. Hoje consigo tratar pacientes que antes eu considerava sem solução."
              </p>
              <div className="flex items-center gap-6 border-t border-brand-gold/10 pt-8">
                <div className="w-14 h-14 rounded-none bg-brand-gold/10 p-[1px] grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={`https://ui-avatars.com/api/?name=Vet+${i}&background=b89b5e&color=fff&rounded=false`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-brand-gold uppercase tracking-widest text-xs">Dra. Ana Souza</h4>
                  <p className="text-[10px] text-brand-gold/50 uppercase tracking-widest font-bold mt-1">Veterinária Integrativa</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GuaranteeSection() {
  return (
    <section className="py-24 bg-brand-ivory border-t border-brand-gold/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <ShieldCheck className="w-16 h-16 text-brand-gold mb-10 opacity-40" strokeWidth={1} />
        <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Segurança Incondicional</span>
        <h2 className="text-2xl font-medium mb-4 text-brand-gold uppercase tracking-widest">Compromisso com sua Satisfação</h2>
        <p className="text-brand-gold/60 max-w-xl mb-8 font-light leading-relaxed">
          Se você não sentir que este conteúdo é para você, devolvemos 100% do seu investimento dentro de 14 dias. Seu risco é zero.
        </p>
      </div>
    </section>
  );
}
