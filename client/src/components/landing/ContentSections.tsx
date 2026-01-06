import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, CheckCircle2, Award, BookOpen, Users, 
  Microscope, Leaf, Scale, HeartHandshake, ChevronDown, 
  Clock, ShieldCheck 
} from "lucide-react";
import scienceImage from "@assets/generated_images/abstract_endocannabinoid_system_illustration.png";
import { FloatingBubbles } from "./FloatingBubbles";

export function ProblemSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#032832] to-[#044F5F] text-white relative overflow-hidden">
      {/* CBD Molecules */}
      <FloatingBubbles count={6} color="rgba(248, 156, 34, 0.06)" />
      {/* Textured Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='30' cy='30' r='1' fill='%23ffffff' opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F89C22]/20 rounded-full blur-[80px]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              A medicina veterinária mudou — <span className="text-[#F89C22]">e sua formação acompanhou essa evolução?</span>
            </h2>
            <div className="space-y-4 text-lg text-white/80">
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
                    <CheckCircle2 className="w-5 h-5 text-[#F89C22]" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 flex justify-center md:justify-start">
              <button className="bg-gradient-to-r from-[#E75C23] to-[#F89C22] hover:from-[#F89C22] hover:to-[#E75C23] text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg flex items-center gap-2 mx-auto md:mx-0">
                Quero me especializar agora
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#F89C22]/20 rounded-2xl -z-10 blur-md"></div>
            <img 
              src="/cannabis-dog.png" 
              alt="Administração de cannabis medicinal em cão" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
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
    <section className="py-32 bg-gradient-to-b from-white to-[#f8f9fa] relative overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23032832' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[#E75C23] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Propósito</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 uppercase tracking-tight text-[#032832]">
            Uma especialização para <br/> <span className="text-[#F89C22] italic font-light">quem busca a elite</span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#E75C23] to-[#F89C22] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {cards.map((card, i) => (
            <div 
              key={i}
              className="bg-white p-12 shadow-[0_4px_30px_rgba(3,40,50,0.08)] border border-[#044F5F]/10 text-center flex flex-col items-center group hover:shadow-[0_8px_40px_rgba(231,92,35,0.15)] transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#E75C23]/10 to-[#F89C22]/10 rounded-full flex items-center justify-center mb-10 group-hover:bg-gradient-to-br group-hover:from-[#E75C23] group-hover:to-[#F89C22] group-hover:text-white transition-all duration-200">
                <card.icon className="w-6 h-6 text-[#E75C23] group-hover:text-white transition-[color] duration-200" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium mb-6 tracking-[0.1em] uppercase text-[#032832]">{card.title}</h3>
              <p className="text-[#044F5F]/70 font-light leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 flex justify-center">
          <button className="bg-gradient-to-r from-[#E75C23] to-[#F89C22] hover:from-[#F89C22] hover:to-[#E75C23] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-200 shadow-xl flex items-center gap-2 mx-auto">
            Ver todos os diferenciais
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function WhatIsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#032832] to-[#044F5F] relative overflow-hidden">
      {/* Floating Bubbles */}
      <FloatingBubbles count={15} color="rgba(248, 156, 34, 0.1)" />
      {/* Background Texture & Depth - Restoration of the previous background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src={scienceImage} alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#032832]/80 via-transparent to-[#044F5F]/80 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            
            {/* Left Content */}
            <div className="max-w-3xl space-y-10">
              <div>
                <span className="text-[#F89C22] text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Conhecimento Fundamental</span>
                <h2 className="text-4xl md:text-6xl font-heading font-medium text-white leading-tight">
                  O Maestro <br/> <span className="text-[#F89C22] italic font-light">da Homeostase Animal</span>
                </h2>
              </div>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl border-l-2 border-[#F89C22]/30 pl-8">
                O Sistema Endocanabinoide é o principal sistema regulador do organismo. 
                Ele atua como um maestro, garantindo que todos os outros sistemas trabalhem em perfeita harmonia.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "Equilíbrio Sistêmico", 
                    desc: "Regula dor, inflamação, humor e apetite em todos os vertebrados." 
                  },
                  { 
                    title: "Medicina de Precisão", 
                    desc: "Permite intervenções terapêuticas direcionadas e altamente eficazes." 
                  }
                ].map((item, i) => (
                  <div key={i} className="group p-8 bg-white/5 border border-white/10 hover:border-[#F89C22]/50 transition-[border-color] duration-200">
                    <div className="w-8 h-[1px] bg-[#F89C22] mb-6 group-hover:w-full transition-[width] duration-200"></div>
                    <h4 className="text-[#F89C22] font-bold text-xs uppercase tracking-widest mb-3">{item.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12 flex justify-center">
                <button className="bg-gradient-to-r from-[#E75C23] to-[#F89C22] hover:from-[#F89C22] hover:to-[#E75C23] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-200 shadow-xl flex items-center gap-2 mx-auto">
                  Entender melhor o sistema
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
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
    <section className="py-24 bg-gradient-to-b from-[#f8f9fa] to-white relative overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid2' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23032832' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid2)'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#032832]">
            Por que esta pós-graduação é <span className="text-[#E75C23]">única no mundo?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-12 shadow-[0_4px_30px_rgba(3,40,50,0.08)] border border-[#044F5F]/10 text-center flex flex-col items-center group hover:shadow-[0_8px_40px_rgba(231,92,35,0.15)] transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E75C23]/10 to-[#F89C22]/10 rounded-full flex items-center justify-center mb-10 group-hover:bg-gradient-to-br group-hover:from-[#E75C23] group-hover:to-[#F89C22] group-hover:text-white transition-all duration-200">
                <Award className="w-6 h-6 text-[#E75C23] group-hover:text-white transition-[color] duration-200" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium mb-6 tracking-[0.1em] uppercase text-[#032832]">{f.title}</h3>
              <p className="text-[#044F5F]/70 font-light leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 flex justify-center">
          <button className="bg-gradient-to-r from-[#E75C23] to-[#F89C22] hover:from-[#F89C22] hover:to-[#E75C23] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-200 shadow-xl flex items-center gap-2 mx-auto">
            Ver todas as vantagens
            <ArrowRight className="w-5 h-5" />
          </button>
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
    <section className="py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-[#E75C23] font-bold tracking-wider uppercase text-sm">Conteúdo Programático</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 text-[#032832]">
            Grade Curricular <br/> <span className="text-[#E75C23]">Completa e Atualizada</span>
          </h2>
          
          <div className="flex justify-center gap-8 md:gap-16 mt-8 py-6 border-y border-border max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#E75C23]">7</p>
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
              className={`group bg-white rounded-xl border transition-[border-color,box-shadow] duration-150 ${openModule === i ? 'border-primary ring-1 ring-primary/20 shadow-lg' : 'border-border hover:border-primary/50 shadow-sm'}`}
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
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-150">{mod.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{mod.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    <Clock className="w-3.5 h-3.5" />
                    {mod.duration}
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-150 ${openModule === i ? 'rotate-180 text-primary' : ''}`} />
                </div>
              </button>
              
              <AnimatePresence mode="wait">
                {openModule === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.15,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    style={{ willChange: 'height, opacity' }}
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
        
        <div className="mt-12 text-center flex justify-center">
           <button className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#E75C23] to-[#F89C22] hover:from-[#F89C22] hover:to-[#E75C23] text-white font-bold rounded-lg transition-all duration-200 shadow-xl flex items-center gap-2 mx-auto">
             Quero o conteúdo completo em PDF
             <ArrowRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#044F5F] to-[#032832] text-white relative overflow-hidden">
      {/* CBD Molecules */}
      <FloatingBubbles count={6} color="rgba(248, 156, 34, 0.06)" />
      {/* Textured Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots2' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='30' cy='30' r='1' fill='%23ffffff' opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots2)'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F89C22]/20 rounded-full blur-[80px]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-heading font-bold text-center mb-16 text-white">Como funciona sua jornada</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: BookOpen, title: "Aulas Online", desc: "Ao vivo e gravadas" },
            { icon: Users, title: "Mentoria", desc: "Encontros com experts" },
            { icon: Microscope, title: "Prática", desc: "Discussão de casos" },
            { icon: Award, title: "Certificação", desc: "Reconhecida pelo MEC" }
          ].map((step, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-12 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-white/20 text-center flex flex-col items-center group hover:bg-white/20 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E75C23]/20 to-[#F89C22]/20 rounded-full flex items-center justify-center mb-10 group-hover:bg-gradient-to-br group-hover:from-[#E75C23] group-hover:to-[#F89C22] group-hover:text-white transition-all duration-200">
                <step.icon className="w-6 h-6 text-[#F89C22] group-hover:text-white transition-[color] duration-200" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-medium mb-6 tracking-[0.1em] uppercase text-white">{step.title}</h3>
              <p className="text-white/80 font-light leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 flex justify-center">
          <button className="bg-gradient-to-r from-[#E75C23] to-[#F89C22] hover:from-[#F89C22] hover:to-[#E75C23] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-200 shadow-xl flex items-center gap-2 mx-auto">
            Iniciar minha jornada agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

import anhangueraLogo from "@assets/image_1767725302166.png";
import plantandoLogo from "@assets/image-removebg-preview_1767725759434.png";

export function PartnersSection() {
  return (
    <section className="py-24 bg-brand-ivory/50 border-y border-brand-gold/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-12 block">Instituições Responsáveis</span>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 opacity-80">
           <div className="flex flex-col items-center gap-4">
             <img src={plantandoLogo} alt="Plantando Conhecimento" className="h-20 w-auto object-contain" />
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
          <div className="flex items-center gap-8 brightness-200 opacity-70">
            <img src={anhangueraLogo} alt="Anhanguera" className="h-10 w-auto" />
            <div className="w-[1px] h-6 bg-brand-gold/30"></div>
            <img src={plantandoLogo} alt="Plantando Conhecimento" className="h-10 w-auto" />
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
    <section className="py-24 bg-gradient-to-b from-white to-[#f8f9fa] relative overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid3' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23032832' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid3)'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-heading font-bold text-center mb-16 text-[#032832]">Quem já está transformando a carreira</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-12 shadow-[0_4px_30px_rgba(3,40,50,0.08)] border border-[#044F5F]/10 text-center flex flex-col items-center group hover:shadow-[0_8px_40px_rgba(231,92,35,0.15)] transition-all duration-200">
              <p className="text-[#044F5F]/70 mb-8 italic font-light leading-relaxed text-sm">
                Essa pós-graduação mudou completamente minha visão clínica. Hoje consigo tratar pacientes que antes eu considerava sem solução.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src={`https://ui-avatars.com/api/?name=Vet+${i}&background=0D1117&color=fff`} alt="Avatar" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-[#032832]">Dra. Ana Souza</h4>
                  <p className="text-xs text-[#044F5F]/60">Veterinária Integrativa</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 flex justify-center">
          <button className="bg-gradient-to-r from-[#E75C23] to-[#F89C22] hover:from-[#F89C22] hover:to-[#E75C23] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-200 shadow-xl flex items-center gap-2 mx-auto">
            Quero fazer parte deste time
            <ArrowRight className="w-5 h-5" />
          </button>
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
