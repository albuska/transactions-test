/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChangeEvent, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import Papa, { ParseResult, ParseError } from "papaparse";
import { TransactionsTable } from "../TransactionsTable";
import {
  ExportCheckboxLabel,
  ExportCheckboxesContainer,
  HiddenLoadCsvInput,
  TransactionBoardBtn,
  TransactionBoardBtnBox,
  TransactionBoardContainer,
  TransactionBoardContainerTopBox,
  TransactionBoardMainBoxLeft,
  TransactionBoardMainInsideBox,
  TransactionBoardOption,
  TransactionBoardSelect,
  TransactionBoardTable,
  TransactionBoardTbody,
  TransactionBoardThTitle,
  TransactionBoardThead,
  TransactionBoardTrTitle,
} from "./transactionBoard.styles";
import { ITransaction } from "../../models";
import { normalizeKeys } from "../../utils";
import { COLUMNS } from "../../constants";

const TransactionBoard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<ITransaction[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("clientname");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [selectedColumns, setSelectedColumns] = useState<string[]>([
    "transactionid",
    "status",
    "type",
    "clientname",
    "amount",
  ]);

  const handleColumnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedColumns((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((col) => col !== value)
    );
  };

  const handleChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(event.target.value);
    };
  };

  const filteredTransactions = useMemo(() => {
    let filteredData = data;

    if (statusFilter) {
      filteredData = filteredData.filter(
        (transaction) => transaction.status === statusFilter
      );
    }

    if (typeFilter) {
      filteredData = filteredData.filter(
        (transaction) => transaction.type === typeFilter
      );
    }

    if (searchQuery) {
      filteredData = filteredData.filter((transaction) =>
        transaction.clientname.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filteredData.sort((a, b) => {
      if (sortBy === "clientname") {
        const nameA = a.clientname.toLowerCase();
        const nameB = b.clientname.toLowerCase();
        if (nameA < nameB) return sortOrder === "asc" ? -1 : 1;
        if (nameA > nameB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      } else if (sortBy === "amount") {
        const amountA =
          typeof a.amount === "string"
            ? parseFloat(a.amount.replace("$", ""))
            : 0;
        const amountB =
          typeof b.amount === "string"
            ? parseFloat(b.amount.replace("$", ""))
            : 0;
        return sortOrder === "asc" ? amountA - amountB : amountB - amountA;
      }
      return 0;
    });

    return filteredData;
  }, [data, statusFilter, typeFilter, searchQuery, sortBy, sortOrder]);

  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      if (!file.name.endsWith(".csv")) {
        toast.error("Select a CSV file");
        return;
      }
      // @ts-expect-error
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (results: ParseResult<ITransaction>) => {
          const normalizedData = normalizeKeys(results.data);
          setData(normalizedData);
        },
        error: (error: ParseError) => {
          console.error("Error parsing CSV file", error);
        },
      });
    }
  };

  const handleExportClick = () => {
    const filteredData = filteredTransactions.map((transaction) => {
      const selectedTransaction: Partial<ITransaction> = {};
      selectedColumns.forEach((col) => {
        // @ts-expect-error
        selectedTransaction[col as keyof ITransaction] =
          transaction[col as keyof ITransaction];
      });
      return selectedTransaction;
    });

    const csv = Papa.unparse(filteredData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "transactions.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <TransactionBoardContainer className="main-container">
      <TransactionBoardContainerTopBox></TransactionBoardContainerTopBox>
      <TransactionBoardMainBoxLeft>
        <TransactionBoardTable>
          <TransactionBoardThead>
            <TransactionBoardTrTitle>
              <TransactionBoardThTitle>Transactions</TransactionBoardThTitle>
            </TransactionBoardTrTitle>
          </TransactionBoardThead>
          <TransactionBoardTbody>
            <tr>
              <td> </td>
            </tr>
          </TransactionBoardTbody>
        </TransactionBoardTable>
        <div style={{ width: "75%" }}>
          <TransactionBoardMainInsideBox>
            <TransactionBoardSelect
              onChange={handleChange(setStatusFilter)}
              placeholder="Status"
            >
              <TransactionBoardOption value="pending">
                Pending
              </TransactionBoardOption>
              <TransactionBoardOption value="completed">
                Completed
              </TransactionBoardOption>
              <TransactionBoardOption value="cancelled">
                Cancelled
              </TransactionBoardOption>
            </TransactionBoardSelect>

            <TransactionBoardSelect
              onChange={handleChange(setTypeFilter)}
              placeholder="Type"
            >
              <TransactionBoardOption value="refill">
                Refill
              </TransactionBoardOption>
              <TransactionBoardOption value="withdrawal">
                Withdrawal
              </TransactionBoardOption>
            </TransactionBoardSelect>

            <TransactionBoardSelect
              onChange={handleChange(setSortBy)}
              placeholder="Sort by"
            >
              <TransactionBoardOption value="clientname">
                Client name
              </TransactionBoardOption>
              <TransactionBoardOption value="amount">
                Amount
              </TransactionBoardOption>
            </TransactionBoardSelect>

            <TransactionBoardSelect
              onChange={handleChange(setSortOrder)}
              placeholder="Order"
            >
              <TransactionBoardOption value="asc">
                Ascending
              </TransactionBoardOption>
              <TransactionBoardOption value="desc">
                Descending
              </TransactionBoardOption>
            </TransactionBoardSelect>

            <TransactionBoardBtnBox>
              <TransactionBoardBtn onClick={handleImportClick}>
                Import
                <HiddenLoadCsvInput
                  type="file"
                  ref={fileInputRef}
                  accept=".csv"
                  onChange={handleFileChange}
                />
              </TransactionBoardBtn>
              <div>
                <TransactionBoardBtn
                  onClick={handleExportClick}
                  disabled={filteredTransactions.length === 0}
                >
                  Export
                </TransactionBoardBtn>
                <ExportCheckboxesContainer>
                  {COLUMNS.map((col) => (
                    <ExportCheckboxLabel key={col.id}>
                      <input
                        type="checkbox"
                        value={col.key}
                        checked={selectedColumns.includes(col.key)}
                        onChange={handleColumnChange}
                        className="export-checkbox"
                      />
                      {col.label}
                    </ExportCheckboxLabel>
                  ))}
                </ExportCheckboxesContainer>
              </div>
            </TransactionBoardBtnBox>
          </TransactionBoardMainInsideBox>
          <TransactionsTable
            filteredData={filteredTransactions}
            data={data}
            setData={setData}
            searchQuery={searchQuery}
            handleSearchInputChange={handleChange(setSearchQuery)}
          />
        </div>
      </TransactionBoardMainBoxLeft>
    </TransactionBoardContainer>
  );
};

export default TransactionBoard;
