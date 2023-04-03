import Article from "../article/Article";


const ArticleList = ({ items }) => {
  return (
    <main className="main">
      {items.map((item, index) => {
        let type = "";
        if (index === 0) {
          type = "sedan";
        } else if (index === 1) {
          type = "suv";
        } else if (index === 2) {
          type = "luxury";
        }
        return <Article key={item.id} {...item} type={type} />;
      })}
    </main>
  );
};

export default ArticleList;
