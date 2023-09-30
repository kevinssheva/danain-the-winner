"use client";

import { useCallback, useState, useEffect } from "react";
import Filter from "./Filter";
import ListCompany from "./ListCompany";
import Search from "./Search";
import Sort from "./Sort";
import { useRouter } from "next/navigation";
import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";
import Loader from "@/components/Loader";

const Explore = () => {
  const [showSort, setShowSort] = useState(false);
  const [renderSort, setRenderSort] = useState(false);
  const router = useRouter();
  const [query, setQuery] = useState<string | null>("");
  const [category, setCategory] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000000000);
  const [sort, setSort] = useState("" as "HIGHEST" | "LOWEST");

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

  const handleClose = useCallback(() => {
    setShowSort(false);
    setTimeout(() => {
      setRenderSort(false);
    }, 300);
  }, []);

  const handleOpen = useCallback(() => {
    setRenderSort(true);
    setTimeout(() => {
      setShowSort(true);
    }, 100);
  }, []);

  return (
    <div className="container mx-auto my-20 z-20">
      <Search setQueryExplore={setQuery} />
      <div className="mt-5 mb-10">
        <Filter
          toogleClose={handleClose}
          toogleOpen={handleOpen}
          showSort={showSort}
          setCategoryExplore={setCategory}
        />
        <div
          className={`${showSort ? "scale-y-100" : "scale-y-0"} ${
            renderSort ? "block" : "hidden"
          } transition duration-300 origin-top`}
        >
          <Sort
            isShow
            setMinPriceExplore={setMinPrice}
            setMaxPriceExplore={setMaxPrice}
            setSortExplore={setSort}
          />
        </div>
      </div>
      {data?.filteredCompanies?.length > 0 ? (
        <ListCompany
          filteredCompanies={data?.filteredCompanies}
          minPrice={minPrice}
          maxPrice={maxPrice}
          sort={sort}
        />
      ) : isLoading ? (
        <Loader />
      ) : error ? (
        <div className="text-center">Error</div>
      ) : (
        <div className="text-center">No Company Available.</div>
      )}
    </div>
  );
};

export default Explore;
