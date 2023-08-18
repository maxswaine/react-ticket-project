import { Link } from "react-router-dom";
import { TeamMember } from "../../types/Team";
import Counter from "../Counter/Counter";
import "./TicketCard.scss";

export type CardProps = {
  teamMember: TeamMember[];
};

const TicketCard = ({ teamMember }: CardProps) => {
  return (
    <div className="ticket-card">
      {teamMember.map((individualMember) => (
        <div key={individualMember.id} className="ticket-card__info">
          <Link
            key={individualMember.id}
            to={`/profiles/${individualMember.id}`}
          >
            <div key={individualMember.id} className="ticket-card">
              <h3 className="team-card__heading">{individualMember.name}</h3>
              <h3 className="team-card__heading">{individualMember.role}</h3>
            </div>
          </Link>
          <Counter />
        </div>
      ))}
    </div>
  );
};

export default TicketCard;
