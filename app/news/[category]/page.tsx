// This page implements Dynamic routing in next.js. To implement dynamic routing we just need to create a
// folder named in this case "news" and inside that folder create another one whose name is surrounded
// by brackets (int this case "[category]") and inside that folder create this file "page.tsx". This way,
// we can route any link with this pattern: "news/[category]" for example "news/sports" or "news/business"
// so on and so forth. Finally, the content of that dynamic page is defined here based on the route's
// assigned value to category
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";
import { categories } from "../../../constants";

type Props = {
  params: { category: Category };
};
async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  // foreach category return an object with the key as the id (category)
  //   and its value the category as well
  return categories.map((category) => ({ category: category }));
  // localhost:3000/news/business
  // localhost:3000/news/sports
  // localhost:3000/news/general
  // localhost:3000/news/health
  //.... and so forth
  //So next.js knows to go ahead and prebuild these pages....
  //After that it'll then keep these cache values up to date
}
