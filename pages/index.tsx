import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";

import { Layout } from "../components/layouts";

import { Invention } from "./create-invention";

import { getInventions } from "@/services/inventions";

import "hover.css/css/hover-min.css";
import styles from "../styles/home.module.css";

export default function Home() {
  const [dataInvention, setDataInvention] = useState<any>([]);
  const [loadingInventios, setLoadingInventios] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingInventios(true);
      const response = await getInventions();
      setLoadingInventios(false);

      setDataInvention(response?.data);
    };
    fetchData();
  }, []);

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  console.log(dataInvention);

  return (
    <Layout title="Inventions App | Inventions">
      {loadingInventios ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 300px)",
          }}
        >
          <span className={styles.loader}></span>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          style={{ marginTop: "10px", overflowY: "hidden", padding: "20px" }}
        >
          {dataInvention?.map((invention: any, index: number) => (
            // <motion.div
            //   key={index}
            //   initial={{ opacity: 0, y: 50 }}
            //   animate={controls}
            //   custom={index}
            // >
            <Card
              className="mb-4 hvr-bob"
              key={index}
              style={{
                marginBottom: "20px",
                backgroundColor: "#ffffff80",
                cursor: "pointer",
                width: "100%",
                minHeight: "100px",
              }}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="font-bold text-large">{invention?.name}</p>
                <p className="font-bold">{invention?.inventor}</p>
                <small className="text-default-500" style={{ color: "black" }}>
                  {invention?.year}
                </small>
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Descripción
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div>{invention?.description}</div>
              </CardBody>
            </Card>
            // </motion.div>
          ))}
        </div>
      )}
    </Layout>
  );
}
