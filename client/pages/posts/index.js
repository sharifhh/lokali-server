import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Head from "../../components/head";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  FormControl,
  Button,
  Container,
  Modal,
  Select,
  MenuItem,
  TextField,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FilledInput,
} from "@material-ui/core";
import axios from "axios";
import PostCard from "../../components/post-card";
import PostsForm from "../../components/form";

export default () => {
  const [formState, setFormState] = useState({
    type: "Select Type",
    title: "",
    description: "",
    category: "",
    location: "",
    author: "Development",
  });

  const handleInputChange = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  useEffect(() => {
    // console.log(formState);
    console.log(styles);
  }, []);

  const dummyData = [
    {
      title: "Dinner with Strangers",
      type: "offer",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "event",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "event",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "event",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "event",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "event",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "event",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "event",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "initiative",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "request",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
    {
      title: "Dinner with Strangers",
      type: "offer",
      date: "22/4/2020",
      description:
        "The offering item and explanation mission statement information here",
      details:
        "More textual details about the offer is written here, pictures and additional information are available by opening the extended details dialog popup",
    },
  ];

  return (
    <div>
      <Head title="Home" />
      <SimpleContainer>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              width: "50%",
              height: "100vh",
              overflow: "auto",
            }}
          >
            {dummyData
              .filter((item) => item.type === "event")
              .map((item, index) => (
                <PostCard key={index} {...item} />
              ))}
          </div>
          <div>
            <SimpleModal
              state={formState}
              handleInputChange={handleInputChange}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              {dummyData
                .filter((item) => item.type !== "event")
                .map((item, index) => (
                  <PostCard key={index} {...item} />
                ))}
            </div>{" "}
          </div>
        </div>
      </SimpleContainer>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          padding-bottom: 12px;
          line-height: 1.15;
          font-size: 37px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 587px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

const SimpleContainer = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">{children}</Container>
    </React.Fragment>
  );
};

function getModalStyle() {
  //   const top = 50 + rand();
  //   const left = 50 + rand();

  return {
    position: "absolute",
    left: "50%",
    marginLeft: "-200px",
    top: "50%",
    marginTop: "-300px",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: "white",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 0, 5),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function SimpleModal(props) {
  const { state, handleInputChange } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const submitForm = () => {
    console.log("state", state);
    axios
      .post(`http://localhost:4000/api/posts/${state.type}s`, state)
      .then((data) => {
        console.log(data);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleInputChange("type", "Select Type");
    setOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#eee",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
      }}
    >
      <FormControl className={classes.margin} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Search</InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          value={state.title}
          onChange={(e) => handleInputChange("title", e.target.value)}

          // startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <Button type="button" onClick={handleOpen}>
        Create New Post
      </Button>
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
        <div
          className={classes.paper}
          style={{
            display: "grid",
            // gridTemplateColumns: "auto 70% auto",
            overflow: "auto",
            backgroundColor:
              (state.type === "offer" && "#fea53a") ||
              (state.type === "request" && "#4a86e8") ||
              (state.type === "event" && "#5e38c0") ||
              (state.type === "initiative" && "#48a320") ||
              "white",
          }}
        >
          <h1>Create a New Post</h1>
          <div style={{ margin: "5px 2px", backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>Choose one of the following post types:</p>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                  >
                    <MenuItem value={"Select Type"}>Select Type</MenuItem>
                    <MenuItem value={"offer"}>Offer Post</MenuItem>
                    <MenuItem value={"request"}>Request Post</MenuItem>
                    <MenuItem value={"event"}>Event Post</MenuItem>
                    <MenuItem value={"initiative"}>Initiative Post</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {(state.type === "Select Type" && (
              <>
                <h2>Offer Post</h2>
                <p>
                  Provide an action, service, help or access an opportunity to
                  the Lokali members (e.g. donate some excess food from your
                  restaurant)
                </p>
                <h2>Request Post</h2>
                <p>
                  Ask for help to fix something, (e.g. look for a new band
                  member, find someone to help harvest your crop)
                </p>
                <h2>Event Post</h2>
                <p>
                  Plan a social or public occasion. Invite friends and make
                  things happen.
                </p>
                <h2>Initiative Post</h2>
                <p>
                  Create an initiative such. Ask friends to participate and take
                  charge (e.g. clean up a beach, help the elderly, etc. )
                </p>
              </>
            )) ||
              (state.type === "offer" && (
                <PostsForm
                  state={state}
                  classes={classes}
                  handleInputChange={handleInputChange}
                />
              )) ||
              (state.type === "request" && (
                <PostsForm
                  state={state}
                  classes={classes}
                  handleInputChange={handleInputChange}
                />
              )) ||
              (state.type === "event" && (
                <PostsForm
                  state={state}
                  classes={classes}
                  handleInputChange={handleInputChange}
                />
              )) ||
              (state.type === "initiative" && (
                <PostsForm
                  state={state}
                  classes={classes}
                  handleInputChange={handleInputChange}
                />
              ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {state.type !== "Select Type" && (
              <>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={submitForm}>Create</Button>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
