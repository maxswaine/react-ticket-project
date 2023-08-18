import { TeamMember } from "../../types/Team";
import "./NameCard.scss";

type NameCardProps = {
  teamMember: TeamMember;
};

const NameCard = ({ teamMember }: NameCardProps) => {
  return (
    <div className="team-card">
      <h2 className="team-card__heading--name">{teamMember.name}</h2>
      <h3 className="team-card__heading">{teamMember.role}</h3>
      <h3 className="team-card__heading">Profile</h3>
      <div className="team-card__profile">
      <h4 className="team-card__profile--heading">Experience: <span className="team-card__profile--span">{teamMember.profile.experience}</span></h4>
      <h4>Department: <span className="team-card__profile--span">{teamMember.profile.department}</span></h4>
      <h4>Tech Stack:</h4>
      <ul>
        {teamMember.profile.techstack.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      </div>
      <img
        src={teamMember.profile.profilePicture}
        alt={`${teamMember.name}'s profile picture`}
      />
    </div>
  );
};
export default NameCard;
