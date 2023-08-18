import { TeamMember } from "../../types/Team";
import NameCard from "../NameCard/NameCard";
import { useParams } from "react-router-dom";

type ProfileCardProps = {
  teamMember: TeamMember[];
};

const ProfileCard = ({ teamMember }: ProfileCardProps) => {
  const { id } = useParams<{ id: string }>();

  if (id === undefined) {
    return <div>Invalid profile ID.</div>;
  }

  const selectedTeamMember = teamMember.find(
    (member) => member.id === parseInt(id)
  );

  if (selectedTeamMember === undefined) {
    return <div>Team member not found.</div>;
  }

  return <NameCard teamMember={selectedTeamMember} />;
};

export default ProfileCard;
