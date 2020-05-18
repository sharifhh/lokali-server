import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal, Card } from "@material-ui/core";

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
  return (
    <>
      <Card
        className="root"
        style={{
          width: 300,
          height: 200,
          margin: 15,
          backgroundColor: backgroundColorHelperFn(props.type),
          border: `2px solid ${backgroundColorHelperFn(props.type)}`,
        }}
      >
        <PostCardModal {...props}>
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
            <p>
              {props.details.length > 99
                ? props.details.slice(0, 100) + " ..."
                : props.details}
            </p>
          </div>
        </PostCardModal>
      </Card>
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
