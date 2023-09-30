import axios from "axios";
import { Transaction } from "@prisma/client";

export const getAllTransaction = async () => {
    try {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/transaction/}`);

        const { transactions }: { transactions: Transaction[] } = data;

        return transactions;
    } catch (error) {
        console.error("Error retrieving transactions:", error);
        return [];
    }
};