import React from "react";
import Head from "../components/head";
import Header from '../components/header'
const AddOfferingPage = (props) => {
  return (
    <>
      <Head />
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col">Your Lokali Events</div>
          <div className="col">
            <a href="/profile">Profile</a>
          </div>
          <div className="col">
            <a href="/home">Home</a>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-md-4">
            <Events />
          </div>
          <div className="col-md-8">
            <Offers />
          </div>
        </div>
      </div>
    </>
  );
};

const Events = (props) => {
  const events = [
    {
      location: "Tel Aviv",
      date: "Wed 13 May 2020",
      info:
        "lorem ipsum test... here is some more text to try and see what this looks like when its bigger there shold be a limit to the anount of text that is show probably and then a see more option if it has a lot of information.",
    },
    {
      location: "Tel Aviv",
      date: "Wed 13 May 2020",
      info:
        "lorem ipsum test... here is some more text to try and see what this looks like when its bigger there shold be a limit to the anount of text that is show probably and then a see more option if it has a lot of information.",
    },
    {
      location: "Tel Aviv",
      date: "Wed 13 May 2020",
      info:
        "lorem ipsum test... here is some more text to try and see what this looks like when its bigger there shold be a limit to the anount of text that is show probably and then a see more option if it has a lot of information.",
    },
    {
      location: "Tel Aviv",
      date: "Wed 13 May 2020",
      info:
        "lorem ipsum test... here is some more text to try and see what this looks like when its bigger there shold be a limit to the anount of text that is show probably and then a see more option if it has a lot of information.",
    },
    {
      location: "Tel Aviv",
      date: "Wed 13 May 2020",
      info:
        "lorem ipsum test... here is some more text to try and see what this looks like when its bigger there shold be a limit to the anount of text that is show probably and then a see more option if it has a lot of information.",
    },
    {
      location: "Tel Aviv",
      date: "Wed 13 May 2020",
      info:
        "lorem ipsum test... here is some more text to try and see what this looks like when its bigger there shold be a limit to the anount of text that is show probably and then a see more option if it has a lot of information.",
    },
  ];
  return (
    <div className="m-3" style={{ maxHeight: "100vh", overflow: "auto" }}>
      {events.map((event, i) => (
        <div className="m-2 p-2" style={{ border: "3px solid orange" }} key={i}>
          <div className="container">
            <div className="row">
              <div className="col">{event.location}</div>
              <div className="col">{event.date}</div>
            </div>
            <div className="row">
              <div className="col">{event.info}</div>
            </div>
            <div className="row">
              <div className="col text-center">
                <a href="">Click to View</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h1>LOGO HERE</h1>
    </div>
  );
};

const Offers = (props) => {
  const offersArray = [
    {
      heading: "Offer Name Placeholder",
      subheading:
        "The offering item and explanation mission information is detailed here",
      content:
        "There is a character limit for the tile display, further details can be viewed by clicking on the tile and exposing a large popup dialog that appears in the center of the screen.",
      rating: 5,
      date: "22/4/2020",
    },
    {
      heading: "Offer Name Placeholder",
      subheading:
        "The offering item and explanation mission information is detailed here",
      content:
        "There is a character limit for the tile display, further details can be viewed by clicking on the tile and exposing a large popup dialog that appears in the center of the screen.",
      rating: 5,
      date: "22/4/2020",
    },
    {
      heading: "Offer Name Placeholder",
      subheading:
        "The offering item and explanation mission information is detailed here",
      content:
        "There is a character limit for the tile display, further details can be viewed by clicking on the tile and exposing a large popup dialog that appears in the center of the screen.",
      rating: 5,
      date: "22/4/2020",
    },
    {
      heading: "Offer Name Placeholder",
      subheading:
        "The offering item and explanation mission information is detailed here",
      content:
        "There is a character limit for the tile display, further details can be viewed by clicking on the tile and exposing a large popup dialog that appears in the center of the screen.",
      rating: 5,
      date: "22/4/2020",
    },
    {
      heading: "Offer Name Placeholder",
      subheading:
        "The offering item and explanation mission information is detailed here",
      content:
        "There is a character limit for the tile display, further details can be viewed by clicking on the tile and exposing a large popup dialog that appears in the center of the screen.",
      rating: 5,
      date: "22/4/2020",
    },
    {
      heading: "Offer Name Placeholder",
      subheading:
        "The offering item and explanation mission information is detailed here",
      content:
        "There is a character limit for the tile display, further details can be viewed by clicking on the tile and exposing a large popup dialog that appears in the center of the screen.",
      rating: 5,
      date: "22/4/2020",
    },
    {
      heading: "Offer Name Placeholder",
      subheading:
        "The offering item and explanation mission information is detailed here",
      content:
        "There is a character limit for the tile display, further details can be viewed by clicking on the tile and exposing a large popup dialog that appears in the center of the screen.",
      rating: 5,
      date: "22/4/2020",
    },
  ];
  return (
    <div className="m-3" style={{ maxHeight: "100vh", overflow: "auto" }}>
      <div className="row">
        <div className="col">
          <input
            style={{
              height: "30px",
              // width stretch to button
            }}
            type="text"
            placeholder="Enter your offer name here"
          />
        </div>
        <div className="col">
          <button>Create New Button</button>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {offersArray.map((offer, i) => (
          <div key={i} className="m-2" style={{ border: "3px solid orange" }}>
            <div
              className="row d-flex no-gutters justify-content-between"
              style={{ backgroundColor: "orange" }}
            >
              <div className="col font-weight-bold">{offer.heading}</div>
              <div className="col text-white">{offer.date}</div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col ">{offer.subheading}</div>
                    </div>
                    <div className="row">
                      <div className="col">{offer.content}</div>
                    </div>
                  </div>
                  <div className="col-3">Rating: {offer.rating}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <a href="">Click to View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content"></div>
    </div>
  );
};

export default AddOfferingPage;
