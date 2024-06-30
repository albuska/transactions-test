import * as yup from "yup";
import { ETransactionStatus } from "../models";

export const selectStatusSchema = yup.object().shape({
  status: yup
    .mixed<ETransactionStatus>()
    .oneOf([
      ETransactionStatus.CANCELLED,
      ETransactionStatus.COMPLETED,
      ETransactionStatus.PENDING,
    ]),
});
