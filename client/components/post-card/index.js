import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal, Card } from "@material-ui/core";
import axios from 'axios'
import ModalOuterContainer from "../../components/PopupModalDialog/ModalOuterContainer";
import ModalHeader from "../../components/PopupModalDialog/ModalHeader";
import ModalInnerContainer from "../../components/PopupModalDialog/ModalInnerContainer";
import ModalTitle from "../../components/PopupModalDialog/ModalTitle";
import ModalButtonContainer from "../../components/PopupModalDialog/ModalButtonContainer";
import ModalButton from "../../components/PopupModalDialog/ModalButton";
import SideBarContainer from "../../components/PopupModalDialog/SideBarContainer";
import SidebarItem from "../../components/PopupModalDialog/SidebarItem";
import ModalInput from "../../components/PopupModalDialog/ModalInput";
import ModalMainSection from "../../components/PopupModalDialog/ModalMainSection";

const backgroundColorHelperFn = (type) => {
  return (
    (type === "offer" && "orange") ||
    (type === "request" && "blue") ||
    (type === "event" && "purple") ||
    (type === "initiative" && "green") ||
    "white"
  );
};

const PostCard = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleBid = async () =>{
    console.log(props.id)
    let res = await axios.post('http://localhost:4000/api/posts/items', props.id)
    console.log(res)
  }
  return (
    <>
      <div
        // className="root"
        style={{
          width: 300,
          height: 200,
          margin: 15,
          backgroundColor: backgroundColorHelperFn(props.type),
          border: `2px solid ${backgroundColorHelperFn(props.type)}`,
        }}
      >
        <div
          className="titleBar"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="title" style={{ fontSize: "24px" }}>
            {props.title}
          </div>
          <div className="date" style={{ fontSize: "20px" }}>
            {props.date}
          </div>
        </div>
        <div className="cardContent" style={{ backgroundColor: "white" }}>
          <div className="location">Location: {props.location}</div>
          <p>
            {props.description.length > 150
              ? props.description.slice(0, 149) + " ..."
              : props.description}
          </p>
          <br />
          <p>
            {props.details.length > 99
              ? props.details.slice(0, 100) + " ..."
              : props.details}
          </p>
        </div>
        <br />
        <p className="text-center">
          <a href="#" style={{ color: "white" }} onClick={handleOpen}>
            Open Modal
          </a>
        </p>
        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{
              display: "grid",
              justifyItems: "center",
              overflow: "auto",
            }}
          >
            <ModalOuterContainer>
              <ModalHeader>
                {props.title} <button>Favorite</button>
              </ModalHeader>
              <ModalInnerContainer>
                <div
                  className="container-fluid"
                  style={{ backgroundColor: "lightgray" }}
                >
                  <div className="row">
                    <div className="col-8">
                      <div>
                        <img src="https://via.placeholder.com/450x200" />
                      </div>
                      <div>I am new here in Tel Aviv and Im looking to meet new and interesting people. What better way ........</div>
                    </div>
                    <div className="col-4">
                      <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        Gift Offering
                      </p>
                      <p>Open Dinner Party</p>
                      <br />
                      <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        Gift Offering
                      </p>
                      <p>Open Dinner Party</p>
                      <br />
                      <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        Gift Offering
                      </p>
                      <p>Open Dinner Party</p>
                      <br />
                      <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        Gift Offering
                      </p>
                      <p>Open Dinner Party</p>
                      <br />
                      <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        Gift Offering
                      </p>
                      <p>Open Dinner Party</p>
                      <br />
                      <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                        Gift Offering
                      </p>
                      <p>Open Dinner Party</p>
                      <br />
                    </div>
                  </div>
                </div>
              </ModalInnerContainer>
              <ModalButtonContainer>
                <ModalButton onClick={handleClose}>Cancel</ModalButton>
                <ModalButton text="Bid" onClick={handleBid}/>
              </ModalButtonContainer>
            </ModalOuterContainer>
          </Modal>
        )}
      </div>
    </>
  );
};

const PostCardModal = ({ title, children }) => {
  //   const {
  //   state,
  // handleInputChange,
  // classes
  //   } = props;
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div onClick={handleOpen}>
      {children}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "grid",
          justifyItems: "center",
          overflow: "auto",
        }}
      >
        <div style={{ backgroundColor: "white" }}>{title}</div>
      </Modal>
    </div>
  );
};

export default PostCard;
