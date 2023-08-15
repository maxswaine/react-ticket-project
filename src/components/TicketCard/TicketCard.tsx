import Counter from "../Counter/Counter";
import "./TicketCard.scss";

export type CardProps = {
  name: string;
  role: string;
};

const Card = ({ name, role }: CardProps) => {
  return (
    <div className="team-card">
      <h3 className="team-card__name">{name}</h3>
      <h3 className="team-card__role">{role}</h3>
      <Counter />
    </div>
  );
};

export default Card;
