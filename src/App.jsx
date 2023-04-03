import "./App.scss";
import ArticleList from "./article-list/ArticleList";
import items from "./data.js";


function App() {
  return (
    <main>
      <ArticleList items={items} />
   </main>
  );
}

export default App;
