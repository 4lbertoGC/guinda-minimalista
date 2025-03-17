
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Especialidades = () => {
  const navigate = useNavigate();
  
  const especialidades = [
    {
      id: "informatica",
      nombre: "Técnico en Informática",
      descripcion: "Formación en desarrollo de software, redes y sistemas computacionales.",
      perfil: [
        "Interés por la tecnología y la computación",
        "Capacidad de análisis y resolución de problemas",
        "Habilidades lógico-matemáticas",
        "Creatividad e innovación",
      ],
      carrerasSuperior: [
        "Ingeniería en Sistemas Computacionales",
        "Ingeniería en Informática",
        "Ciencias de la Computación",
        "Ingeniería en Software",
      ],
      campoLaboral: [
        "Desarrollo de aplicaciones web y móviles",
        "Administración de sistemas y redes",
        "Soporte técnico y mantenimiento",
        "Análisis de datos",
      ],
    },
    {
      id: "administracion",
      nombre: "Técnico en Administración",
      descripcion: "Formación en gestión de recursos humanos, materiales y financieros.",
      perfil: [
        "Habilidades de organización y planeación",
        "Capacidad de liderazgo",
        "Facilidad para trabajo en equipo",
        "Aptitudes para la comunicación",
      ],
      carrerasSuperior: [
        "Licenciatura en Administración",
        "Licenciatura en Administración de Empresas",
        "Licenciatura en Gestión Empresarial",
        "Licenciatura en Recursos Humanos",
      ],
      campoLaboral: [
        "Gestión de recursos humanos",
        "Administración financiera",
        "Logística y operaciones",
        "Emprendimiento y gestión de negocios",
      ],
    },
    {
      id: "contaduria",
      nombre: "Técnico en Contaduría",
      descripcion: "Formación en control financiero, contabilidad y auditoría.",
      perfil: [
        "Aptitud para los números y cálculos",
        "Meticulosidad y atención al detalle",
        "Interés por temas económicos y financieros",
        "Capacidad para el análisis de información",
      ],
      carrerasSuperior: [
        "Licenciatura en Contaduría Pública",
        "Licenciatura en Finanzas",
        "Licenciatura en Economía",
        "Licenciatura en Auditoría",
      ],
      campoLaboral: [
        "Contabilidad general y de costos",
        "Auditoría interna y externa",
        "Asesoría fiscal",
        "Análisis financiero",
      ],
    },
    {
      id: "mercadotecnia",
      nombre: "Técnico en Mercadotecnia Digital",
      descripcion: "Formación en estrategias de marketing en entornos digitales.",
      perfil: [
        "Creatividad y pensamiento innovador",
        "Interés por tendencias digitales",
        "Habilidades de comunicación y persuasión",
        "Capacidad para análisis de mercado",
      ],
      carrerasSuperior: [
        "Licenciatura en Mercadotecnia",
        "Licenciatura en Publicidad",
        "Licenciatura en Comunicación",
        "Licenciatura en Comercio Electrónico",
      ],
      campoLaboral: [
        "Marketing digital y redes sociales",
        "Comercio electrónico",
        "Análisis de datos y marketing",
        "Publicidad digital y branding",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-guinda">
              Especialidades
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl">
              Conoce a detalle cada una de las carreras técnicas disponibles.
            </p>
          </div>

          <Tabs defaultValue="informatica" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted mb-8">
              <TabsTrigger value="informatica" className="data-[state=active]:bg-guinda data-[state=active]:text-white">
                Informática
              </TabsTrigger>
              <TabsTrigger value="administracion" className="data-[state=active]:bg-guinda data-[state=active]:text-white">
                Administración
              </TabsTrigger>
              <TabsTrigger value="contaduria" className="data-[state=active]:bg-guinda data-[state=active]:text-white">
                Contaduría
              </TabsTrigger>
              <TabsTrigger value="mercadotecnia" className="data-[state=active]:bg-guinda data-[state=active]:text-white">
                Mercadotecnia
              </TabsTrigger>
            </TabsList>
            
            {especialidades.map((especialidad) => (
              <TabsContent key={especialidad.id} value={especialidad.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-card border-guinda/50">
                    <CardHeader>
                      <CardTitle className="text-guinda">Perfil de Ingreso</CardTitle>
                      <CardDescription>Capacidades y habilidades requeridas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {especialidad.perfil.map((item, index) => (
                          <li key={index} className="text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card border-guinda/50">
                    <CardHeader>
                      <CardTitle className="text-guinda">Carreras de Nivel Superior</CardTitle>
                      <CardDescription>Opciones para continuar tus estudios</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {especialidad.carrerasSuperior.map((item, index) => (
                          <li key={index} className="text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card border-guinda/50">
                    <CardHeader>
                      <CardTitle className="text-guinda">Campo Laboral</CardTitle>
                      <CardDescription>Oportunidades de desarrollo profesional</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {especialidad.campoLaboral.map((item, index) => (
                          <li key={index} className="text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button 
                    className="bg-guinda hover:bg-guinda-dark text-white"
                    onClick={() => navigate("/registro")}
                  >
                    Elegir esta especialidad
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Especialidades;
