import { notFound } from "next/navigation";
import React from "react";
import LiveTimestamp from "../LiveTimestamp";
// To access this page: /article
// This page preserves that is inherits the layout defined in ../layout.tsx
//IMPORTANT: Since this is a dynamic page, the containing folder's name must be surrounded by brackets []
// that is [article], otherwhise if the folder is named just as "article" it'll not work in production when deoployed to vercel
// (The following error will raise when clicking in the ReadMoreButton : "404 | This page could not be found.")
//
type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  // if there are no params then return not found
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  const article: Article = searchParams;
  console.log("The article>>>", article);

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl
            object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {article.author}</h2>
            <h2 className="font-bold pl-4">{article.source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>
          <p className="pt'4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
