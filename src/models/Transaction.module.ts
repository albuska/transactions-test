export interface ITransaction {
  transactionid: number;
  status: ETransactionStatus;
  type: string;
  clientname: string;
  amount: string;
}

export enum ETransactionStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}
