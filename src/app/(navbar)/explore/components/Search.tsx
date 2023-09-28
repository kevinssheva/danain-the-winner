"use client";

import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  setQueryExplore: (query: string) => void;
}

const Search = ({ setQueryExplore }: SearchProps) => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full flex gap-5 z-20">
      <div className="flex-1">
        <Input
          name="query"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          icon={AiOutlineSearch}
        />
      </div>
      <div onClick={() => setQueryExplore(query)} className="w-[7%] gradient-background rounded-xl border-[1px] border-slate-600 flex items-center justify-center cursor-pointer">
        <AiOutlineSearch size={24} />
      </div>
    </div>
  );
};

export default Search;
