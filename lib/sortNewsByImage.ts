export default function sortNewsByImage(news: NewsResponse){
    const newsWithImage = news.data.filter( item=>item.image !== null);
    const newsWithoutImage = news.data.filter(item=>item.image === null);

    const sortedNewsResponse = {
        // The pagination should be the same
        pagination: news.pagination,
        //But now, the new data array will consist with the news with image first followed 
        //by the news without images
        data: [...newsWithImage, ...newsWithoutImage],
    }

    return sortedNewsResponse;
}