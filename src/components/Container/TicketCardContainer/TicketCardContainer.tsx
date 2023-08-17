import SearchBox from "../../SearchBox/SearchBox";
import DropdownBox from "../../DropdownBox/DropdownBox";
import TicketCard from "../../TicketCard/TicketCard";
import { TeamMember } from "../../../types/Team";
import { ChangeEvent, FormEvent, useState } from "react";

type CardContainerProps = {
  teamMembers: TeamMember[];
};

const TicketCardLayout = ({ teamMembers }: CardContainerProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [jobSelection, setJobSelection] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const inputToLower = event.currentTarget.value.toLowerCase();
    setSearchTerm(inputToLower);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    setJobSelection(value);
  };

  const filteredMembers = teamMembers.filter((teamMember) => {
    const nameMatches = teamMember.name.toLowerCase().includes(searchTerm);
    const roleMatches =
      jobSelection === "" || teamMember.role.includes(jobSelection);

    return nameMatches && roleMatches;
  });

  return (
    <div className="team-card">
      <SearchBox
        key="SearchBox"
        label="Team Members"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
      <DropdownBox
        key="DropBox"
        label="Job Role"
        option={teamMembers} // Pass the team members data here
        handleInput={handleChange}
      />
      {filteredMembers.map((filteredTeamMember) => (
        <TicketCard
          key={filteredTeamMember.id}
          teamMember={[filteredTeamMember]}
        />
      ))}
    </div>
  );
};
export default TicketCardLayout;
