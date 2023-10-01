"use client";

import Button from "@/components/Button";
import CompanyCard from "./CompanyCard";
import Link from "next/link";

const dataCompany = [
  {
    id: "1cadb159-10a5-4205-9458-f3507e188a34",
    name: "ANGIN",
    headline:
      "Elevating Dreams, Empowering Entrepreneurs: ANGIN Your Partner in Progress",
    description:
      "ANGIN, short for Angel Investment Network Indonesia, is a startup that originated as a project within a USAID-funded nonprofit entity named GEPI (Global Entrepreneurship Program Indonesia) in 2011. In 2016, it transitioned into a for-profit venture, becoming a key player in Indonesia's entrepreneurial ecosystem. Over the years, ANGIN has grown to become the largest investor network in Indonesia, supporting more than 35 startups and collaborating with prominent clients such as UNDP and OXFAM. Their mission centers around supporting Indonesia's economic development by investing in emerging entrepreneurs and introducing best practices in early-stage investments. ANGIN is committed to expanding its impact beyond investments through services like ANGIN Advisory and equity crowdfunding.",
    companyImage:
      "https://www.angin.id/wp-content/uploads/2021/12/ANGIN-Indonesia-Women-Fund-3.png",
    ownerImage:
      "https://i.pinimg.com/564x/48/fc/4f/48fc4f9c1017917339ac9964a961da80.jpg",
    price: "50000000",
    totalInvestors: 5,
    categories: [
      {
        id: "1cadb159-10a5-4205-9458-f3507e188a34",
        name: "AI",
        color: "#7B00FF",
      },
      {
        id: "1cadb159-10a5-4205-9458-f3507e188a34",
        name: "Technology",
        color: "#A31AD3",
      },
    ],
  },
  {
    id: "300cab27-811a-4525-9bf3-9719859ac619",
    name: "ecoearth Solution",
    headline:
      "sustainability-focused company dedicated to providing eco-friendly products and services",
    description:
      "GreenEco Solutions is a sustainability-focused company dedicated to providing eco-friendly products and services. Our range includes energy-efficient solutions, renewable energy installations, and green building technologies, all aimed at reducing our carbon footprint.",
    companyImage:
      "https://i.pinimg.com/564x/55/80/a0/5580a07d7143f09e58f40ac8c95dc549.jpg",
    ownerImage:
      "https://i.pinimg.com/564x/f6/a5/ef/f6a5efe005d1b19539af6ffb56e90a97.jpg",
    price: "100000000",
    totalInvestors: 5,
    categories: [
      {
        id: "1cadb159-10a5-4205-9458-f3507e188a34",
        name: "Agriculture",
        color: "#00FFA6",
      },
      {
        id: "1cadb159-10a5-4205-9458-f3507e188a34",
        name: "Technology",
        color: "#A31AD3",
      },
    ],
  },
  {
    id: "428cc642-a89b-4abd-8e32-1bbf0baac0a0",
    name: "HealthTech Pro",
    headline:
      "enabling healthcare providers to deliver more efficient and patient-centric services",
    description:
      "HealthTech Pro is a leading healthcare technology company on a mission to improve patient care through digital innovation. We develop state-of-the-art health management platforms, enabling healthcare providers to deliver more efficient and patient-centric services.",
    companyImage:
      "https://i.pinimg.com/564x/cc/d0/ec/ccd0ec92f5520eff0eadb570fd0b6e11.jpg",
    ownerImage:
      "https://i.pinimg.com/564x/ed/be/52/edbe521d14d0e1ff5201f8bbca431374.jpg",
    price: "100000000",
    totalInvestors: 7,
    categories: [
      {
        id: "1cadb159-10a5-4205-9458-f3507e188a34",
        name: "HealthNFitness",
        color: "#FF0084",
      },
      {
        id: "1cadb159-10a5-4205-9458-f3507e188a34",
        name: "Technology",
        color: "#A31AD3",
      },
    ],
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen relative container mx-auto py-20 text-center z-20">
      <h1 className="font-neuro text-4xl md:text-5xl">
        Explore Startups Raising Now
      </h1>
      <div className="w-full flex gap-10 mt-10 mb-16 justify-center flex-wrap">
        {dataCompany.map((company) => (
          <Link key={company.id} href={`/startupdetail/${company.id}`}>
            <CompanyCard
              key={company.id}
              name={company.name}
              description={company.description}
              companyImage={company.companyImage}
              ownerImage={company.ownerImage}
              price={company.price}
              totalInvestors={company.totalInvestors}
              categories={company.categories}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/explore">
          <Button
            text="Explore More Startup"
            isPrimary
            onClick={() => {}}
            isGradient
            isBig
          />
        </Link>
      </div>
    </div>
  );
};

export default Explore;
