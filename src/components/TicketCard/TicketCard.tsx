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
        <div key={individualMember.id} className="ticket-card">
          <NameCard name={individualMember.name} role={individualMember.role} />
          <Counter />
        </div>
      ))}
    </div>
  );
};


export default TicketCard;
