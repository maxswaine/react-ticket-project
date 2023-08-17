export type TeamMember = {
  id: number;
  name: string;
  role: string;
  profile: Profile;
};

export type Profile = {
  experience: string;
  department: string;
  techstack: string[];
  profilePicture: string;
}
