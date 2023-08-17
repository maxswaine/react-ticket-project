import { FormEventHandler } from "react";
import team from "../../data/team";
import {TeamMember} from "../../types/Team";

type DropdownBoxProps = {
  label: string;
  option: TeamMember[];
  handleInput: (FormEventHandler<HTMLSelectElement>);
};

const DropdownBox = ({ label, handleInput }: DropdownBoxProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
  const occurredRoles = new Set<string>();

  const filteredJob = team.filter((member) => {
    if (!occurredRoles.has(member.role)) {
      occurredRoles.add(member.role);
      return true;
    }
    return false;
  });

  return (
    <div className="dropdown-box">
      <label htmlFor={label} className="dropdown-box__label">
        {capitalizedLabel}
      </label>
      <select name="jobs" id="jobs" onChange={handleInput}>
        <option value="">Select a role</option>
        {filteredJob.map((member) => (
          <option key={member.id} value={member.role}>
            {member.role}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownBox;
