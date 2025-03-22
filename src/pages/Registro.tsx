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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { submitRegistro } from "@/services/api";

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
  especialidad: z.enum(["informatica", "administracion", "contaduria", "mercadotecnia"], {
    required_error: "Debes seleccionar una especialidad.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Registro = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      boleta: "",
      email: "",
      promedio: "",
      especialidad: undefined,
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    try {
      const registroData: RegistroData = {
        nombre: values.nombre,
        apellidoPaterno: values.apellidoPaterno,
        apellidoMaterno: values.apellidoMaterno,
        boleta: values.boleta,
        email: values.email,
        promedio: values.promedio,
        especialidad: values.especialidad
      };
      
      const result = await submitRegistro(registroData);
      
      if (result.success) {
        toast({
          title: "Registro exitoso",
          description: `Tu registro para ${getEspecialidadNombre(values.especialidad)} ha sido enviado correctamente.`,
        });
        form.reset();
      } else {
        toast({
          title: "Error en el registro",
          description: result.message || "Hubo un problema al procesar tu registro. Intenta nuevamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error en el registro",
        description: "Hubo un problema al procesar tu registro. Intenta nuevamente.",
        variant: "destructive",
      });
      console.error("Error al registrar:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const getEspecialidadNombre = (id: string) => {
    const especialidades = {
      informatica: "Técnico en Informática",
      administracion: "Técnico en Administración",
      contaduria: "Técnico en Contaduría",
      mercadotecnia: "Técnico en Mercadotecnia Digital",
    };
    return especialidades[id as keyof typeof especialidades];
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

          <Card className="mx-auto max-w-2xl bg-card border-guinda/50">
            <CardHeader>
              <CardTitle className="text-guinda">Formulario de Registro</CardTitle>
              <CardDescription>
                Ingresa tus datos personales y selecciona tu especialidad.
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
                  
                  <FormField
                    control={form.control}
                    name="especialidad"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Selecciona tu especialidad</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="informatica" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Técnico en Informática
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="administracion" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Técnico en Administración
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="contaduria" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Técnico en Contaduría
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="mercadotecnia" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Técnico en Mercadotecnia Digital
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
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
