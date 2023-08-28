import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Layout } from "../../components/layouts";

const ListInvetoryPage = () => {
  const data = [
    {
      nombreCreador: "Leonardo da Vinci",
      fecha: "28/08/2023",
      descripcion: "La Mona Lisa",
    },
    {
      nombreCreador: "Thomas Edison",
      fecha: "28/08/2023",
      descripcion: "La bombilla incandescente",
    },
    {
      nombreCreador: "Marie Curie",
      fecha: "28/08/2023",
      descripcion: "El descubrimiento de la radiactividad",
    },
    {
      nombreCreador: "Guglielmo Marconi",
      fecha: "28/08/2023",
      descripcion: "La radio",
    },
    {
      nombreCreador: "Tim Berners-Lee",
      fecha: "28/08/2023",
      descripcion: "La World Wide Web",
    },
    {
      nombreCreador: "Nikola Tesla",
      fecha: "28/08/2023",
      descripcion: "La corriente alterna",
    },
    {
      nombreCreador: "Benjamin Franklin",
      fecha: "28/08/2023",
      descripcion: "El pararrayos",
    },
    {
      nombreCreador: "Steve Jobs",
      fecha: "28/08/2023",
      descripcion: "La computadora personal",
    },
    {
      nombreCreador: "Alan Turing",
      fecha: "28/08/2023",
      descripcion: "La máquina de Turing",
    },
    {
      nombreCreador: "Alexander Graham Bell",
      fecha: "28/08/2023",
      descripcion: "El teléfono",
    },
    {
      nombreCreador: "James Watt",
      fecha: "28/08/2023",
      descripcion: "La máquina de vapor",
    },
    {
      nombreCreador: "Ada Lovelace",
      fecha: "28/08/2023",
      descripcion: "El primer programa de computadora",
    },
    {
      nombreCreador: "Charles Babbage",
      fecha: "28/08/2023",
      descripcion: "La máquina analítica",
    },
    {
      nombreCreador: "Louis Pasteur",
      fecha: "28/08/2023",
      descripcion: "La pasteurización",
    },
    {
      nombreCreador: "Wright Brothers",
      fecha: "28/08/2023",
      descripcion: "El primer vuelo en avión",
    },
    {
      nombreCreador: "Bill Gates",
      fecha: "28/08/2023",
      descripcion: "El sistema operativo Windows",
    },
    {
      nombreCreador: "Galileo Galilei",
      fecha: "28/08/2023",
      descripcion: "La ley de la caída de los cuerpos",
    },
    {
      nombreCreador: "Isaac Newton",
      fecha: "28/08/2023",
      descripcion: "La ley de la gravitación universal",
    },
    {
      nombreCreador: "Grace Hopper",
      fecha: "28/08/2023",
      descripcion: "El primer compilador",
    },
    {
      nombreCreador: "Albert Einstein",
      fecha: "28/08/2023",
      descripcion: "La teoría de la relatividad",
    },
  ];

  return (
    <Layout title="Inventory List">
      {data.map((inventory: any, index: number) => (
        <Card
          className="py-4"
          key={index}
          style={{ marginBottom: "20px", backgroundColor: "#ffffff80" }}
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-bold text-large">{inventory.nombreCreador}</p>
            <small className="text-default-500" style={{ color: "black" }}>
              {inventory.fecha}
            </small>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>
              Descripción
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div>{inventory.descripcion}</div>
          </CardBody>
        </Card>
      ))}
    </Layout>
  );
};

export default ListInvetoryPage;
