"use client";
import { useRouter } from "next/navigation";
//👆 Here, we use client because we are using the form handler handleSearch function which can only be
// called from frontend components and also because we are using the useState Hook

import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  // Here we use useRouter from next/navigation which mus be imported in Nextjs 13 and not the
  //conventional next/router which is imported for Nextjs 12.
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        placeholder="Search Keywords..."
        className="flex-1 h-14 rounded-sm placeholder-gray-500
         text-gray-500 outline-none bg-transparent dark:text-orange-400"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
