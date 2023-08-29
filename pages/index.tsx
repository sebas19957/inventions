import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { Layout } from "../components/layouts";

import { Invention } from "./create-invention";

import "hover.css/css/hover-min.css";

export default function Home() {
  const data: Invention[] = [
    {
      inventorName: "Leonardo da Vinci",
      invention: "La Mona Lisa",
      inventionDate: "28/08/2023",
      description: "La Mona Lisa",
    },
    {
      inventorName: "Thomas Edison",
      invention: "La bombilla incandescente",
      inventionDate: "28/08/2023",
      description: "La bombilla incandescente",
    },
    {
      inventorName: "Marie Curie",
      invention: "El descubrimiento de la radiactividad",
      inventionDate: "28/08/2023",
      description: "El descubrimiento de la radiactividad",
    },
    {
      inventorName: "Guglielmo Marconi",
      invention: "La radio",
      inventionDate: "28/08/2023",
      description: "La radio",
    },
    {
      inventorName: "Tim Berners-Lee",
      invention: "La World Wide Web",
      inventionDate: "28/08/2023",
      description: "La World Wide Web",
    },
    {
      inventorName: "Nikola Tesla",
      invention: "La corriente alterna",
      inventionDate: "28/08/2023",
      description: "La corriente alterna",
    },
    {
      inventorName: "Benjamin Franklin",
      invention: "El pararrayos",
      inventionDate: "28/08/2023",
      description: "El pararrayos",
    },
    {
      inventorName: "Steve Jobs",
      invention: "La computadora personal",
      inventionDate: "28/08/2023",
      description: "La computadora personal",
    },
    {
      inventorName: "Alan Turing",
      invention: "La máquina de Turing",
      inventionDate: "28/08/2023",
      description: "La máquina de Turing",
    },
    {
      inventorName: "Alexander Graham Bell",
      invention: "El teléfono",
      inventionDate: "28/08/2023",
      description: "El teléfono",
    },
    {
      inventorName: "James Watt",
      invention: "La máquina de vapor",
      inventionDate: "28/08/2023",
      description: "La máquina de vapor",
    },
    {
      inventorName: "Ada Lovelace",
      invention: "El primer programa de computadora",
      inventionDate: "28/08/2023",
      description: "El primer programa de computadora",
    },
    {
      inventorName: "Charles Babbage",
      invention: "La máquina analítica",
      inventionDate: "28/08/2023",
      description: "La máquina analítica",
    },
    {
      inventorName: "Louis Pasteur",
      invention: "La pasteurización",
      inventionDate: "28/08/2023",
      description: "La pasteurización",
    },
    {
      inventorName: "Wright Brothers",
      invention: "El primer vuelo en avión",
      inventionDate: "28/08/2023",
      description: "El primer vuelo en avión",
    },
    {
      inventorName: "Bill Gates",
      invention: "El sistema operativo Windows",
      inventionDate: "28/08/2023",
      description: "El sistema operativo Windows",
    },
    {
      inventorName: "Galileo Galilei",
      invention: "La ley de la caída de los cuerpos",
      inventionDate: "28/08/2023",
      description: "La ley de la caída de los cuerpos",
    },
    {
      inventorName: "Isaac Newton",
      invention: "La ley de la gravitación universal",
      inventionDate: "28/08/2023",
      description: "La ley de la gravitación universal",
    },
    {
      inventorName: "Grace Hopper",
      invention: "El primer compilador",
      inventionDate: "28/08/2023",
      description: "El primer compilador",
    },
    {
      inventorName: "Albert Einstein",
      invention: "La teoría de la relatividad",
      inventionDate: "28/08/2023",
      description: "La teoría de la relatividad",
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }, // Ajusta el retraso de la animación
    }));
  }, [controls]);

  return (
    <Layout title="Inventions App | Inventions">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        style={{ marginTop: "10px", overflowY: "hidden", padding: "20px" }}
      >
        {data.map((inventory: Invention, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            custom={index}
          >
            <Card
              className="mb-4 hvr-bob"
              key={index}
              style={{
                marginBottom: "20px",
                backgroundColor: "#ffffff80",
                cursor: "pointer",
                width: "100%",
                height: "100%",
              }}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="font-bold text-large">{inventory.invention}</p>
                <p className="font-bold">{inventory.inventorName}</p>
                <small className="text-default-500" style={{ color: "black" }}>
                  {inventory.inventionDate}
                </small>
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Descripción
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div>{inventory.description}</div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
