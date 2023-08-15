import TeamMember from "../../types/Team";
import team from "../../data/team";
import Counter from "../Counter/Counter";
import "./TicketCard.scss";

export type CardProps = {
  id: number;
  name: string;
  role: string;
};

const Card = ({ id, name, role }: TeamMember[]) => {
  const teamCard = team.map((member) => {
    return (
      <div className="team-card" key={member.id}>
        <h3 className="team-card__name">{member.name}</h3>
        <h3 className="team-card__role">{member.role}</h3>
        <Counter />
      </div>
    );
  });
  return teamCard;
};

export default Card;
