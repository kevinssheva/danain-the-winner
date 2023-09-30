"use client";

import Button from "@/components/Button";
import CompanyCard from "./CompanyCard";
import Link from "next/link";

const dataCompany = [
  {
    id: "1cadb159-10a5-4205-9458-f3507e188a34",
    name: "Tech Innovators Inc.",
    description:
      "Tech Innovators Inc. is a cutting-edge technology company specializing in AI-driven solutions for businesses. Our mission is to transform industries through innovation, offering scalable AI products that enhance productivity and decision-making.",
    companyImage:
      "https://media.licdn.com/dms/image/D4D03AQEa_46hlyHlFQ/profile-displayphoto-shrink_800_800/0/1681820178413?e=2147483647&v=beta&t=Ggbp71w2oQP8wEnr3FSvOujPcvyJSrmhTFNfT28S3TU",
    ownerImage:
      "https://danain-win.s3.ap-southeast-1.amazonaws.com/profilePicture/1696008969933-OSKM.jpg",
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
    name: "GreenEco Solutions",
    description:
      "GreenEco Solutions is a sustainability-focused company dedicated to providing eco-friendly products and services. Our range includes energy-efficient solutions, renewable energy installations, and green building technologies, all aimed at reducing our carbon footprint.",
    companyImage: "/landing/company_1.jpg",
    ownerImage: "/profile.jpg",
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
    description:
      "HealthTech Pro is a leading healthcare technology company on a mission to improve patient care through digital innovation. We develop state-of-the-art health management platforms, enabling healthcare providers to deliver more efficient and patient-centric services.",
    companyImage: "/landing/company_1.jpg",
    ownerImage: "/profile.jpg",
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
          <Link href={`/startupdetail/${company.id}`}>
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
