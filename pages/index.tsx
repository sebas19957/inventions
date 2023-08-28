import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Layout } from "../components/layouts";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
} from "@nextui-org/react";

import styles from "../styles/home.module.css";
import { ModalNotification } from "@/components/ui";

export default function Home() {
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const handleOpenNotification = () => {
    setIsOpenNotification(true);
  };

  const hanldeCloseNotification = () => {
    setIsOpenNotification(false);
  };

  useEffect(() => {
    if (isOpenNotification) {
      const timer = setTimeout(() => {
        setIsOpenNotification(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpenNotification]);

  return (
    <Layout>
      <div style={{ padding: "5%" }}>
        <Card
          className={`w-full col-span-12 sm:col-span-6 ${styles["puff-in-center"]}`}
          style={{ backgroundColor: "#ffffff80" }}
        >
          <CardHeader className=" z-10 top-1 flex-col items-center">
            <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
              Create Inventory
            </h2>
          </CardHeader>

          <CardBody>
            <div className="w-full grid grid-cols-12 gap-4">
              <Input
                isRequired
                type="email"
                label="Email"
                placeholder="Enter your email"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                style={{ color: "black", fontSize: "18px" }}
              />

              <Input
                isRequired
                type="date"
                label="Email"
                placeholder="Enter your email"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                style={{ color: "black", fontSize: "18px" }}
              />

              <Textarea
                isRequired
                label="Description"
                labelPlacement="outside"
                placeholder="Enter your description"
                className="col-span-12 "
                style={{ color: "black", fontSize: "18px" }}
              />
            </div>
          </CardBody>

          <CardFooter className="bottom-0 border-zinc-100/50 z-10 flex-col items-center">
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="md"
              onClick={handleOpenNotification}
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              Save Inventory
            </Button>
          </CardFooter>
        </Card>
      </div>
      <ModalNotification
        isOpen={isOpenNotification}
        isClose={hanldeCloseNotification}
      />
    </Layout>
  );
}
