
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-guinda-light/20 bg-black py-6">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} CECyT 12 José María Morelos y Pavón. 
          Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Instituto Politécnico Nacional
          </p>
        </div>
      </div>
      
      <div className="container mt-8">
        <h3 className="text-center text-lg font-semibold text-guinda mb-4">Fuentes de Información</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-guinda/20 rounded-lg p-4">
            <h4 className="font-medium text-guinda-light mb-2">Sitios Oficiales</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://www.cecyt12.ipn.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-guinda-light underline"
                >
                  Sitio Oficial CECyT 12 "José María Morelos"
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ipn.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-guinda-light underline"
                >
                  Portal del Instituto Politécnico Nacional
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ipn.mx/oferta-educativa/educacion-media-superior/ver-carrera.html?lg=es&id=17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-guinda-light underline"
                >
                  Oferta Educativa IPN - Nivel Medio Superior
                </a>
              </li>
            </ul>
          </div>
          
          <div className="border border-guinda/20 rounded-lg p-4">
            <h4 className="font-medium text-guinda-light mb-2">Referencias Académicas</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>
                IPN. (2023). <i>Plan de estudios del CECyT 12 "José María Morelos"</i>. 
                Instituto Politécnico Nacional, México.
              </li>
              <li>
                Dirección de Educación Media Superior. (2022). <i>Programas Académicos del Nivel Medio Superior</i>. 
                IPN, México.
              </li>
              <li>
                CECyT 12. (2023). <i>Memoria de Actividades Académicas</i>. 
                Centro de Estudios Científicos y Tecnológicos No. 12 "José María Morelos".
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container mt-4">
        <div className="text-xs text-center text-muted-foreground/70">
          <p>Para descargar este proyecto y compartirlo con tus compañeros:</p>
          <ol className="list-decimal list-inside text-left max-w-md mx-auto mt-2">
            <li>Ve a <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-guinda-light underline">GitHub</a> y crea un nuevo repositorio</li>
            <li>Clona este proyecto usando Git: <code className="bg-muted px-1 rounded">git clone &lt;URL-del-repositorio&gt;</code></li>
            <li>Navega al directorio: <code className="bg-muted px-1 rounded">cd &lt;nombre-del-proyecto&gt;</code></li>
            <li>Instala dependencias: <code className="bg-muted px-1 rounded">npm install</code></li>
            <li>Ejecuta el proyecto: <code className="bg-muted px-1 rounded">npm run dev</code></li>
            <li>Para compartir: comprime la carpeta y envíala, o sube tu código a GitHub y comparte el enlace</li>
          </ol>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
