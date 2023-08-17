import { TeamMember } from "../../../types/Team";
import NameCard from "../../NameCard/NameCard";

type NameCardContainerProps = {
  teamMembers: TeamMember[];
};

const NameCardContainer = ({ teamMembers }: NameCardContainerProps) => {
  const team = teamMembers;

  return (
    <div className="name-card__container">
      {team.map((member) => (
        <NameCard key={member.id} name={member.name} role={member.role} />
      ))}
    </div>
  );
};
export default NameCardContainer;
