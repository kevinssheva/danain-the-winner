import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const query = searchParams.get("query");
    const categories = searchParams.get("category");

    try {
        const companies = await prisma.company.findMany({
            where: {
                companyName: {
                    contains: query ?? "",
                    mode: "insensitive"
                },
            },
            include: {
                categories: true,
                user: true
            }
        });

        // Filter companies to ensure all specified categories are present
        const filteredCompanies = companies.filter((company) =>
            categories ? categories.split(",").every((category) => company.categories.some((companyCategory) => companyCategory.name === category)) : true
        );

        return NextResponse.json({ message: "Companies successfully retrieved", filteredCompanies }, { status: 200 });
    } catch (error) {
        console.error("Error retrieving companies:", error);
        return NextResponse.json({ error: "Error retrieving companies" }, { status: 500 });
    }
}
