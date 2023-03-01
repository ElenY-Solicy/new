import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./card.css";

const Main = () => {
  const [cardList, setCardList] = useState([]);

  const addCard = () => {
    const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    setCardList((prevCardLIst) => [
      ...prevCardLIst,
      {
        id: uuid(),
        list: randomNumber,
      },
    ]);
  };

  const sortCard = () => {
    setCardList(
      [].concat(cardList).sort((a, b) => {
        return a.list - b.list;
      })
    );
  };

  const deleteCards = (id) => {
    setCardList(cardList.filter((el) => el.id !== id));
  };

  return (
    <>
      <header className="header">
        <button className="btn" onClick={addCard}>
          Add Cards
        </button>
        <button className="btn" onClick={sortCard}>
          Sort Cards
        </button>
      </header>
      <div className="main">
        {cardList.map((number) => (
          <div className="cards" key={number.id}>
            {number.list}
            <span className="close" onClick={() => deleteCards(number.id)}>
              &#10005;
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
