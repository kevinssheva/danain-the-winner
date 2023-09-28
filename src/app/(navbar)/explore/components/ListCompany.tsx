"use client";

import CompanyCard from "../../(site)/components/CompanyCard";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";

const postPerPage = 12;

const ListCompany = ({ filteredCompanies }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full flex flex-wrap justify-center gap-10">
        {filteredCompanies?.map((company: any) => (
          <CompanyCard
            key={company.id}
            name={company.companyName}
            headline={company.tagline}
            description={company.companyDescription}
            companyImage={company.coverPhoto}
            ownerImage={company.user.profilePicture}
            price={company.money}
            categories={company.categories}
          />
        ))}
      </div>
      <Pagination
        totalDataCount={filteredCompanies?.length || 0}
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
