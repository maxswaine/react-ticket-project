import { Link } from "react-router-dom";
import { TeamMember } from "../../types/Team";
import Counter from "../Counter/Counter";
import NameCard from "../NameCard/NameCard";
import "./TicketCard.scss";

export type CardProps = {
  teamMember: TeamMember[];
};

const TicketCard = ({ teamMember }: CardProps) => {
  return (
    <div>
      {teamMember.map((individualMember) => (
        <Link key={individualMember.id} to={`/profiles/${individualMember.id}`}>
          <div key={individualMember.id} className="ticket-card">
            <NameCard teamMember={individualMember} />
            <Counter />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TicketCard;
