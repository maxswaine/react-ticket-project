import { TeamMember } from "../../../types/Team";
import "./NameCardContainer.scss";
import { Link } from "react-router-dom";

type NameCardContainerProps = {
  teamMembers: TeamMember[];
};

const NameCardContainer = ({ teamMembers }: NameCardContainerProps) => {
  const team = teamMembers;

  return (
    <div className="name-card__container">
      {team.map((member) => (
        <Link key={member.id} to={`/profiles/${member.id}`}>
          <h2 className="name-card__header">{member.name}</h2>
        </Link>
      ))}
    </div>
  );
};
export default NameCardContainer;
