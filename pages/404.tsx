import { Button, Image } from "@nextui-org/react";

import { Layout } from "../components/layouts";

const Custom404 = () => {
  return (
    <Layout title="404">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 256px)",
        }}
      >
        <div>
          <div>
            <Image
              src="../static/images/404_blue.svg"
              alt="404_image"
              width={500}
              height={300}
            />
          </div>
          <div>
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Pagina no encontrada
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="md"
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
