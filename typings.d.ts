//Since this file is called typings.d.ts, we don't need to import it throughout the application.
//We just use the types defined here as though as they were defined in the same file
// The type Category can have only the values defined bellow:
type Category = 
|"general"
|"business"
|"entertainment"
|"health"
|"science"
|"sports"
|"technology";

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
}

type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title : string;
    url: string;
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[];
}