
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Datos de ejemplo para el panel de administración
const registrosIniciales = [
  {
    id: 1,
    boleta: "2023100001",
    nombre: "Ana García Pérez",
    especialidad: "Técnico en Informática",
    promedio: "9.5",
    fecha: "2023-10-15",
  },
  {
    id: 2,
    boleta: "2023100002",
    nombre: "Luis Rodríguez López",
    especialidad: "Técnico en Administración",
    promedio: "8.7",
    fecha: "2023-10-15",
  },
  {
    id: 3,
    boleta: "2023100003",
    nombre: "María Sánchez Torres",
    especialidad: "Técnico en Contaduría",
    promedio: "9.2",
    fecha: "2023-10-16",
  },
  {
    id: 4,
    boleta: "2023100004",
    nombre: "Carlos Méndez Ortiz",
    especialidad: "Técnico en Mercadotecnia Digital",
    promedio: "8.9",
    fecha: "2023-10-16",
  },
  {
    id: 5,
    boleta: "2023100005",
    nombre: "Laura Vázquez Ramírez",
    especialidad: "Técnico en Informática",
    promedio: "9.1",
    fecha: "2023-10-17",
  },
];

const Admin = () => {
  const [registros, setRegistros] = useState(registrosIniciales);
  const [filtro, setFiltro] = useState("");

  const handleBuscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  const registrosFiltrados = registros.filter(
    (registro) =>
      registro.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      registro.boleta.includes(filtro) ||
      registro.especialidad.toLowerCase().includes(filtro.toLowerCase())
  );

  const estadisticasPorEspecialidad = {
    "Técnico en Informática": registros.filter(r => r.especialidad === "Técnico en Informática").length,
    "Técnico en Administración": registros.filter(r => r.especialidad === "Técnico en Administración").length,
    "Técnico en Contaduría": registros.filter(r => r.especialidad === "Técnico en Contaduría").length,
    "Técnico en Mercadotecnia Digital": registros.filter(r => r.especialidad === "Técnico en Mercadotecnia Digital").length,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-guinda">
              Panel de Administración
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl">
              Gestión de registros de elección de especialidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {Object.entries(estadisticasPorEspecialidad).map(([especialidad, cantidad]) => (
              <Card key={especialidad} className="bg-card border-guinda/50">
                <CardHeader className="pb-2">
                  <CardDescription>Total de alumnos</CardDescription>
                  <CardTitle className="text-guinda">{especialidad}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{cantidad}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <Input
                  placeholder="Buscar por nombre, boleta o especialidad..."
                  value={filtro}
                  onChange={handleBuscar}
                  className="pl-10 bg-muted"
                />
              </div>
              <Button className="bg-guinda hover:bg-guinda-dark w-full sm:w-auto text-white">
                <Download className="mr-2 h-4 w-4" />
                Exportar datos
              </Button>
            </div>

            <div className="rounded-md border border-guinda/50 overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="text-left">Boleta</TableHead>
                    <TableHead className="text-left">Nombre completo</TableHead>
                    <TableHead className="text-left">Especialidad</TableHead>
                    <TableHead className="text-center">Promedio</TableHead>
                    <TableHead className="text-center">Fecha de registro</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registrosFiltrados.map((registro) => (
                    <TableRow key={registro.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{registro.boleta}</TableCell>
                      <TableCell>{registro.nombre}</TableCell>
                      <TableCell>{registro.especialidad}</TableCell>
                      <TableCell className="text-center">{registro.promedio}</TableCell>
                      <TableCell className="text-center">{registro.fecha}</TableCell>
                    </TableRow>
                  ))}
                  {registrosFiltrados.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        No se encontraron registros.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
