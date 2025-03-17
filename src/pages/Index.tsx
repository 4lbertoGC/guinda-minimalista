
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-guinda-gradient">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Elección de Carrera Técnica
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Sistema para la selección de especialidad de los alumnos de segundo semestre del CECyT 12 JMM.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button 
                  className="bg-white text-guinda hover:bg-gray-200"
                  onClick={() => navigate("/especialidades")}
                >
                  Ver Especialidades
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigate("/registro")}
                >
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-guinda">
                Opciones Disponibles
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl">
                Conoce las carreras técnicas que puedes elegir para tu formación académica.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
                <div className="flex flex-col items-center gap-2 rounded-lg border border-guinda p-6 hover:bg-guinda/5 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-guinda/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-guinda"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Informática</h3>
                  <p className="text-sm text-gray-400">
                    Desarrollo de software, redes y sistemas computacionales.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-guinda p-6 hover:bg-guinda/5 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-guinda/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-guinda"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Administración</h3>
                  <p className="text-sm text-gray-400">
                    Gestión de recursos humanos, materiales y financieros.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-guinda p-6 hover:bg-guinda/5 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-guinda/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-guinda"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                      <path d="M12 11v6" />
                      <path d="M9 14h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Contaduría</h3>
                  <p className="text-sm text-gray-400">
                    Control financiero, contabilidad y auditoría.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-guinda p-6 hover:bg-guinda/5 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-guinda/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-guinda"
                    >
                      <path d="m7 11 2-2-2-2" />
                      <path d="M11 13h4" />
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Mercadotecnia Digital</h3>
                  <p className="text-sm text-gray-400">
                    Estrategias de marketing en entornos digitales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
