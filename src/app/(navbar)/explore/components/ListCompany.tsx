"use client";

import CompanyCard from "../../(site)/components/CompanyCard";
import Pagination from "@/components/Pagination/Pagination";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Transaction } from "@prisma/client";

const postPerPage = 12;

const ListCompany = ({
  filteredCompanies,
  transactions,
  minPrice,
  maxPrice,
  sort,
}: any) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [startupData, setStartupData] = useState([]);

  useEffect(() => {
    // Function to calculate total money for each startup
    const calculateTotalMoney = () => {
      let totalMoneyMap: any = {};

      transactions.forEach((transaction: Transaction) => {
        const companyId = transaction.companyId;
        const amount = parseFloat(transaction.amount);

        if (!totalMoneyMap[companyId]) {
          totalMoneyMap[companyId] = 0;
        }
        totalMoneyMap[companyId] += amount;
      });

      return totalMoneyMap;
    };

    const calculateTotalInvestors = () => {
      const totalInvestorsMap: any = {};

      // Iterate through transactions to count distinct investors for each startup
      transactions.forEach((transaction: Transaction) => {
        if (!totalInvestorsMap[transaction.companyId]) {
          totalInvestorsMap[transaction.companyId] = new Set();
        }

        totalInvestorsMap[transaction.companyId].add(transaction.userId);
      });

      // Convert the Sets to the total number of investors
      Object.keys(totalInvestorsMap).forEach((companyId) => {
        totalInvestorsMap[companyId] = totalInvestorsMap[companyId].size;
      });

      return totalInvestorsMap;
    };

    // Calculate total money earned and total investors for each startup
    const totalMoneyMap = calculateTotalMoney();
    const totalInvestorsMap = calculateTotalInvestors();

    // Merge total money and total investors information with startup data
    const mergedStartupData = filteredCompanies.map((company: any) => {
      return {
        ...company,
        totalMoneyEarned: totalMoneyMap[company.id] || 0,
        totalInvestors: totalInvestorsMap[company.id] || 0,
      };
    });

    // Filter by price range and sort by totalMoneyEarned
    const filteredAndSortedCompanies = mergedStartupData
      .filter(
        (company: any) =>
          company.totalMoneyEarned >= minPrice &&
          company.totalMoneyEarned <= maxPrice
      )
      .sort((a: any, b: any) => {
        if (sort === "HIGHEST") {
          return b.totalMoneyEarned - a.totalMoneyEarned;
        } else {
          return a.totalMoneyEarned - b.totalMoneyEarned;
        }
      });

    setStartupData(filteredAndSortedCompanies);
  }, [filteredCompanies, transactions, minPrice, maxPrice, sort]);

  const showedCompanies = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * postPerPage;
    const lastPageIndex = firstPageIndex + postPerPage;

    return startupData.slice(firstPageIndex, lastPageIndex);
  }, [startupData, currentPage]);

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full flex flex-wrap justify-center gap-10">
        {showedCompanies.length > 0 ? (
          showedCompanies.map((company: any) => (
            <Link key={company.id} href={`/startupdetail/${company.id}`}>
              <CompanyCard
                name={company.companyName}
                headline={company.tagline}
                description={company.companyDescription}
                companyImage={company.coverPhoto}
                ownerImage={company.user.profilePicture}
                price={company.totalMoneyEarned}
                totalInvestors={company.totalInvestors}
                categories={company.categories}
              />
            </Link>
          ))
        ) : (
          <div className="text-center">No Company Available.</div>
        )}
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
