import React from "react";
import { useForm } from "react-hook-form";
import { SocialLinks } from "./social-links";
import { useMutation } from "@tanstack/react-query";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const mutation = useMutation({
    mutationFn: async (data: IFormInput) => {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    },
  });

  const onSubmit = (data: IFormInput) => {
    mutation.mutate(data);
  };

  if (mutation.isSuccess) {
    return (
      <section
        className="flex flex-col justify-between items-center min-h-screen"
        id="contact"
      >
        <div className="flex flex-col justify-center  pt-20 max-w-3xl ">
          <h1 className="text-7xl text-white font-bold text-center">
            Mensaje enviado
          </h1>
          <p className="text-gray-300 text-md mt-20 text-center">
            Gracias por contactarme, te responderé lo antes posible
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="flex flex-col justify-between items-center min-h-screen p-4 md:p-0 md:pt-20"
      id="contact"
    >
      <div className="flex flex-col justify-center max-w-3xl">
        <h1 className="text-7xl text-white font-bold text-center">Contacto</h1>
        <p className="text-gray-300 text-md mt-10 md:mt-20 text-center">
          ¿Quieres contactarme? Puedes hacerlo a través de mis redes sociales
        </p>
        <div className="flex flex-col justify-center items-center mt-4 md:mt-6">
          <SocialLinks />
        </div>
        <div className="flex flex-col justify-center items-center mt-4 md:mt-6">
          <p className="text-gray-300 text-md  text-center">
            O puedes enviarme un mensaje a través de este formulario
          </p>
        </div>

        <form
          className="flex flex-col flex-1 mt-6 md:mt-14  max-w-lg w-full mx-auto space-y-5 bg-white rounded-md p-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-black">
              Nombre
            </label>
            <input
              type="text"
              required
              id="name"
              placeholder="John Doe"
              className="rounded-md p-2 border-2 border-black text-black"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <input
              type="email"
              required
              id="email"
              placeholder="email@domain.com"
              className="rounded-md p-2 border-2 border-black text-black"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-black">
              Mensaje
            </label>
            <textarea
              required
              id="message"
              placeholder="Escribe tu mensaje aquí"
              className="rounded-md p-2 border-2 border-black text-black"
              {...register("message", { required: true })}
            />
          </div>
          <button type="submit" className="bg-black text-white rounded-md p-2">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export { ContactMe };
