import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import News from "./component/News/News";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e26c8bb799a54820888e817b8fa53eee"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div className="App">
      <h1>Total Headlines: {articles.length}</h1>
      {
        articles.map(article =>  <News article={article}></News>)
      }
    </div>
  );
}

export default App;
