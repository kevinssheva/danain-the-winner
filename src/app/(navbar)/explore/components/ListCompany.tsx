"use client";

import CompanyCard from "../../(site)/components/CompanyCard";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const postPerPage = 12;

const ListCompany = ({ filteredCompanies, minPrice, maxPrice, sort }: any) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // Filter by price range and sort
  filteredCompanies = filteredCompanies.filter(
    (company: any) =>
      company.money >= minPrice && company.money <= maxPrice
  ).sort((a: any, b: any) => {
    if (sort === "HIGHEST") {
      return b.money - a.money;
    } else {
      return a.money - b.money;
    }
  });

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full flex flex-wrap justify-center gap-10">
        {filteredCompanies.length > 0 ? filteredCompanies.map((company: any) => (
          <Link key={company.id} href={`/startupdetail/${company.id}`}>
            <CompanyCard
              name={company.companyName}
              headline={company.tagline}
              description={company.companyDescription}
              companyImage={company.coverPhoto}
              ownerImage={company.user.profilePicture}
              price={company.money}
              categories={company.categories}
            />
          </Link>
        )) :
          <div className="text-center">No Company Available.</div>
        }
      </div>
      <Pagination
        totalDataCount={filteredCompanies.length || 0}
        currentPage={currentPage}
        pageSize={postPerPage}
        onPageChange={(page) => {
          if (typeof page === "string") {
            return;
          }
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

export default ListCompany;
