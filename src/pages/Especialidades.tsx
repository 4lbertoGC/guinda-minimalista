
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown } from "lucide-react";

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
      tirasMaterias: [
        {
          tipo: "Escolarizada",
          imagen: "/lovable-uploads/882e3640-ef53-4b28-ba6a-c720fc496c5a.png",
          materiasPorNivel: {
            "1er Nivel": ["Álgebra", "Filosofía I", "Computación Básica I", "Inglés I", "Expresión Oral y Escrita I", "Desarrollo de Habilidades del Pensamiento", "Historia de México Contemporáneo I", "Desarrollo Personal"],
            "2do Nivel": ["Geometría y Trigonometría", "Filosofía II", "Computación Básica II", "Inglés II", "Expresión Oral y Escrita II", "Biología Básica", "Historia de México Contemporáneo II", "Orientación Juvenil y Profesional II"],
            "3er Nivel": ["Geometría Analítica", "Física I", "Química I", "Inglés III", "Comunicación Científica", "Contabilidad I", "Entorno Socioeconómico de México", "Cálculos Financieros I"],
            "4to Nivel": ["Cálculo Diferencial", "Física II", "Química II", "Inglés IV", "Derecho", "Contabilidad II", "Cálculos Financieros II", "Programación Orientada a Objetos"],
            "5to Nivel": ["Cálculo Integral", "Microeconomía", "Inglés V", "Derecho Mercantil", "Contabilidad III", "Orientación Juvenil y Profesional III", "Programación de Dispositivos Móviles", "Base de Datos"],
            "6to Nivel": ["Probabilidad y Estadística", "Macroeconomía", "Inglés VI", "Orientación Juvenil y Profesional IV", "Producción Multimedia y Ambientes Virtuales", "Desarrollo Web", "Programación Avanzada", "Opción Curricular de Titulación"],
          }
        },
        {
          tipo: "No Escolarizada",
          imagen: "/lovable-uploads/7f7beb9e-a254-4737-bd41-fad0f1fbe272.png",
          materiasPorNivel: {
            "1er Nivel": ["Álgebra", "Filosofía I", "Computación Básica I", "Inglés I", "Expresión Oral y Escrita I", "Desarrollo de Habilidades del Pensamiento", "Historia de México Contemporáneo I", "Desarrollo Personal"],
            "2do Nivel": ["Geometría y Trigonometría", "Filosofía II", "Computación Básica II", "Inglés II", "Expresión Oral y Escrita II", "Biología Básica", "Historia de México Contemporáneo II", "Orientación Juvenil y Profesional II"],
            "3er Nivel": ["Geometría Analítica", "Física I", "Química I", "Inglés III", "Comunicación Científica", "Contabilidad I", "Entorno Socioeconómico de México", "Cálculos Financieros I"],
            "4to Nivel": ["Cálculo Diferencial", "Física II", "Química II", "Inglés IV", "Derecho", "Contabilidad II", "Cálculos Financieros II", "Programación Estructurada"],
            "5to Nivel": ["Cálculo Integral", "Microeconomía", "Inglés V", "Derecho Mercantil", "Contabilidad III", "Orientación Juvenil y Profesional III", "Administración Orientada a Objetos", "Base de Datos"],
            "6to Nivel": ["Probabilidad y Estadística", "Macroeconomía", "Inglés VI", "Orientación Juvenil y Profesional IV", "Programación Avanzada", "Desarrollo Web y Multimedia", "Teleinformática", "Optativa 4"],
          }
        }
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
      tirasMaterias: [
        {
          tipo: "Escolarizada",
          imagen: "/lovable-uploads/8a86864b-75ce-4164-b64f-e88cc87826cd.png",
          materiasPorNivel: {
            "1er Nivel": ["Álgebra", "Filosofía I", "Computación Básica I", "Inglés I", "Expresión Oral y Escrita I", "Desarrollo de Habilidades del Pensamiento", "Historia de México Contemporáneo I", "Desarrollo Personal"],
            "2do Nivel": ["Geometría y Trigonometría", "Filosofía II", "Computación Básica II", "Inglés II", "Expresión Oral y Escrita II", "Biología Básica", "Historia de México Contemporáneo II", "Orientación Juvenil y Profesional II"],
            "3er Nivel": ["Geometría Analítica", "Física I", "Química I", "Inglés III", "Comunicación Científica", "Contabilidad I", "Entorno Socioeconómico de México", "Cálculos Financieros I"],
            "4to Nivel": ["Cálculo Diferencial", "Física II", "Química II", "Inglés IV", "Derecho", "Contabilidad II", "Cálculos Financieros II", "Administración de Capital Humano"],
            "5to Nivel": ["Cálculo Integral", "Microeconomía", "Inglés V", "Derecho Mercantil", "Contabilidad III", "Administración de Sueldos y Salarios", "Diseño Organizacional", "Mercadotecnia Digital"],
            "6to Nivel": ["Probabilidad y Estadística", "Macroeconomía", "Inglés VI", "Orientación Juvenil y Profesional IV", "Plan de Negocios (Opción Curricular de Titulación)", "Sistemas de Calidad", "Nociones de Finanzas", "Paquetería Administrativa"],
          }
        }
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
      tirasMaterias: [
        {
          tipo: "Escolarizada",
          imagen: "/lovable-uploads/7fabe578-e107-413a-bbb4-78f3476f0f52.png",
          materiasPorNivel: {
            "1er Nivel": ["Álgebra", "Filosofía I", "Computación Básica I", "Inglés I", "Expresión Oral y Escrita I", "Desarrollo de Habilidades del Pensamiento", "Historia de México Contemporáneo I", "Desarrollo Personal"],
            "2do Nivel": ["Geometría y Trigonometría", "Filosofía II", "Computación Básica II", "Inglés II", "Expresión Oral y Escrita II", "Biología Básica", "Historia de México Contemporáneo II", "Orientación Juvenil y Profesional II"],
            "3er Nivel": ["Geometría Analítica", "Física I", "Química I", "Inglés III", "Comunicación Científica", "Contabilidad I", "Entorno Socioeconómico de México", "Cálculos Financieros I"],
            "4to Nivel": ["Cálculo Diferencial", "Física II", "Química II", "Inglés IV", "Derecho", "Contabilidad II", "Cálculos Financieros II", "Legislación Fiscal Personas Físicas"],
            "5to Nivel": ["Cálculo Integral", "Microeconomía", "Inglés V", "Derecho Mercantil", "Contabilidad III", "Legislación Fiscal Personas Morales", "Nociones de Finanzas", "Nociones de Auditoría"],
            "6to Nivel": ["Probabilidad y Estadística", "Macroeconomía", "Inglés VI", "Seguridad Social", "Nóminas", "Desarrollo de Proyectos de Investigación (Opción Curricular de Titulación)", "Paquetería Contable", "Contabilidad de Costos"],
          }
        }
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
      tirasMaterias: [
        {
          tipo: "Escolarizada",
          imagen: "/lovable-uploads/5e0b68ba-f58b-4016-9490-6f2914e6a94f.png",
          materiasPorNivel: {
            "1er Nivel": ["Álgebra", "Filosofía I", "Computación Básica I", "Inglés I", "Expresión Oral y Escrita I", "Desarrollo de Habilidades del Pensamiento", "Historia de México Contemporáneo I", "Desarrollo Personal"],
            "2do Nivel": ["Geometría y Trigonometría", "Filosofía II", "Computación Básica II", "Inglés II", "Expresión Oral y Escrita II", "Biología Básica", "Historia de México Contemporáneo II", "Orientación Juvenil y Profesional II"],
            "3er Nivel": ["Geometría Analítica", "Física I", "Química I", "Inglés III", "Comunicación Científica", "Contabilidad I", "Entorno Socioeconómico de México", "Cálculos Financieros I", "Introducción a la Mercadotecnia Digital", "Comportamiento del Consumidor y Neuromarketing"],
            "4to Nivel": ["Cálculo Diferencial", "Física II", "Química II", "Inglés IV", "Derecho", "Contabilidad II", "Cálculos Financieros II", "Diseño y Desarrollo del Producto", "Investigación de Mercados"],
            "5to Nivel": ["Cálculo Integral", "Microeconomía", "Inglés V", "Derecho Mercantil", "Contabilidad III", "Orientación Juvenil y Profesional III", "Comunicación Mercadológica Digital", "Comercio Electrónico", "Ética y Legislación Digital", "Contenidos Digitales"],
            "6to Nivel": ["Probabilidad y Estadística", "Macroeconomía", "Inglés VI", "Orientación Juvenil y Profesional IV", "Métrica y Analítica Web", "Social Media", "Transformación Digital de las Organizaciones", "Optativa 4 (Opción Curricular de Titulación)"],
          }
        }
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
                
                <Card className="bg-card border-guinda/50 mt-8">
                  <CardHeader>
                    <CardTitle className="text-guinda">Plan de Estudios</CardTitle>
                    <CardDescription>Tiras de materias por semestre</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {especialidad.tirasMaterias.map((tira, index) => (
                      <Collapsible key={index} className="w-full border border-guinda/30 rounded-md">
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 font-medium">
                          <span className="text-guinda-light">Modalidad {tira.tipo}</span>
                          <ChevronDown className="h-5 w-5 text-guinda-light transition-transform duration-200" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 pt-0">
                          <div className="overflow-x-auto mb-4">
                            <img 
                              src={tira.imagen} 
                              alt={`Tira de materias de ${especialidad.nombre} - Modalidad ${tira.tipo}`}
                              className="w-full object-contain"
                            />
                          </div>
                          
                          <h4 className="text-guinda-light font-medium mb-2">Desglose por semestre:</h4>
                          {Object.entries(tira.materiasPorNivel).map(([nivel, materias]) => (
                            <div key={nivel} className="mb-4">
                              <h5 className="font-medium text-sm text-white mb-2">{nivel}</h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                                {materias.map((materia, idx) => (
                                  <div key={idx} className="bg-muted/50 p-2 rounded text-xs text-gray-300">
                                    {materia}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </CardContent>
                </Card>
                
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
