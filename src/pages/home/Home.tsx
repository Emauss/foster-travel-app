import "./home.scss";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/DataContext";
import { getNews } from "../../api/Api";
import { Article } from "../../components/news/Article";

const Home = () => {
  const { allData, setAllData } = useGlobalContext();

  const handleNews = () => {
    getNews("pl", 10).then((res) => {
      console.log(res);
      setAllData(res.articles);
    });
  };

  useEffect(() => {
    handleNews();
  }, []);

  return (
    <>
      <section className="home-entry">
        <h2 className="home-entry-title">Wyświetlono [pageSize] najnowszych wiadomości dla kraju: [country]</h2>
      </section>
      <section className="home-filters"></section>
      <section className="home-news">
        <div className="home-news-content">
          {allData.map((article) => (
            <Article article={article} key={article.url + article.publishedAt} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
