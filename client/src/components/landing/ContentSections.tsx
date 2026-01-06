import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, CheckCircle2, Award, BookOpen, Users, 
  Microscope, Leaf, Scale, HeartHandshake, ChevronDown, 
  Clock, ShieldCheck 
} from "lucide-react";
import problemImage from "@assets/generated_images/veterinarian_examining_a_dog_in_modern_clinic.png";
import scienceImage from "@assets/generated_images/abstract_endocannabinoid_system_illustration.png";

// Animation variants
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              A medicina veterinária mudou — <span className="text-primary">e sua formação acompanhou essa evolução?</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
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
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{item}</span>
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
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl -z-10 blur-xl"></div>
            <img 
              src="/cannabis-dog.png" 
              alt="Administração de cannabis medicinal em cão" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
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
          <span className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Propósito</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 uppercase tracking-tight">
            Uma especialização para <br/> <span className="text-brand-gold italic font-light">quem busca a elite</span>
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
              <h3 className="text-lg font-medium mb-6 tracking-[0.1em] uppercase">{card.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function WhatIsSection() {
  return (
    <section className="py-24 bg-foreground text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20">
         <img src={scienceImage} alt="Sistema Endocanabinoide" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              O que é o <span className="text-accent">Sistema Endocanabinoide?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Descoberto há poucas décadas, é o maestro fisiológico do organismo. 
              Ele regula o equilíbrio (homeostase) de quase todos os sistemas do corpo animal, 
              desde o controle da dor e inflamação até o humor e apetite.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-1 h-full bg-accent rounded-full"></div>
                <div>
                  <h4 className="font-bold text-accent mb-1">Essencial para a Saúde</h4>
                  <p className="text-sm text-gray-300">Sem ele, o corpo não responde adequadamente a doenças.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-1 h-full bg-accent rounded-full"></div>
                <div>
                  <h4 className="font-bold text-accent mb-1">Uso Ético e Seguro</h4>
                  <p className="text-sm text-gray-300">A cannabis medicinal atua diretamente nesses receptores para restaurar o equilíbrio.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:block">
          </div>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Por que esta pós-graduação é <span className="text-primary">única no mundo?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-muted/20 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
              <Award className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Conteúdo Programático</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Grade Curricular <br/> <span className="text-primary">Completa e Atualizada</span>
          </h2>
          
          <div className="flex justify-center gap-8 md:gap-16 mt-8 py-6 border-y border-border max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">7</p>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Módulos</p>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">300h</p>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Carga Horária</p>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Meses</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((mod, i) => (
            <div 
              key={i} 
              className={`group bg-white rounded-xl border transition-all duration-300 ${openModule === i ? 'border-primary ring-1 ring-primary/20 shadow-lg' : 'border-border hover:border-primary/50 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenModule(openModule === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-start gap-6">
                  <span className="text-2xl font-bold text-accent/40 font-heading">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{mod.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{mod.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    <Clock className="w-3.5 h-3.5" />
                    {mod.duration}
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openModule === i ? 'rotate-180 text-primary' : ''}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openModule === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-16 pb-8">
                      <div className="h-px bg-border mb-6"></div>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                        {mod.topics.map((topic, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{topic}</span>
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
        
        <div className="mt-12 text-center">
           <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
             Quero o conteúdo completo em PDF
           </button>
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section className="py-24 bg-white border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-heading font-bold text-center mb-16">Como funciona sua jornada</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: BookOpen, title: "Aulas Online", desc: "Ao vivo e gravadas" },
              { icon: Users, title: "Mentoria", desc: "Encontros com experts" },
              { icon: Microscope, title: "Prática", desc: "Discussão de casos" },
              { icon: Award, title: "Certificação", desc: "Reconhecida pelo MEC" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white p-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-lg ring-4 ring-white">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import anhangueraLogo from "@assets/image_1767725302166.png";
import plantandoLogo from "@assets/image_1767725634656.png";

export function PartnersSection() {
  return (
    <section className="py-24 bg-brand-ivory/50 border-y border-brand-gold/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-12 block">Instituições Responsáveis</span>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex flex-col items-center gap-4">
             <img src={plantandoLogo} alt="Plantando Conhecimento" className="h-20 w-auto object-contain mix-blend-multiply" />
             <span className="text-[10px] text-brand-gold/60 uppercase tracking-widest">Realização</span>
           </div>
           <div className="hidden md:block w-px h-16 bg-brand-gold/10"></div>
           <div className="flex flex-col items-center gap-4">
             <img src={anhangueraLogo} alt="Universidade Anhanguera" className="h-16 w-auto object-contain" />
             <span className="text-[10px] text-brand-gold/60 uppercase tracking-widest">Certificação Acadêmica</span>
           </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-24 bg-brand-green text-brand-ivory">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-brand-gold/10 pb-16 mb-12">
          <div className="flex items-center gap-8 grayscale brightness-200 opacity-70">
            <img src={anhangueraLogo} alt="Anhanguera" className="h-10 w-auto" />
            <div className="w-[1px] h-6 bg-brand-gold/30"></div>
            <img src={plantandoLogo} alt="Plantando Conhecimento" className="h-10 w-auto mix-blend-multiply" />
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold/60">
            <a href="#" className="hover:text-brand-gold transition-colors">Termos</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="text-center text-[10px] uppercase tracking-[0.3em] text-brand-gold/40 leading-relaxed">
          © 2026 World's First Veterinary Endocannabinology Post-Graduation. <br/>
          Todos os direitos reservados. Design de Alta Performance.
        </div>
      </div>
    </footer>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-heading font-bold text-center mb-16">Quem já está transformando a carreira</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm relative">
              <div className="text-primary text-4xl font-serif absolute top-6 right-6">"</div>
              <p className="text-muted-foreground mb-6 italic">
                "Essa pós-graduação mudou completamente minha visão clínica. Hoje consigo tratar pacientes que antes eu considerava sem solução."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src={`https://ui-avatars.com/api/?name=Vet+${i}&background=0D1117&color=fff`} alt="Avatar" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Dra. Ana Souza</h4>
                  <p className="text-xs text-muted-foreground">Veterinária Integrativa</p>
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
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <ShieldCheck className="w-16 h-16 text-primary mb-6" />
        <h2 className="text-2xl font-bold mb-2">Garantia Incondicional de 14 Dias</h2>
        <p className="text-muted-foreground max-w-lg mb-8">
          Se você não sentir que este conteúdo é para você, devolvemos 100% do seu investimento. Seu risco é zero.
        </p>
      </div>
    </section>
  );
}
