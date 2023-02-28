import { useState } from "react";
import "./card.css";
import { v4 as uuid } from "uuid";

function Main() {
  const [cardList, setCardList] = useState([]);
  const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  function addCard() {
    setCardList((prevCardLIst) => [
      ...prevCardLIst,
      {
        id: uuid(),
        list: randomNumber,
      },
    ]);
  }

  function sortCard() {
    setCardList(
      [].concat(cardList).sort((a, b) => {
        return a.list - b.list;
      })
    );
  }

  function deleteCards(e) {
    setCardList(cardList.filter((el) => el.id !== e.target.id));
    console.log(e.target.id);
  }

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
            <span className="close" id={number.id} onClick={deleteCards}>
              &#10005;
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
