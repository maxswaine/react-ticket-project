type NameCardProps = {
  name: string;
  role: string;
};

const NameCard = ({ name, role }: NameCardProps) => {
  return (
      <div className="team-card">
        <h3 className="team-card__name">{name}</h3>
        <h3 className="team-card__role">{role}</h3>
      </div>
  );
};
export default NameCard;
