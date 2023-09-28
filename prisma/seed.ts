import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // const companies = await prisma.company.createMany({
    //     data: [
    //         {
    //             companyName: "Apple",
    //             pitchDescription: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
    //             coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1720px-Apple_logo_black.svg.png",
    //             website: "https://www.apple.com/",
    //             companyPlace: "1 Apple Park Way, Cupertino, CA 95014, United States",
    //         },
    //     ]
    // });

    const categories = await prisma.category.createMany({
        data: [
            {
                name: "Energy",
                color: "#0091FF"
            },
            {
                name: "Games",
                color: "#00FF00"
            },
            {
                name: "ARNVR",
                color: "#DDBB0A"
            },
            {
                name: "FNB",
                color: "#FF0062"
            },
            {
                name: "ClimateChange",
                color: "#00FFF2"
            },
            {
                name: "Education",
                color: "#A6FF00"
            },
            {
                name: "TravelNTourism",
                color: "#0059FF"
            },
            {
                name: "FintechNFinance",
                color: "#00FF33"
            },
            {
                name: "Technology",
                color: "#A31AD3"
            },
            {
                name: "HealthNFitness",
                color: "#FF0084"
            },
            {
                name: "Agriculture",
                color: "#00FFA6"
            },
            {
                name: "Sport",
                color: "#000000"

            },
            {
                name: "AI",
                color: "#7B00FF"
            },
            {
                name: "Sustainability",
                color: "#FFEA00"
            },
        ]
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });