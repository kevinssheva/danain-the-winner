// import axios from "axios";
import { Transaction } from "@prisma/client";
import { prisma } from "@/app/lib/prisma";

export const getAllTransaction = async () => {
    try {
        // const { data } = await axios.get(`/api/v1/transaction/}`);

        // const { transactions }: { transactions: Transaction[] } = data;

        const transactions = await prisma.transaction.findMany();

        return transactions;
    } catch (error) {
        console.error("Error retrieving transactions:", error);
        return [];
    }
};