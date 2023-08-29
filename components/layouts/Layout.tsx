import React, { FC } from "react";
import Head from "next/head";

import { NavbarUI } from "../ui";

interface layoutProps {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: FC<layoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Inventions App"}</title>
        <meta name="author" content="Sebastian, Jose, Juan Diego" />
        <meta name="description" content="Pagina principal" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <NavbarUI />

      <main style={{ padding: "20px 20px", minHeight: "calc(100vh - 152px)" }}>
        {children}
      </main>

      <footer
        style={{
          marginTop: "auto",
          backgroundColor: "#0000006b",
          padding: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div>Universidad de Medellín - Línea de Énfasis II: DevOps</div>
        Copyright © {new Date().getFullYear()}
      </footer>
    </>
  );
};
