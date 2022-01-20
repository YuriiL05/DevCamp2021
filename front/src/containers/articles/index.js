import { useQuery } from 'react-query';
import { getArticles } from './api/crud';

import { ArticleForListContainer } from "./articleForList";
import { Loading } from "../../components/loading";

export const ArticlesContainer = () => {

  const { isFetching, refetch, data } = useQuery('articles', () => getArticles());
  const articles = data?.data;

  return (
    <>
      {isFetching && <Loading/>}
      {articles?.map((article) => (<ArticleForListContainer key={article.ArticleID} article={article}/>))}
    </>
  );
};