import { useState, useEffect, ChangeEvent } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import { Layout } from "../../components/layouts";

import {
  createInventionValidationForm,
  createrInventorValidation,
} from "../../lib/validations/formValidation";
import { getInvetors, postInventor } from "@/services/inventor";
import { postInvention } from "@/services/inventions";

import styles from "../../styles/home.module.css";

export interface Invention {
  invention: string;
  inventorName: string;
  inventionDate: string;
  description: string;
}

const CreateInventiosPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [selectInventor, setSelectInventor] = useState("");
  const [dataInventor, setDataInventor] = useState<any>([]);
  const [loadingInventor, setLoadingInventor] = useState(false);
  const [loadingDataInventor, setLoadingDataInventor] = useState(false);
  const [loadingInvention, setLoadingInvention] = useState(false);

  const initialValues: Invention = {
    invention: "",
    inventorName: "",
    inventionDate: "",
    description: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: createInventionValidationForm,
    onSubmit: async (values) => {
      setLoadingInvention(true);
      const response = await postInvention(
        values.inventorName,
        values.inventionDate,
        values.description,
        Number(selectInventor)
      );
      setLoadingInvention(false);

      enqueueSnackbar(response?.message, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        variant: response?.ok ? "success" : "error",
      });

      formik.resetForm();
    },
  });

  const formikInventor = useFormik({
    initialValues: {
      inventorName: "",
    },
    validationSchema: createrInventorValidation,
    onSubmit: async (values) => {
      setLoadingInventor(true);
      const response = await postInventor(values.inventorName);
      setLoadingInventor(false);

      enqueueSnackbar(response.message, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        variant: response.ok ? "success" : "error",
      });

      formikInventor.resetForm();
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoadingDataInventor(true);
      const response = await getInvetors();
      setLoadingDataInventor(false);

      setDataInventor(response?.data);
    };
    fetchData();
  }, [loadingInventor]);

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectInventor(event.target.value);
  };

  return (
    <Layout>
      <div
        style={{
          padding: "4%",
        }}
      >
        {loadingDataInventor ? (
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
          <>
            <Card
              className={`w-full mb-10 col-span-12 sm:col-span-6 ${styles["scale-in-center"]}`}
              style={{ backgroundColor: "#ffffff80" }}
            >
              <CardHeader className=" z-10 top-1 flex-col items-center">
                <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
                  Create Inventor
                </h2>
              </CardHeader>

              <CardBody>
                <form onSubmit={formikInventor.handleSubmit}>
                  <div
                    className="w-full grid grid-cols-12 gap-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Input
                      isRequired
                      name="inventorName"
                      label="Inventor's name"
                      placeholder="Enter the name of the inventor"
                      className="col-span-6 md:col-span-6 mb-4 md:mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                      value={formikInventor.values.inventorName}
                      onChange={formikInventor.handleChange}
                      validationState={
                        formikInventor.touched.inventorName &&
                        Boolean(formikInventor.errors.inventorName)
                          ? "invalid"
                          : "valid"
                      }
                      errorMessage={
                        formikInventor.touched.inventorName &&
                        formikInventor.errors.inventorName
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
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                  onClick={formikInventor.submitForm}
                  disabled={loadingInvention}
                  isLoading={loadingInventor}
                >
                  Save Inventor
                </Button>
              </CardFooter>
            </Card>

            <Card
              className={`w-full col-span-12 sm:col-span-6 ${styles["scale-in-center"]}`}
              style={{ backgroundColor: "#ffffff80" }}
            >
              <CardHeader className=" z-10 top-1 flex-col items-center">
                <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
                  Create Invention
                </h2>
              </CardHeader>

              <CardBody>
                <form onSubmit={formik.handleSubmit}>
                  <div className="w-full grid grid-cols-12 gap-4">
                    <Select
                      label="Select an inventor"
                      className="w-full col-span-12 md:col-span-4 mb-4 md:mb-0"
                      value={selectInventor}
                      onChange={(e) => handleChangeSelect(e)}
                      isLoading={loadingDataInventor}
                    >
                      {dataInventor?.map((inventor: any) => (
                        <SelectItem key={inventor.id} value={inventor.id}>
                          {inventor.name}
                        </SelectItem>
                      ))}
                    </Select>

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
                        formik.touched.invention &&
                        Boolean(formik.errors.invention)
                          ? "invalid"
                          : "valid"
                      }
                      errorMessage={
                        formik.touched.invention && formik.errors.invention
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
                        formik.touched.inventionDate &&
                        formik.errors.inventionDate
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
                  disabled={loadingInventor}
                  isLoading={loadingInvention}
                >
                  Save Invention
                </Button>
              </CardFooter>
            </Card>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CreateInventiosPage;
