import "./App.scss";
import team from "./data/team";
import Nav from "./components/Nav/Nav";
import TicketCardLayout from "./components/Container/TicketCardContainer/TicketCardContainer";
import { HashRouter, Route, Routes } from "react-router-dom";
import NameCardContainer from "./components/Container/NameCardContainer/NameCardContainer";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Nav />
        <Routes>
          <Route
            path="/tickets"
            element={<TicketCardLayout teamMembers={team} />}
          />
          <Route path="/" element={<NameCardContainer teamMembers={team} />} />
          <Route
            path="/profiles/:id"
            element={<ProfileCard teamMember={team} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
