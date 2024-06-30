import { ChangeEvent, FC, useState } from "react";
import { Pagination } from "@mui/material";
import { ITransaction } from "../../models";
import {
  SearchInput,
  SearchInputBox,
  TransactionsTableBtn,
  TransactionsTableBtnBox,
  TransactionsTableContainer,
  TransactionsTableNoListLoadText,
  TransactionsTableTBody,
  TransactionsTableTd,
  TransactionsTableTh,
  TransactionsTableThead,
  TransactionsTableTr,
} from "./TransactionsTable.styles";
import { ITEMS_PER_PAGE } from "../../constants";
import { Icon } from "../Icon";
import { EditModal } from "../EditModal";
import { DeleteModal } from "../DeleteModal";
import { capitalizeFirstLetter } from "../../utils";

interface ITransactionsTable {
  data: ITransaction[];
  setData: React.Dispatch<React.SetStateAction<ITransaction[]>>;
  filteredData: ITransaction[];
  searchQuery: string;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TransactionsTable: FC<ITransactionsTable> = ({
  data,
  setData,
  filteredData,
  searchQuery,
  handleSearchInputChange,
}) => {
  const [page, setPage] = useState<number>(1);
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransaction | null>(null);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE - 1,
    filteredData.length - 1
  );

  const displayedData = filteredData.slice(startIndex, endIndex + 1);

  const handleChange = (
    event: ChangeEvent<unknown>,
    value: number | undefined
  ) => {
    console.log(event);
    if (value === undefined) return;
    setPage(value);
  };

  const handleStatusChange = (row: ITransaction) => {
    setSelectedTransaction(row);
    setIsOpenEditModal(true);
  };

  const handleDeleteTransaction = async (id: number) => {
    // await deleteTransaction(id);
    setIsOpenDeleteModal(false);
    setData((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.transactionid !== id)
    );
  };

  const handleSelectDeletedTransaction = (row: ITransaction) => {
    setSelectedTransaction(row);
    setIsOpenDeleteModal(true);
  };

  return (
    <>
      <TransactionsTableContainer>
        {data.length > 0 && (
          <SearchInputBox>
            <SearchInput
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search by client name"
              type="text"
              className="font-gravity"
            />
            <Icon
              name="icon-search"
              className="icon-search"
              width={15}
              height={15}
            />
          </SearchInputBox>
        )}
        {filteredData.length > 0 ? (
          <>
            <TransactionsTableThead>
              <TransactionsTableTr>
                <TransactionsTableTh style={{ width: "10%" }}>
                  Id
                </TransactionsTableTh>
                <TransactionsTableTh style={{ width: "20%" }}>
                  Status
                </TransactionsTableTh>
                <TransactionsTableTh style={{ width: "20%" }}>
                  Type
                </TransactionsTableTh>
                <TransactionsTableTh style={{ width: "20%" }}>
                  Client Name
                </TransactionsTableTh>
                <TransactionsTableTh style={{ width: "10%" }}>
                  Amount
                </TransactionsTableTh>
                <TransactionsTableTh style={{ width: "25%" }}>
                  Action
                </TransactionsTableTh>
              </TransactionsTableTr>
            </TransactionsTableThead>
            <TransactionsTableTBody>
              {displayedData.map((row) => (
                <TransactionsTableTr key={row.transactionid}>
                  <TransactionsTableTd>{row.transactionid}</TransactionsTableTd>
                  <TransactionsTableTd>
                    {capitalizeFirstLetter(row.status)}
                  </TransactionsTableTd>
                  <TransactionsTableTd>
                    {capitalizeFirstLetter(row.type)}
                  </TransactionsTableTd>
                  <TransactionsTableTd>{row.clientname}</TransactionsTableTd>
                  <TransactionsTableTd>{row.amount}</TransactionsTableTd>
                  <TransactionsTableTd>
                    <TransactionsTableBtnBox>
                      <TransactionsTableBtn
                        onClick={() => handleStatusChange(row)}
                      >
                        Edit
                      </TransactionsTableBtn>
                      <TransactionsTableBtn
                        onClick={() => handleSelectDeletedTransaction(row)}
                      >
                        Delete
                      </TransactionsTableBtn>
                    </TransactionsTableBtnBox>
                  </TransactionsTableTd>
                </TransactionsTableTr>
              ))}
            </TransactionsTableTBody>
            <Pagination
              className="MuiPaginationItem-root"
              count={pageCount}
              page={page}
              onChange={handleChange}
              defaultPage={page}
            />
          </>
        ) : (
          <TransactionsTableNoListLoadText>
            The list of transactions is not loaded. Type button "Import" to
            download csv file
          </TransactionsTableNoListLoadText>
        )}
      </TransactionsTableContainer>
      {isOpenEditModal && (
        <EditModal
          open={isOpenEditModal}
          onClose={() => setIsOpenEditModal(false)}
          selectedTransaction={selectedTransaction}
          setSelectedTransaction={setSelectedTransaction}
          data={data}
          setData={setData}
        />
      )}
      {isOpenDeleteModal && (
        <DeleteModal
          open={isOpenDeleteModal}
          onClose={() => setIsOpenDeleteModal(false)}
          handleDeleteTransaction={handleDeleteTransaction}
          selectedTransaction={selectedTransaction}
        />
      )}
    </>
  );
};

export default TransactionsTable;
