interface IColumn {
  id: number;
  key: string;
  label: string;
}

interface IStatusTransactions {
  id: number;
  value: string;
  label: string;
}

export const ITEMS_PER_PAGE = 10;

export const COLUMNS: IColumn[] = [
  { id: 0, key: "transactionid", label: "ID" },
  { id: 1, key: "status", label: "Status" },
  { id: 2, key: "type", label: "Type" },
  { id: 3, key: "clientname", label: "Client Name" },
  { id: 4, key: "amount", label: "Amount" },
];

export const STATUS_TRANSACTIONS: IStatusTransactions[] = [
  { id: 0, value: "pending", label: "Pending" },
  { id: 1, value: "completed", label: "Completed" },
  { id: 2, value: "cancelled", label: "Cancelled" },
];
