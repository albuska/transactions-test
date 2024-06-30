/* eslint-disable @typescript-eslint/ban-ts-comment */

import { ETransactionStatus, ITransaction } from "../models";

type TransactionValue = string | number | ETransactionStatus | undefined;

export const normalizeKeys = (data: ITransaction[]) => {
  return data.map((row) => {
    const normalizedRow: Partial<ITransaction> = {};
    for (const key in row) {
      // eslint-disable-next-line no-prototype-builtins
      if (row.hasOwnProperty(key)) {
        const lowerKey = key.toLowerCase() as keyof ITransaction;
        // @ts-expect-error
        let value: TransactionValue = row[key];

        if (lowerKey === "status" && typeof value === "string") {
          value = value.toLowerCase();
        }
        if (lowerKey === "type" && typeof value === "string") {
          value = value.toLowerCase();
        }
        // @ts-expect-error
        normalizedRow[lowerKey] = value;
      }
    }
    return normalizedRow as ITransaction;
  });
};
