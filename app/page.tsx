import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
//IMport response.json's mock data:
import response from "../response.json";

// Since this is a server component we can declare the function as async
async function HomePage() {
  // Fetch the news data
  const news: NewsResponse = response.data.myQuery; //|| (await fetchNews(categories.join(",")));
  //   Since this is a server component then this log will be shown in the terminal
  // console.log("the news>>>", news);

  //Just for testing purposes only: Set timeout for 3 seconds to wait for the loading.tsx be displayed
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
