
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, UserPlus, UserCog } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-guinda-light/20 bg-black">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-guinda">CECyT 12 JMM</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-guinda hover:bg-secondary/10"
            onClick={() => navigate("/")}
          >
            <Home className="mr-2 h-4 w-4" />
            Inicio
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-guinda hover:bg-secondary/10"
            onClick={() => navigate("/especialidades")}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Especialidades
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-guinda hover:bg-secondary/10"
            onClick={() => navigate("/registro")}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Registro
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-guinda hover:bg-secondary/10"
            onClick={() => navigate("/admin")}
          >
            <UserCog className="mr-2 h-4 w-4" />
            Admin
          </Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-foreground">
            <span className="sr-only">Toggle menu</span>
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
