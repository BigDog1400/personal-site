import Image from "next/image";
import React from "react";
import { FormattedMessage } from "react-intl";

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
          <FormattedMessage
            defaultMessage="Mis proyectos que he dejado de lado por falta de tiempo o por no tener una idea clara de cómo continuarlos, pero que me han servido para aprender nuevas tecnologías y mejorar mis habilidades."
            id="U6MTu4"
          />
        </p>
        <div className="flex flex-col justify-center items-center mt-12 gap-4">
          <div className="flex flex-col  justify-center bg-gray-900 w-[100%] p-6 md:p-10 rounded-lg ">
            <h1 className="text-3xl text-white font-bold">Kiosko</h1>
            <div className="flex flex-col md:flex-row mt-5 space-y-2 md:space-y-0 md:space-x-8 ">
              <picture className="min-w-fit">
                <img
                  src="/images/kiosko_home.png"
                  alt="lorem ipsum"
                  className="rounded-lg border-2 border-gray-300 h-[120px]"
                />
              </picture>

              <div className="w-auto">
                <h5 className="text-[#fafafa] text-lg">
                  <FormattedMessage defaultMessage="Descripción" id="Y/M4WZ" />
                </h5>
                <p className="text-md text-gray-300">
                  <FormattedMessage
                    defaultMessage="Kiosko es una aplicación web que permite a los usuarios crear sus propias tiendas virtuales, donde podrán vender sus productos y servicios."
                    id="LM8HxU"
                  />
                </p>
                <h5 className="text-white text-lg mt-5">
                  <FormattedMessage defaultMessage="Tecnologías" id="BeANnC" />
                </h5>
                <p className="text-gray-300 text-md">
                  React, Next.js, Chakra-UI, SQL, tRPC, Auth0 y Vercel.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-[100%] p-6 md:p-10 rounded-lg bg-gray-900">
            <h1 className="text-3xl text-white font-bold">OpenToWork</h1>
            <div className="flex flex-col md:flex-row mt-5 space-y-2 md:space-y-0 md:space-x-8 ">
              <picture className="min-w-fit">
                <img
                  src="/images/open_to_work_home.png"
                  alt="lorem ipsum"
                  className="rounded-lg border-2 border-gray-300 h-[120px]"
                />
              </picture>

              <div className="w-auto">
                <h5 className="text-white text-lg">
                  <FormattedMessage defaultMessage="Descripción" id="Y/M4WZ" />
                </h5>
                <p className="text-gray-300 text-md">
                  <FormattedMessage
                    defaultMessage="OpenToWork es una aplicación web que permite a los usuarios encontrar su trabajo ideal, y a las empresas encontrar el mejor talento."
                    id="UJYmPW"
                  />
                </p>
                <h5 className="text-white text-lg mt-5">
                  <FormattedMessage defaultMessage="Tecnologías" id="BeANnC" />
                </h5>
                <p className="text-gray-300 text-md">
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
