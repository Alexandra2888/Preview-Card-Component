import { useState } from "react";

const Article = ({ img, name, para, btn, type }) => {
    const [readMore, setReadMore] = useState(false);

  let buttonClass = "main__content-btn";
  if (type === "sedan") {
    buttonClass += " main__content-btn--sedan";
  } else if (type === "suv") {
    buttonClass += " main__content-btn--suv";
  } else if (type === "luxury") {
    buttonClass += " main__content-btn--luxury";
  }

  let articleClass = "main__content";
  if (type === "sedan") {
    articleClass += " main__content-sedan";
  } else if (type === "suv") {
    articleClass += " main__content-suv";
  } else if (type === "luxury") {
    articleClass += " main__content-luxury";
  }

  return (
    <article className="main">
      <div className={articleClass}>
        <img src={img} alt={name} className="main__content-img" />
        <h2 className="main__content-title">{name}</h2>
        <p className="main__content-para">
          {readMore ? para : `${para.substring(0, 60)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button className={buttonClass}>{btn}</button>
      </div>
    </article>
  );
};

export default Article;
