import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Não seja apenas mais um <br/><span className="text-gray-400">prescritor.</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Torne-se um médico veterinário endocanabinologista e lidere o futuro da profissão.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
             <button className="flex items-center gap-2 bg-accent text-foreground font-bold px-8 py-4 rounded-full hover:bg-accent/90 transition-colors">
               Quero entrar para a próxima turma
               <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Pós-graduação Endocanabinologia. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
