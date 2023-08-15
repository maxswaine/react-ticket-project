import { useState } from "react";
import "./App.scss";
import Card from "./components/TicketCard/TicketCard";
import team from "./data/team";

const App = () => {

  const teamMember: Team[] = team.map(member => {
    
  })
  return (
    <section className="team-card">
      <Card />
    </section>
  );
};

export default App;
