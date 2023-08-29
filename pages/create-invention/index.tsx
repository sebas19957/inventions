import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import { Layout } from "../../components/layouts";

import { createInventionValidationForm } from "../../lib/validations/formValidation";

import styles from "../../styles/home.module.css";

export interface Invention {
  invention: string;
  inventorName: string;
  inventionDate: string;
  description: string;
}

const CreateInventiosPage = () => {
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const initialValues: Invention = {
    invention: "",
    inventorName: "",
    inventionDate: "",
    description: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: createInventionValidationForm,
    onSubmit: (values) => {
      console.log(values);
      enqueueSnackbar("Successfully registered invention", {
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        variant: "success",
      });
    },
  });

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
          className={`w-full col-span-12 sm:col-span-6 ${styles["scale-in-center"]}`}
          style={{ backgroundColor: "#ffffff80" }}
        >
          <CardHeader className=" z-10 top-1 flex-col items-center">
            <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
              Create Inventory
            </h2>
          </CardHeader>

          <CardBody>
            <form onSubmit={formik.handleSubmit}>
              <div className="w-full grid grid-cols-12 gap-4">
                <Input
                  isRequired
                  name="invention"
                  label="Invention"
                  placeholder="Enter the invention"
                  className="col-span-12 md:col-span-4 mb-4 md:mb-0"
                  style={{ color: "black", fontSize: "18px" }}
                  value={formik.values.invention}
                  onChange={formik.handleChange}
                  validationState={
                    formik.touched.invention && Boolean(formik.errors.invention)
                      ? "invalid"
                      : "valid"
                  }
                  errorMessage={
                    formik.touched.invention && formik.errors.invention
                  }
                />

                <Input
                  isRequired
                  name="inventorName"
                  label="Inventor's name"
                  placeholder="Enter the name of the inventor"
                  className="col-span-12 md:col-span-4 mb-4 md:mb-0"
                  style={{ color: "black", fontSize: "18px" }}
                  value={formik.values.inventorName}
                  onChange={formik.handleChange}
                  validationState={
                    formik.touched.inventorName &&
                    Boolean(formik.errors.inventorName)
                      ? "invalid"
                      : "valid"
                  }
                  errorMessage={
                    formik.touched.inventorName && formik.errors.inventorName
                  }
                />

                <Input
                  isRequired
                  name="inventionDate"
                  type="date"
                  label="Date invention"
                  placeholder="Enter date of invention"
                  className="col-span-12 md:col-span-4 mb-4 md:mb-0"
                  style={{ color: "black", fontSize: "18px" }}
                  value={formik.values.inventionDate}
                  onChange={formik.handleChange}
                  validationState={
                    formik.touched.inventionDate &&
                    Boolean(formik.errors.inventionDate)
                      ? "invalid"
                      : "valid"
                  }
                  errorMessage={
                    formik.touched.inventionDate && formik.errors.inventionDate
                  }
                />

                <Textarea
                  name="description"
                  label="Description"
                  placeholder="Enter a description of the invention (what it does, related fields, etc...)"
                  labelPlacement="outside"
                  className="col-span-12 "
                  style={{ color: "black", fontSize: "18px" }}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  validationState={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                      ? "invalid"
                      : "valid"
                  }
                  errorMessage={
                    formik.touched.description && formik.errors.description
                  }
                />
              </div>
            </form>
          </CardBody>

          <CardFooter className="bottom-0 border-zinc-100/50 z-10 flex-col items-center">
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="md"
              onClick={formik.submitForm}
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              Save Invention
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateInventiosPage;
