import { Modal } from "@mui/material";
import { FC } from "react";
import { Icon } from "../Icon";
import {
  DeleteBtn,
  DeleteBtnsBox,
  DeleteModalContainer,
  DeleteText,
} from "./deleteModal.styles";
import { ITransaction } from "../../models";

interface IDeleteModal {
  onClose: () => void;
  open: boolean;
  handleDeleteTransaction: (id: number) => Promise<void>;
  selectedTransaction: ITransaction | null;
}

const DeleteModal: FC<IDeleteModal> = ({
  onClose,
  open,
  handleDeleteTransaction,
  selectedTransaction,
}) => {
  if (!selectedTransaction) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <DeleteModalContainer>
        <Icon
          name="icon-cross"
          className="icon-cross"
          onClick={onClose}
          size={"0px"}
        />
        <DeleteText>
          Are you sure you want to delete this transaction?
        </DeleteText>
        <DeleteBtnsBox>
          <DeleteBtn
            onClick={() =>
              handleDeleteTransaction(selectedTransaction.transactionid)
            }
          >
            Delete
          </DeleteBtn>
          <DeleteBtn onClick={onClose}>Cancel</DeleteBtn>
        </DeleteBtnsBox>
      </DeleteModalContainer>
    </Modal>
  );
};
export default DeleteModal;
