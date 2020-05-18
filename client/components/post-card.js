import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal, Card } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     height: 200,
//     width: 300,
//     margin: 10,
//     padding: 2,
//     display: "inline",
//   },
//   titleBar: {
//     fontSize: 14,
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   title: { fontSize: 20 },
//   cardContent: { backgroundColor: "#eee", padding: 2 },
//   date: { color: "white" },
//   pos: {
//     marginBottom: 12,
//   },
// });

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
          //   backgroundColor: backgroundColorHelperFn(props.type),
          border: `2px solid ${backgroundColorHelperFn(props.type)}`,
        }}
      >
        <PostCardModal>
          <div className="titleBar">
            <div className="title">{props.title}</div>
            <div className="date">{props.date}</div>
          </div>
          <div className="location">{props.location}</div>
          <div className="cardContent">
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

const PostCardModal = ({ props, children }) => {
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
      >
        <div></div>
      </Modal>
    </div>
  );
};

export default PostCard;
