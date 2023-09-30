import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    if (!body) {
        return NextResponse.json({ error: "Missing body" }, { status: 400 });
    }

    let paymentMethodAfterSyntaxChange = "";

    const { companyId, userId, paymentMethod, amount, totalAmount, bankName, accountType, accountName, accountNumber, cardNumber, expirationDate } = body;

    if (!companyId) {
        return NextResponse.json({ error: "companyId not provided" }, { status: 400 });
    }

    if (!userId) {
        return NextResponse.json({ error: "userId not provided" }, { status: 400 });
    }

    if (!paymentMethod) {
        return NextResponse.json({ error: "paymentMethod not provided" }, { status: 400 });
    }

    if (!amount) {
        return NextResponse.json({ error: "amount not provided" }, { status: 400 });
    }

    if (!totalAmount) {
        return NextResponse.json({ error: "totalAmount not provided" }, { status: 400 });
    }

    if (paymentMethod === "BANK") {
        if (!bankName) {
            return NextResponse.json({ error: "bankName not provided" }, { status: 400 });
        }

        if (!accountType) {
            return NextResponse.json({ error: "accountType not provided" }, { status: 400 });
        }

        if (!accountName) {
            return NextResponse.json({ error: "accountName not provided" }, { status: 400 });
        }

        if (!accountNumber) {
            return NextResponse.json({ error: "accountNumber not provided" }, { status: 400 });
        }
    }


    if (paymentMethod === "CREDIT") {
        if (!cardNumber) {
            return NextResponse.json({ error: "cardNumber not provided" }, { status: 400 });
        }

        if (!expirationDate) {
            return NextResponse.json({ error: "expirationDate not provided" }, { status: 400 });
        }
    }

    if (paymentMethod === "BANK") {
        paymentMethodAfterSyntaxChange = "BANKTRANSFER";
    } else {
        paymentMethodAfterSyntaxChange = "CREDITCARD";
    }

    try {
        const transaction = await prisma.transaction.create({
            data: {
                user: { connect: { id: userId } },
                company: { connect: { id: companyId } },

                paymentMethod: paymentMethodAfterSyntaxChange as any,
                amount: String(amount),
                totalAmount: String(totalAmount),

                bankName: bankName,
                accountType: accountType,
                accountName: accountName,
                accountNumber: accountNumber,

                cardNumber: cardNumber,
                expirationDate: expirationDate,
                status: "ACTIVE",
            }
        });

        return NextResponse.json({ message: "Transaction successfully created", transaction }, { status: 200 });
    } catch (error) {
        console.error("Error creating transaction:", error);
        return NextResponse.json({ error: "Error creating transaction" }, { status: 500 });
    }
}