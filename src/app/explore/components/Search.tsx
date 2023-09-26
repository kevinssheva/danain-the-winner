"use client";

import Input from "@/components/Input";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
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
      <div className="w-[7%] gradient-background rounded-xl border-[1px] border-slate-600 flex items-center justify-center cursor-pointer">
        <AiOutlineSearch size={24} />
      </div>
    </div>
  );
};

export default Search;
