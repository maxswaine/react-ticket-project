import { TeamMember } from "../../types/Team";

type NameCardProps = {
  teamMember: TeamMember;
};

const NameCard = ({ teamMember }: NameCardProps) => {
  return (
    <div className="team-card">
      <h3 className="team-card__heading">{teamMember.name}</h3>
      <h3 className="team-card__heading">{teamMember.role}</h3>
      <h3 className="team-card__heading">Profile</h3>
      <ul>
        <li>Experience: {teamMember.profile.experience}</li>
        <li>Department: {teamMember.profile.department}</li>
        <li>Tech Stack: {teamMember.profile.techstack}</li>
      </ul>
      <img
        src={teamMember.profile.profilePicture}
        alt={`${teamMember.name}'s profile picture`}
      />
    </div>
  );
};
export default NameCard;
