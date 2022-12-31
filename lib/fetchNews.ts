import {gql} from 'graphql-request'
import sortNewsByImage from './sortNewsByImage';
// Dynamic means that every time we request, we fetch fresh values that is, the cache rule is "NO CACHE"
// Static data by default configures to use CACHE
const fetchNews = async (
    category?: Category | string,
    keywords?:string,
    isDynamic?:boolean
)=>{
    // GraphQl query
    const query = gql`
    query MyQuery(
        # Note: These types are not typescript types, they are grapqhl type definitions
        # The ! at the end of the type means that the parameter is required
        $access_key: String!
        $categories: String!
        $keywords: String
    )   {
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "us, bo"
            sort:"published_desc"
            keywords:$keywords
        ) {
        data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
        }
        pagination {
            count
            limit
            offset
            total
        }
        }
    }
    `;

    //Fetch function with Next.js 13 caching...
    // Note this url is obtained from the terminal after executing stepzen start
    const res = await fetch("https://wertheim.stepzen.net/api/worn-woodpecker/__graphql", {
        method: 'POST',
        cache: isDynamic ? "no-cache": "default",
        // next rule: If dynamic is passed then the query won't be revalidated (no cache),
        //  otherwise we'll revalidate every 20 seconds (use the last cached data and renew it if
        //  it has passed more than 20 seconds). So that we'll always be up to date with
        //  the latest news within 20 seconds.
        next: isDynamic ? {revalidate: 0} : {revalidate:20},
        headers:{
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query, 
            variables:{
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            }
        }),
    });

    console.log('Loading NEW DATA FROM API for category>>>', category, keywords);

    const newsResponse = await res.json(); 
    console.log('The newsResmponse>>>', newsResponse)
    //Sort function by images vs not images present
    const news = sortNewsByImage(newsResponse.data.myQuery);

    //return data
    return news;
}

export default fetchNews;
//Example import:
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=MEDIASTACK_ACCESS_KEY&sources=business,sports"
// or:
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=MEDIASTACK_ACCESS_KEY&countries=us%2Cbg&limit=100&offset=0&sort=published_desc"
// or this one if we want something more generic:
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=MEDIASTACK_ACCESS_KEY"