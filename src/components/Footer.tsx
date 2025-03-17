
const Footer = () => {
  return (
    <footer className="border-t border-guinda-light/20 bg-black py-6">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CECyT 12 José María Morelos y Pavón. 
          Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Instituto Politécnico Nacional
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
