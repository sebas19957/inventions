import { useState, useCallback, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import { Layout } from "@/components/layouts";

import { createrInventorValidation } from "@/lib/validations/formValidation";
import { getInvetors, postInventor, removeInventor } from "@/services/inventor";

import styles from "../../styles/home.module.css";
import { EditIcon } from "@/assets/img/EditIcon";
import { DeleteIcon } from "@/assets/img/DeleteIcon";
import EditInventorModal from "@/components/ui/EditInventorModal";

const CreateInventorPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [dataInventor, setDataInventor] = useState<any>([]);
  const [loadingInventor, setLoadingInventor] = useState(false);
  const [loadingDataInventor, setLoadingDataInventor] = useState(false);
  const [loadingRemoveInventor, setLoadingRemoveInventor] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState({
    isOpen: false,
    data: null,
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
  }, [loadingRemoveInventor, loadingInventor, isOpenEdit]);

  const handleRemoveInventor = async (id: string) => {
    setLoadingRemoveInventor(true);
    const response = await removeInventor(id);
    setLoadingRemoveInventor(false);

    enqueueSnackbar(
      response.ok ? response.message : "Error deleting inventor",
      {
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        variant: response.ok ? "success" : "error",
      }
    );
  };

  const renderCell = useCallback((inventor: any, columnKey: React.Key) => {
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: "https://res.cloudinary.com/sebas-shop/image/upload/v1677861550/System/p9lrvjgvrgzo01m83xhf.png",
            }}
            name={inventor?.name}
          />
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon
                  onClick={() =>
                    handleOpenEdit({ id: inventor?.id, name: inventor?.name })
                  }
                />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon
                  onClick={() => handleRemoveInventor(inventor?.id)}
                />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return "Error in columnKey";
    }
  }, []);

  const columns = [
    { name: "NAME", uid: "name" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const handleOpenEdit = (data: any) => {
    setIsOpenEdit({ isOpen: true, data });
  };

  const handleCloseEdit = () => {
    setIsOpenEdit({ isOpen: false, data: null });
  };

  return (
    <Layout>
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
        <div
          style={{
            padding: "4%",
          }}
        >
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
                isLoading={loadingInventor}
              >
                Save Inventor
              </Button>
            </CardFooter>
          </Card>

          <Card
            className={`w-full mb-10 p-6 col-span-12 sm:col-span-6 ${styles["scale-in-center"]}`}
            style={{ backgroundColor: "#ffffff80" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{ fontSize: "25px", fontWeight: "bold" }}
                className="mb-4"
              >
                inventors
              </h2>
            </div>
            <Table aria-label="Example table with custom cells">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={column.uid === "actions" ? "center" : "start"}
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={dataInventor}>
                {(item: any) => (
                  <TableRow key={item.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </div>
      )}
      <EditInventorModal
        isOpen={isOpenEdit.isOpen}
        onClose={handleCloseEdit}
        data={isOpenEdit.data}
      />
    </Layout>
  );
};

export default CreateInventorPage;
