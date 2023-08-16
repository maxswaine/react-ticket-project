import "./App.scss";
import Card from "./components/TicketCard/TicketCard";
import team from "./data/team";
import Nav from "./components/Nav/Nav";
import CardLayout from "./components/Container/CardContainer";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <section className="team-card__area">
        <CardLayout teamMembers={team} />
      </section>
    </div>
  );
};

export default App;
