import "./ProfileCard.scss";
import { TeamMember } from "../../types/Team";
import NameCard from "../NameCard/NameCard";
import { useParams } from "react-router-dom";

type ProfileCardProps = {
  teamMembers: TeamMember[];
};

const ProfileCard = ({ teamMembers }: ProfileCardProps) => {
  const { id } = useParams();

  if (id === undefined) return <p>Employee ID not provided</p>;

  const memberId = parseInt(id);
  const member = teamMembers.find((teamMember) => teamMember.id === memberId);

  if (!member) return <p>Cannot find employee with that id</p>;

  return <NameCard teamMember={member} />;
};

export default ProfileCard;
