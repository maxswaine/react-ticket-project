import "./App.scss";
import Card from "./components/TicketCard/TicketCard";
import team from "./data/team";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <section className="team-card__area">
        {team.map((member) => (
          <Card key={member.id} name={member.name} role={member.role} />
        ))}
      </section>
    </div>
  );
};

export default App;
