
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
