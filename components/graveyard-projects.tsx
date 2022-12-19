import Image from "next/image";
import React from "react";

interface GraveyardProjectsProps {
  className?: string;
  style?: React.CSSProperties;
}

export function GraveyardProjects({
  className,
  style,
}: GraveyardProjectsProps) {
  return (
    <section className={className} style={style} id="graveyard-projects">
      <div className="flex flex-col justify-center pt-10 max-w-4xl ">
        <h1 className="text-7xl text-white font-bold text-center">
          Graveyard Projects <span className="text-4xl">👻</span>
        </h1>
        <p className="text-gray-300 text-md mt-10 text-center">
          Mis proyectos que he dejado de lado por falta de tiempo o por no tener
          una idea clara de cómo continuarlos, pero que me han servido para
          aprender nuevas tecnologías y mejorar mis habilidades.
        </p>
        <div className="flex flex-col justify-center items-center mt-12 gap-4">
          <div className="flex flex-col  justify-center bg-gray-100 w-[100%] p-6 md:p-10 rounded-lg ">
            <h1 className="text-3xl text-black font-bold">Kiosko</h1>
            <div className="flex flex-col md:flex-row mt-5 space-y-2 md:space-y-0 md:space-x-8 ">
              <picture className="min-w-fit">
                <img
                  src="/images/kiosko_home.png"
                  alt="lorem ipsum"
                  className="rounded-lg border-2 border-gray-300 h-[120px]"
                />
              </picture>

              <div className="w-auto">
                <h5 className="text-black text-md font-semibold">
                  Descripción
                </h5>
                <p className="text-gray-600 text-md">
                  Kiosko es una aplicación web que permite a los usuarios crear
                  sus propias tiendas virtuales, donde podrán vender sus
                  productos y servicios.
                </p>
                <h5 className="text-black text-md font-semibold mt-5">
                  Tecnologías
                </h5>
                <p className="text-gray-600 text-md">
                  React, Next.js, Chakra-UI, SQL, tRPC, Auth0 y Vercel.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-gray-100 w-[100%] p-6 md:p-10 rounded-lg ">
            <h1 className="text-3xl text-black font-bold">OpenToWork</h1>
            <div className="flex flex-col md:flex-row mt-5 space-y-2 md:space-y-0 md:space-x-8 ">
              <picture className="min-w-fit">
                <img
                  src="/images/open_to_work_home.png"
                  alt="lorem ipsum"
                  className="rounded-lg border-2 border-gray-300 h-[120px]"
                />
              </picture>

              <div className="w-auto">
                <h5 className="text-black text-md font-semibold">
                  Descripción
                </h5>
                <p className="text-gray-600 text-md">
                  OpenToWork es una aplicación web que permite a los usuarios
                  encontrar su trabajo ideal, y a las empresas encontrar el
                  mejor talento.
                </p>
                <h5 className="text-black text-md font-semibold mt-5">
                  Tecnologías
                </h5>
                <p className="text-gray-600 text-md">
                  React, Next.js, Chakra-UI, SQL, AWS Cognito, Node.js, Express,
                  MongoDB, y Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
