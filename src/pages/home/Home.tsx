import "./home.scss";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/DataContext";
import { getNews } from "../../api/Api";
import { Article } from "../../components/news/article/Article";
import { Filters } from "../../components/filters/Filters";
import { Countries } from "../../enums/Countries";

const Home = () => {
  const { allData, setAllData, filters } = useGlobalContext();

  const handleNews = () => {
    getNews(filters.country, filters.pageSize).then((res) => {
      setAllData(res.articles);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("filters", JSON.stringify(filters));
    handleNews();
  }, [filters]);

  return (
    <>
      <section className="home-entry">
        <h2 className="home-entry-title">
          Wyświetlono {filters.pageSize} najnowszych wiadomości dla kraju: {Countries[filters.country?.toUpperCase() as keyof typeof Countries]}
        </h2>
      </section>
      <section className="home-filters">
        <Filters />
      </section>
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
