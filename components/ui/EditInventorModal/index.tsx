import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import { createrInventorValidation } from "@/lib/validations/formValidation";
import { putInventor } from "@/services/inventor";

interface EditInventorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const EditInventorModal = ({
  isOpen,
  onClose,
  data,
}: EditInventorModalProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loadingInventor, setLoadingInventor] = useState(false);

  const formikInventor = useFormik({
    initialValues: {
      inventorName: "",
    },
    validationSchema: createrInventorValidation,
    onSubmit: async (values) => {
      setLoadingInventor(true);
      const response = await putInventor(data?.id, values.inventorName);
      setLoadingInventor(false);

      enqueueSnackbar(
        response.ok ? response.message : "Error updating information.",
        {
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          variant: response.ok ? "success" : "error",
        }
      );

      formikInventor.resetForm();
      onClose();
    },
  });

  useEffect(() => {
    if (isOpen) {
      formikInventor.setFieldValue("inventorName", data?.name);
    }
  }, [isOpen, data?.name]);

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edit Inventor
            </ModalHeader>
            <ModalBody>
              <form onSubmit={formikInventor.handleSubmit}>
                <div
                  className="w-full grid grid-cols-12 gap-4"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Input
                    name="inventorName"
                    label="Inventor name"
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
                    isRequired
                  />
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                onClick={formikInventor.submitForm}
                isLoading={loadingInventor}
              >
                {loadingInventor ? "saving..." : "Save Changes"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditInventorModal;
