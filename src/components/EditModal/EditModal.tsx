import { Modal } from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  EditModalContainer,
  EditModalForm,
  EditModalFormInputSubmit,
  EditModalFormInside,
  EditModalFormOption,
  EditModalFormSelect,
} from "./editModal.styles";
import { Icon } from "../Icon";
import { ETransactionStatus, ITransaction } from "../../models";
import { STATUS_TRANSACTIONS, selectStatusSchema } from "../../constants";
import { DeleteText } from "../DeleteModal/deleteModal.styles";

interface IEditModal {
  onClose: () => void;
  open: boolean;
  selectedTransaction: ITransaction | null;
  setSelectedTransaction: React.Dispatch<
    React.SetStateAction<ITransaction | null>
  >;
  data: ITransaction[];
  setData: React.Dispatch<React.SetStateAction<ITransaction[]>>;
}

interface FormValues {
  status?: ETransactionStatus;
}

const EditModal: FC<IEditModal> = ({
  onClose,
  open,
  selectedTransaction,
  setSelectedTransaction,
  data,
  setData,
}) => {
  const [shouldCloseModal, setShouldCloseModal] = useState<boolean>(false);

  const defaultStatus = useMemo(() => {
    switch (selectedTransaction?.status) {
      case ETransactionStatus.COMPLETED:
        return ETransactionStatus.COMPLETED;
      case ETransactionStatus.CANCELLED:
        return ETransactionStatus.CANCELLED;
      default:
        return ETransactionStatus.PENDING;
    }
  }, [selectedTransaction?.status]);

  const { register, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(selectStatusSchema),
    defaultValues: {
      status: defaultStatus,
    },
  });

  const onSubmit = (dataOfStatus: FormValues) => {
    let changedStatus: ETransactionStatus;

    if (dataOfStatus.status) {
      if (dataOfStatus.status === ETransactionStatus.COMPLETED) {
        changedStatus = ETransactionStatus.COMPLETED;
      } else if (dataOfStatus.status === ETransactionStatus.CANCELLED) {
        changedStatus = ETransactionStatus.CANCELLED;
      } else {
        changedStatus = ETransactionStatus.PENDING;
      }

      setSelectedTransaction((prevTransaction) => {
        if (prevTransaction) {
          const updatedTransaction = {
            ...prevTransaction,
            status: changedStatus,
          };

          const updatedData = data.map((item) =>
            item.transactionid === updatedTransaction.transactionid
              ? updatedTransaction
              : item
          );
          setData(updatedData);
          return updatedTransaction;
        }
        return prevTransaction;
      });

      setShouldCloseModal(true);
    }
  };

  useEffect(() => {
    if (shouldCloseModal && selectedTransaction) {
      onClose();
      setShouldCloseModal(false);
    }
  }, [shouldCloseModal, selectedTransaction, onClose]);

  if (!selectedTransaction) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <EditModalContainer>
        <Icon
          name="icon-cross"
          className="icon-cross"
          onClick={onClose}
          size={"0px"}
        />
        <EditModalForm onSubmit={handleSubmit(onSubmit)}>
          <EditModalFormInside>
            <DeleteText> Change the transaction status</DeleteText>
            <EditModalFormSelect {...register("status")}>
              {STATUS_TRANSACTIONS.map((status) => (
                <EditModalFormOption key={status.id} value={status.value}>
                  {status.label}
                </EditModalFormOption>
              ))}
            </EditModalFormSelect>
          </EditModalFormInside>
          <EditModalFormInputSubmit type="submit" />
        </EditModalForm>
      </EditModalContainer>
    </Modal>
  );
};

export default EditModal;
