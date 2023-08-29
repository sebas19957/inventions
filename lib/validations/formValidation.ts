import * as yup from "yup";
import messages from "./messages";

export const createInventionValidationForm = yup.object({
  invention: yup.string().required(messages.REQUIRED_FIELD),
  inventorName: yup.string().required(messages.REQUIRED_FIELD),
  inventionDate: yup.string().required(messages.REQUIRED_FIELD),
  description: yup.string().required(messages.REQUIRED_FIELD),
});
