import { IArticle } from "../../../interfaces/api/IArticle";
import { Excerpt } from "../excerpt/Excerpt";

export const Article = ({ article }: { article: IArticle }) => {
  return (
    <a href={article.url} title={article.title} target="_blank" className="home-news-content-single">
      <img src={article.urlToImage} alt={article.title} />
      <div className="article">
        <h4 className="article-title">{article.title}</h4>
        <small className="article-date">{new Date(article.publishedAt).toLocaleDateString("pl-PL")}</small>
        <Excerpt description={article.description} />
      </div>
    </a>
  );
};
