import React from "react";
import EventForm from "../components/Forms/EventForm";
import GiftOfferingForm from "../components/Forms/GiftOfferingForm";
import HelpRequestForm from "../components/Forms/HelpRequestForm";
import InitiativeForm from "../components/Forms/InitiativeForm";
import SearchBar from "../components/Bar/SearchBar";
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <EventForm />
          </div>
          <div className="col">
            <GiftOfferingForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <HelpRequestForm />
          </div>
          <div className="col">
            <InitiativeForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SearchBar />
          </div>
        </div>
        <div className="col">
          </div>
      </div>
    </>
  );
}

export default App;
