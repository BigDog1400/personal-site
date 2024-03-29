import React from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { FaGlobe } from "react-icons/fa";
interface CommonLayoutProps {
  children: React.ReactNode;
}

export function CommonLayoutPage({ children }: CommonLayoutProps) {
  const router = useRouter();

  return (
    <main>
      <header className="flex justify-center">
        <nav className="md:p-6 pt-4 pl-4 pr-4 md:flex flex-row justify-between items-center w-full max-w-4xl">
          <Link
            href="/"
            className="md:mr-24 mr-4 border-white border-2 pl-2 pr-10  text-white font-semibold text-2xl h-12 flex items-center
        
        w-fit
        "
          >
            Isaac
          </Link>

          <ul className="md:space-x-8 h-14 flex justify-around items-center gap-2">
            <li className="text-white text-sm md:text-base hover:text-gray-300">
              <Link href="/#about">
                <FormattedMessage defaultMessage="Sobre mi" id="uqJyuM" />
              </Link>
            </li>

            <li className="text-white text-sm md:text-base   hover:text-gray-300">
              <Link href="/#contact  ">
                <FormattedMessage defaultMessage="Contacto" id="Z9WYEx" />
              </Link>
            </li>
            <li className="text-white text-sm md:text-base  hover:text-gray-300">
              <Link href="/blog">Blog</Link>
            </li>

            {/* lang toggle */}
            <li className="text-white text-sm md:text-base  hover:text-gray-300">
              <Link
                href={router.asPath}
                lang={router.locale === "en" ? "es" : "en"}
                locale={router.locale === "en" ? "es" : "en"}
                className="flex items-center gap-2"
              >
                <FaGlobe />
                {router.locale === "es" ? (
                  <FormattedMessage defaultMessage="English" id="WkrNSk" />
                ) : (
                  <FormattedMessage defaultMessage="Español" id="dX8jTq" />
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  );
}
