
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown } from "lucide-react";

const Especialidades = () => {
  const navigate = useNavigate();
  
  const especialidades = [
    {
      id: "informatica",
      nombre: "Técnico en Informática",
      descripcion: "Formar Técnicos en Informática altamente competitivos que colaboren con la investigación científica, tecnológica, que promueva la innovación, el desarrollo económico, político, social y cultural del país; mediante unidades de aprendizaje vigentes y pertinentes que les permita desarrollar habilidades, aptitudes y actitudes que demanda el talento 4.0 para su incorporación al campo laboral y profesional.",
      perfilIngreso: {
        conocimientos: [
          "Conocimientos básicos del nivel previo.",
          "Conocimientos básicos de computación.",
          "Conocimiento básico de una segunda lengua.",
          "Contar con actitudes y valores para el proceso de formación."
        ],
        habilidades: [
          "Manejo de la expresión oral y escrita.",
          "Uso efectivo de los recursos digitales.",
          "Pensamiento creativo.",
          "Pensamiento crítico.",
          "Estrategias de autogestión del aprendizaje."
        ],
        actitudes: [
          "Seguridad para expresar sus ideas",
          "Disposición para el trabajo en equipo y colaborativo",
          "Liderazgo",
          "Responsabilidad."
        ]
      },
      perfilEgreso: {
        competenciasGenericas: [
          "Maneja las tecnologías de la información y comunicación.",
          "Toma decisiones con responsabilidad.",
          "Mantiene una actitud crítica, constructiva y altruista en su vida cotidiana.",
          "Muestra interés sobre temas de actualidad de manera ética y reflexiva.",
          "Demuestra inclusión y respeto a las diferentes ideologías.",
          "Mantiene una actitud emprendedora conforme a las necesidades de su entorno.",
          "Promueve el desarrollo económico, social y cultural de su país.",
          "Diseña estrategias que reduzcan el impacto social y ambiental.",
          "Participa y colabora de manera efectiva en equipos diversos."
        ],
        competenciasDisciplinares: [
          "Aplica las habilidades, conocimientos y actitudes de interrelación con las unidades de formación institucional, científica, humanística y tecnológica básica que fortalecen su trayectoria académica."
        ],
        competenciasProfesionales: [
          "Aplica los principios y procesos informáticos.",
          "Desarrolla aplicaciones web y móviles.",
          "Administra sistemas y redes de computadoras.",
          "Implementa sistemas de bases de datos.",
          "Maneja técnicas y herramientas para el desarrollo de software."
        ]
      },
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
      descripcion: "Formar Técnicos en Administración altamente competitivos que colaboren con la investigación científica, tecnológica, que promueva la innovación, el desarrollo económico, político, social y cultural del país; mediante unidades de aprendizaje vigentes y pertinentes que les permita desarrollar habilidades, aptitudes y actitudes que demanda el talento 4.0 para su incorporación al campo laboral y profesional.",
      perfilIngreso: {
        conocimientos: [
          "Conocimientos básicos del nivel previo.",
          "Conocimientos básicos de computación.",
          "Conocimiento básico de una segunda lengua.",
          "Contar con actitudes y valores para el proceso de formación."
        ],
        habilidades: [
          "Manejo de la expresión oral y escrita.",
          "Uso efectivo de los recursos digitales.",
          "Pensamiento creativo.",
          "Pensamiento crítico.",
          "Estrategias de autogestión del aprendizaje."
        ],
        actitudes: [
          "Seguridad para expresar sus ideas",
          "Disposición para el trabajo en equipo y colaborativo",
          "Liderazgo",
          "Responsabilidad."
        ]
      },
      perfilEgreso: {
        competenciasGenericas: [
          "Maneja las tecnologías de la información y comunicación.",
          "Toma decisiones con responsabilidad.",
          "Mantiene una actitud crítica, constructiva y altruista en su vida cotidiana.",
          "Muestra interés sobre temas de actualidad de manera ética y reflexiva.",
          "Demuestra inclusión y respeto a las diferentes ideologías.",
          "Mantiene una actitud emprendedora conforme a las necesidades de su entorno.",
          "Promueve el desarrollo económico, social y cultural de su país.",
          "Diseña estrategias que reduzcan el impacto social y ambiental.",
          "Participa y colabora de manera efectiva en equipos diversos."
        ],
        competenciasDisciplinares: [
          "Aplica las habilidades, conocimientos y actitudes de interrelación con las unidades de formación institucional, científica, humanística y tecnológica básica que fortalecen su trayectoria académica."
        ],
        competenciasProfesionales: [
          "Aplica los principios y procesos administrativos.",
          "Identifica la normatividad vigente de las relaciones laborales en México.",
          "Aplica el análisis y valuación de puestos.",
          "Integra la estructura de la nómina.",
          "Aplica métodos y estrategias para el diseño de organizaciones públicas y privadas.",
          "Emplea técnicas y estrategias de investigación de mercado.",
          "Opera sistemas de información contable y administrativa.",
          "Desarrolla proyectos de inversión.",
          "Maneja técnicas y herramientas para la administración de la producción con la normatividad vigente.",
          "Emplea técnicas de calidad en los diferentes procesos.",
          "Aplica herramientas para la administración financiera en una organización con base a las Normas de Información Financiera (NIF).",
          "Elabora documentación contable, administrativa y mercantil conforme a la normatividad vigente.",
          "Diseña estrategias para el uso racional de los recursos sustentables."
        ]
      },
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
      descripcion: "Ser la mejor carrera de Técnico en Contaduría a nivel Medio Superior, sustentada en la filosofía del Instituto Politécnico Nacional que está reconocida por el alto nivel de sus alumnos, así como por el buen desempeño laboral de sus egresados en el área contable y administrativa. En general, debido a sus conocimientos, habilidades, actitudes y valores de calidad y acorde con los avances tecnológicos y los cambios sociales, económicos y laborales que demanda la sociedad.",
      perfilIngreso: {
        conocimientos: [
          "Conocimientos básicos en matemáticas.",
          "Manejo de instrumentos de cálculo.",
          "Noción en materia de computación."
        ],
        habilidades: [
          "Capacidad de análisis.",
          "Razonamiento formal que le facilite la resolución de problemas lógicos y cotidianos.",
          "Disposición para el trabajo en equipo."
        ],
        actitudes: [
          "Interés por la contabilidad y los sistemas contables de la información.",
          "Honestidad",
          "Responsabilidad"
        ]
      },
      perfilEgreso: {
        competenciasGenericas: [
          "Se conoce y valora a sí mismo y aborda problemas y retos teniendo en cuenta los objetivos que persigue.",
          "Desarrolla innovaciones y propone soluciones a problemas a partir de métodos establecidos.",
          "Aprende por iniciativa e interés propio a lo largo de la vida.",
          "Participa y colabora de manera efectiva en equipos diversos."
        ],
        competenciasDisciplinares: [
          "Construye e interpreta modelos matemáticos mediante la aplicación de procedimientos aritméticos, algebraicos, geométricos y variacionales para la comprensión y análisis de situaciones reales, hipotéticas o formales.",
          "Formula y resuelve problemas matemáticos aplicando diferentes enfoques.",
          "Explica e interpreta los resultados obtenidos mediante procedimientos matemáticos y los contrasta con modelos establecidos o situaciones reales.",
          "Analiza las relaciones entre dos o más variables de un proceso social o natural para determinar o estimar su comportamiento.",
          "Cuantifica, representa y contrasta experimental o matemáticamente las magnitudes del espacio y las propiedades físicas de los objetos que lo rodean."
        ],
        competenciasProfesionales: [
          "Calcula el pago de impuestos de personas físicas y morales con base en la normatividad fiscal vigente.",
          "Determina el monto de las aportaciones obrero-patronales mediante la aplicación de las normas de seguridad social para los trabajadores.",
          "Elabora una nómina con base a las normatividades laborales de seguridad social y fiscal vigentes.",
          "Aplica el marco normativo que rige la profesión contable y el desarrollo de sistemas de información de una organización.",
          "Maneja los diferentes documentos administrativos contables y legales que se derivan y/o respaldan las operaciones económico-administrativas de una organización.",
          "Revisa los estados financieros con base a las Normas de Información Financiera para sustentar auditoría."
        ]
      },
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
      descripcion: "Técnico en Mercadotecnia Digital desarrollará en los estudiantes habilidades específicas, las cuales le permitirán crear e implementar estrategias mercadológicas, así como generar discursos con contenido de valor creativo. El desarrollo del internet ha revolucionado el mercado. El ecosistema digital contemporáneo ofrece diversas ventajas, entre las que se encuentran diferentes herramientas que darán seguimiento a las variables que buscan solventar las necesidades actuales de las organizaciones.",
      perfilIngreso: {
        conocimientos: [
          "Conocimientos sólidos en el área de ciencias básicas.",
          "Conocimientos para aplicar metodologías de investigación.",
          "Conocimientos del idioma inglés.",
          "Conocer el manejo de Tecnologías de información y comunicación.",
          "Conocimientos de comunicación oral y escrita."
        ],
        habilidades: [
          "Habilidades matemáticas.",
          "Habilidades comunicativas.",
          "Manejar paquetería de office.",
          "Trabajar en equipo."
        ],
        actitudes: [
          "Respetuoso.",
          "Empático.",
          "Muestra iniciativa."
        ]
      },
      perfilEgreso: {
        saber: [
          "Identifica hábitos de consumo de los clientes, al analizar la información obtenida en la investigación de mercados para la toma de decisiones.",
          "Participa en el diseño y desarrollo de productos y servicios de acuerdo a las necesidades de los consumidores.",
          "Colabora en el diseño de campañas de mercadotecnia digital.",
          "Diseña tácticas para ejecutar los planes de mercadotecnia.",
          "Formula reportes y métricas sobre las campañas en plataformas digitales.",
          "Crea y administra contenidos en redes sociales.",
          "Aplica las herramientas que le permiten analizar y medir el impacto de las estrategias aplicadas.",
          "Colabora con la propuesta y diseño del plan estratégico de mercadotecnia."
        ],
        hacer: [
          "Maneja bases de datos.",
          "Maneja campañas publicitarias en medios digitales.",
          "Auxilia en estudios de mercado.",
          "Planea, diseña y desarrolla productos, así como servicios de acuerdo a las necesidades de los consumidores.",
          "Aplica las tácticas y las estrategias de mercadotecnia digital diseñadas por la empresa.",
          "Difunde bienes y servicios acuerdo a las necesidades del consumidor y la empresa, apoyándose en los medios digitales.",
          "Manejo de herramientas digitales.",
          "Trabaja bajo presión.",
          "Resuelve problemas con excelente actitud de servicio."
        ],
        ser: [
          "Ser creativos.",
          "Entusiastas.",
          "Emprendedores.",
          "Colaborativos.",
          "Valores éticos y cívicos.",
          "Respetuoso y tolerante.",
          "Actitud de servicio.",
          "Disposición al trabajo.",
          "Liderazgo.",
          "Mentalidad analítica y de investigación.",
          "Alto sentido de urgencia, orden, responsabilidad."
        ]
      },
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
                <Card className="bg-card border-guinda/50">
                  <CardHeader>
                    <CardTitle className="text-guinda">{especialidad.nombre}</CardTitle>
                    <CardDescription>Descripción general</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{especialidad.descripcion}</p>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card border-guinda/50">
                    <CardHeader>
                      <CardTitle className="text-guinda">Perfil de Ingreso</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {especialidad.perfilIngreso.conocimientos && (
                        <div>
                          <h4 className="font-medium text-guinda-light mb-2">Conocimientos</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {especialidad.perfilIngreso.conocimientos.map((item, index) => (
                              <li key={index} className="text-gray-300">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {especialidad.perfilIngreso.habilidades && (
                        <div>
                          <h4 className="font-medium text-guinda-light mb-2">Habilidades</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {especialidad.perfilIngreso.habilidades.map((item, index) => (
                              <li key={index} className="text-gray-300">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {especialidad.perfilIngreso.actitudes && (
                        <div>
                          <h4 className="font-medium text-guinda-light mb-2">Actitudes</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {especialidad.perfilIngreso.actitudes.map((item, index) => (
                              <li key={index} className="text-gray-300">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card border-guinda/50">
                    <CardHeader>
                      <CardTitle className="text-guinda">Perfil de Egreso</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Accordion type="single" collapsible className="w-full">
                        {especialidad.perfilEgreso.competenciasGenericas && (
                          <AccordionItem value="genericas">
                            <AccordionTrigger className="text-guinda-light">Competencias Genéricas</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1">
                                {especialidad.perfilEgreso.competenciasGenericas.map((item, index) => (
                                  <li key={index} className="text-gray-300">{item}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                        
                        {especialidad.perfilEgreso.competenciasDisciplinares && (
                          <AccordionItem value="disciplinares">
                            <AccordionTrigger className="text-guinda-light">Competencias Disciplinares</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1">
                                {especialidad.perfilEgreso.competenciasDisciplinares.map((item, index) => (
                                  <li key={index} className="text-gray-300">{item}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                        
                        {especialidad.perfilEgreso.competenciasProfesionales && (
                          <AccordionItem value="profesionales">
                            <AccordionTrigger className="text-guinda-light">Competencias Profesionales</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1">
                                {especialidad.perfilEgreso.competenciasProfesionales.map((item, index) => (
                                  <li key={index} className="text-gray-300">{item}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                        
                        {/* Para mercadotecnia que tiene estructura diferente */}
                        {especialidad.perfilEgreso.saber && (
                          <AccordionItem value="saber">
                            <AccordionTrigger className="text-guinda-light">Saber Conocer</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1">
                                {especialidad.perfilEgreso.saber.map((item, index) => (
                                  <li key={index} className="text-gray-300">{item}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                        
                        {especialidad.perfilEgreso.hacer && (
                          <AccordionItem value="hacer">
                            <AccordionTrigger className="text-guinda-light">Saber Hacer</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1">
                                {especialidad.perfilEgreso.hacer.map((item, index) => (
                                  <li key={index} className="text-gray-300">{item}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                        
                        {especialidad.perfilEgreso.ser && (
                          <AccordionItem value="ser">
                            <AccordionTrigger className="text-guinda-light">Saber Ser y Convivir</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1">
                                {especialidad.perfilEgreso.ser.map((item, index) => (
                                  <li key={index} className="text-gray-300">{item}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    onClick={() => navigate("/registro", { state: { especialidad: especialidad.id } })}
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
