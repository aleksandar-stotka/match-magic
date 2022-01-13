import "./SingleCard.css";

export default function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card" key={card.id}>
      <div>
        <img src={card.src} className="front" alt="card front" />
        <img
          src="/img/cover.png"
          alt="cover"
          className="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
