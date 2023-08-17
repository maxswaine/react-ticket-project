import "./App.scss";
import team from "./data/team";
import Nav from "./components/Nav/Nav";
import TicketCardLayout from "./components/Container/TicketCardContainer/TicketCardContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NameCardContainer from "./components/Container/NameCardContainer/NameCardContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route
            path="/tickets"
            element={<TicketCardLayout teamMembers={team} />}
          />
          <Route path="/" element={<NameCardContainer teamMembers={team} />} />
          <Route
            path="profiles"
            element={<NameCardContainer teamMembers={team} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
