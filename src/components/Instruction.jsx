import "./instruction.css";

function Instruction() {
  return (
    <div className="instruct">
      <h2>Instruction </h2>
      <ul>
        <li>
          Add Card will add a new card with randomly generated and unique
          numbers.
        </li>
        <li>Sort Cards will sort all of the cards from lowest to highest.</li>
        <li>X icon on top right is for deleting the card</li>
      </ul>
    </div>
  );
}

export default Instruction;
