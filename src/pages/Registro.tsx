
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { submitRegistro, type RegistroData } from "@/services/api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const especialidadesOptions = [
  { value: "informatica", label: "Técnico en Informática" },
  { value: "administracion", label: "Técnico en Administración" },
  { value: "contaduria", label: "Técnico en Contaduría" },
  { value: "mercadotecnia", label: "Técnico en Mercadotecnia Digital" },
];

const formSchema = z.object({
  nombre: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres.",
  }),
  apellidoPaterno: z.string().min(2, {
    message: "El apellido paterno debe tener al menos 2 caracteres.",
  }),
  apellidoMaterno: z.string().min(2, {
    message: "El apellido materno debe tener al menos 2 caracteres.",
  }),
  boleta: z.string().regex(/^\d{10}$/, {
    message: "El número de boleta debe tener 10 dígitos.",
  }),
  email: z.string().email({
    message: "Ingresa un correo electrónico válido.",
  }),
  promedio: z.string().regex(/^([0-9](\.\d)?|10(\.0)?)$/, {
    message: "El promedio debe ser un número entre 0 y 10.",
  }),
  especialidad1: z.string({
    required_error: "Debes seleccionar tu primera opción de especialidad.",
  }),
  especialidad2: z.string({
    required_error: "Debes seleccionar tu segunda opción de especialidad.",
  }),
  especialidad3: z.string({
    required_error: "Debes seleccionar tu tercera opción de especialidad.",
  }),
}).refine((data) => data.especialidad1 !== data.especialidad2, {
  message: "La segunda opción debe ser diferente a la primera",
  path: ["especialidad2"],
}).refine((data) => data.especialidad1 !== data.especialidad3, {
  message: "La tercera opción debe ser diferente a la primera",
  path: ["especialidad3"],
}).refine((data) => data.especialidad2 !== data.especialidad3, {
  message: "La tercera opción debe ser diferente a la segunda",
  path: ["especialidad3"],
});

type FormValues = z.infer<typeof formSchema>;

const Registro = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      boleta: "",
      email: "",
      promedio: "",
      especialidad1: "",
      especialidad2: "",
      especialidad3: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Format the specialties as a structured string or JSON
      const especialidadFormatted = JSON.stringify({
        primera: values.especialidad1,
        segunda: values.especialidad2,
        tercera: values.especialidad3
      });
      
      const registroData: RegistroData = {
        nombre: values.nombre,
        apellidoPaterno: values.apellidoPaterno,
        apellidoMaterno: values.apellidoMaterno,
        boleta: values.boleta,
        email: values.email,
        promedio: values.promedio,
        especialidad: especialidadFormatted
      };
      
      const result = await submitRegistro(registroData);
      
      if (result.success) {
        toast({
          title: "Registro exitoso",
          description: `Tu registro ha sido enviado correctamente.`,
        });
        form.reset();
      } else {
        setSubmitError(result.message || "Hubo un problema al procesar tu registro. Intenta nuevamente.");
        toast({
          title: "Error en el registro",
          description: result.message || "Hubo un problema al procesar tu registro. Intenta nuevamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Hubo un problema al procesar tu registro. Intenta nuevamente.";
      setSubmitError(errorMessage);
      toast({
        title: "Error en el registro",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Error al registrar:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const getEspecialidadNombre = (id: string) => {
    const especialidad = especialidadesOptions.find(esp => esp.value === id);
    return especialidad ? especialidad.label : id;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-guinda">
              Registro de Elección
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl">
              Completa el formulario para registrar tu elección de carrera técnica.
            </p>
          </div>

          {submitError && (
            <Alert variant="destructive" className="mb-6 mx-auto max-w-2xl">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error en el registro</AlertTitle>
              <AlertDescription>{submitError}</AlertDescription>
            </Alert>
          )}

          <Card className="mx-auto max-w-2xl bg-card border-guinda/50">
            <CardHeader>
              <CardTitle className="text-guinda">Formulario de Registro</CardTitle>
              <CardDescription>
                Ingresa tus datos personales y selecciona tus especialidades en orden de preferencia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre(s)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ingresa tu(s) nombre(s)" {...field} className="bg-muted" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="apellidoPaterno"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido Paterno</FormLabel>
                          <FormControl>
                            <Input placeholder="Apellido paterno" {...field} className="bg-muted" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="apellidoMaterno"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido Materno</FormLabel>
                          <FormControl>
                            <Input placeholder="Apellido materno" {...field} className="bg-muted" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="boleta"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de Boleta</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. 2023123456" {...field} className="bg-muted" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input placeholder="ejemplo@ejemplo.com" {...field} className="bg-muted" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="promedio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Promedio Actual</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. 8.5" {...field} className="bg-muted" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Selección de Especialidades</h3>
                    <p className="text-sm text-muted-foreground">Selecciona tres opciones diferentes en orden de preferencia</p>
                    
                    <FormField
                      control={form.control}
                      name="especialidad1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primera Opción (preferida)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-muted">
                                <SelectValue placeholder="Selecciona tu primera opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {especialidadesOptions.map((opcion) => (
                                <SelectItem key={`primera-${opcion.value}`} value={opcion.value}>
                                  {opcion.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="especialidad2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Segunda Opción</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-muted">
                                <SelectValue placeholder="Selecciona tu segunda opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {especialidadesOptions.map((opcion) => (
                                <SelectItem key={`segunda-${opcion.value}`} value={opcion.value}>
                                  {opcion.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="especialidad3"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tercera Opción</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-muted">
                                <SelectValue placeholder="Selecciona tu tercera opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {especialidadesOptions.map((opcion) => (
                                <SelectItem key={`tercera-${opcion.value}`} value={opcion.value}>
                                  {opcion.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-guinda hover:bg-guinda-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Registrar Elección"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registro;
