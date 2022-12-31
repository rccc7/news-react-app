"use client";
// Here, in next.js 13 we call next/navigation instead of the former next/router
import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    // Here, we are mapping the article's properties into key and value pairs
    //to form the queryString (e.g: author=RCCC&category=Technology&country=us....)
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    console.log("The URL:>>>", url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
