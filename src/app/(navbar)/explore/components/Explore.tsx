"use client";

import Filter from "./Filter";
import ListCompany from "./ListCompany";
import Search from "./Search";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";

const Explore = () => {
  const router = useRouter();
  const swr = useSWR
  const [query, setQuery] = useState<string | null>("");
  const [category, setCategory] = useState<string[]>([]);

  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_WEB_URL +
    `/api/v1/company?query=${query}&category=${category.join(",")}`,
    fetcher
  );

  useEffect(() => {
    if (query && category.length > 0) {
      router.push(`/explore?query=${query}&category=${category.join(",")}`);
    } else if (query && category.length <= 0) {
      router.push(`/explore?query=${query}`);
    } else if (!query && category.length > 0) {
      router.push(`/explore?category=${category.join(",")}`);
    } else {
      router.push(`/explore`);
    }
  }, [query, category, router]);

  return (
    <div className="container mx-auto my-20 z-20">
      <Search setQueryExplore={setQuery} />
      <div className="mt-5 mb-10">
        <Filter setCategoryExplore={setCategory} />
      </div>
      {data?.filteredCompanies?.length > 0 ?
        <ListCompany filteredCompanies={data?.filteredCompanies} /> :
        isLoading ?
          <div className="text-center">Loading...</div> :
          error ?
            <div className="text-center">Error</div> :
            <div className="text-center">No Company Available.</div>
      }
    </div>
  );
};

export default Explore;
