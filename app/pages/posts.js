import { useState, useEffect } from "react";

import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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

  // const config = { proxy: { host: "127.0.0.1", port: 4000 } };

  const submitForm = () => {
    console.log("formState", formState);
    axios
      .post(`http://localhost:4000/api/posts/${formState.type}s`, formState)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div>
      <Head title="Home" />
      <Nav />
      <SimpleContainer>
        <SimpleModal
          state={formState}
          handleInputChange={handleInputChange}
          submitForm={submitForm}
        />
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
    padding: theme.spacing(2, 0, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SimpleModal(props) {
  const { state, handleInputChange, submitForm } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

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
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input placeholder={"Enter the Action Title Here"} />
      <Button type="button" onClick={handleOpen}>
        Create New Post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          className={classes.paper}
          style={{
            ...modalStyle,
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
                <p>Choose One of the following post types:</p>
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
                <>
                  <form>
                    <h2>Offer Post Details</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Title</p>
                      </div>
                      <div>
                        <TextField
                          onChange={(e) =>
                            handleInputChange("title", e.target.value)
                          }
                          value={state.title}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        {/* <input
                          onChange={(e) =>
                            handleInputChange("title", e.target.value)
                          }
                          value={state.title}
                        /> */}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Location</p>
                      </div>
                      <div>
                        {/* <FormControl className={classes.formControl}>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.type}
                            onChange={(e) =>
                              handleInputChange("type", e.target.value)
                            }
                          >
                            <MenuItem value={"offer"}>Offer Post</MenuItem>
                            <MenuItem value={"request"}>Request Post</MenuItem>
                            <MenuItem value={"event"}>Event Post</MenuItem>
                            <MenuItem value={"initiative"}>
                              Initiative Post
                            </MenuItem>
                          </Select>
                        </FormControl> */}
                        <TextField
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          value={state.location}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Category</p>
                      </div>
                      <div>
                        <FormControl className={classes.formControl}>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.type}
                            onChange={(e) =>
                              handleInputChange("type", e.target.value)
                            }
                          >
                            <MenuItem value={"offer"}>Offer Post</MenuItem>
                            <MenuItem value={"request"}>Request Post</MenuItem>
                            <MenuItem value={"event"}>Event Post</MenuItem>
                            <MenuItem value={"initiative"}>
                              Initiative Post
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <TextField
                          onChange={(e) =>
                            handleInputChange("title", e.target.value)
                          }
                          value={state.title}
                          id="outlined-basic"
                          variant="outlined"
                        /> */}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Description</p>
                      </div>
                      <div>
                        <TextField
                          id="outlined-multiline-static"
                          multiline
                          rows={8}
                          placeholder={
                            "Provide a brief description about your offer. Include anything that you deem important or as a dependency. (Character limit of 150)"
                          }
                          variant="outlined"
                          text={state.description}
                          onChange={(e) =>
                            handleInputChange("description", e.target.value)
                          }
                        />
                        {/* <textarea
                          placeholder={
                            "Provide a brief description about your offer. Include anything that you deem important or as a dependency. (Character limit of 150)"
                          }
                          onChange={(e) =>
                            handleInputChange("description", e.target.value)
                          }
                          text={state.description}
                        /> */}
                      </div>
                    </div>
                  </form>
                </>
              )) ||
              (state.type === "request" && (
                <>
                  <form>
                    <h2>Offer Post Details</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Title</p>
                      </div>
                      <div>
                        <TextField
                          onChange={(e) =>
                            handleInputChange("title", e.target.value)
                          }
                          value={state.title}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        {/* <input
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      value={state.title}
                    /> */}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Location</p>
                      </div>
                      <div>
                        {/* <FormControl className={classes.formControl}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state.type}
                        onChange={(e) =>
                          handleInputChange("type", e.target.value)
                        }
                      >
                        <MenuItem value={"offer"}>Offer Post</MenuItem>
                        <MenuItem value={"request"}>Request Post</MenuItem>
                        <MenuItem value={"event"}>Event Post</MenuItem>
                        <MenuItem value={"initiative"}>
                          Initiative Post
                        </MenuItem>
                      </Select>
                    </FormControl> */}
                        <TextField
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          value={state.location}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Category</p>
                      </div>
                      <div>
                        <FormControl className={classes.formControl}>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.type}
                            onChange={(e) =>
                              handleInputChange("type", e.target.value)
                            }
                          >
                            <MenuItem value={"offer"}>Offer Post</MenuItem>
                            <MenuItem value={"request"}>Request Post</MenuItem>
                            <MenuItem value={"event"}>Event Post</MenuItem>
                            <MenuItem value={"initiative"}>
                              Initiative Post
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <TextField
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      value={state.title}
                      id="outlined-basic"
                      variant="outlined"
                    /> */}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Description</p>
                      </div>
                      <div>
                        <TextField
                          id="outlined-multiline-static"
                          multiline
                          rows={8}
                          placeholder={
                            "Provide a brief description about your offer. Include anything that you deem important or as a dependency. (Character limit of 150)"
                          }
                          variant="outlined"
                          text={state.description}
                          onChange={(e) =>
                            handleInputChange("description", e.target.value)
                          }
                        />
                        {/* <textarea
                      placeholder={
                        "Provide a brief description about your offer. Include anything that you deem important or as a dependency. (Character limit of 150)"
                      }
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      text={state.description}
                    /> */}
                      </div>
                    </div>
                  </form>
                </>
              )) ||
              (state.type === "event" && (
                <>
                  <form>
                    <h2>Offer Post Details</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Title</p>
                      </div>
                      <div>
                        <TextField
                          onChange={(e) =>
                            handleInputChange("title", e.target.value)
                          }
                          value={state.title}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        {/* <input
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      value={state.title}
                    /> */}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Location</p>
                      </div>
                      <div>
                        {/* <FormControl className={classes.formControl}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state.type}
                        onChange={(e) =>
                          handleInputChange("type", e.target.value)
                        }
                      >
                        <MenuItem value={"offer"}>Offer Post</MenuItem>
                        <MenuItem value={"request"}>Request Post</MenuItem>
                        <MenuItem value={"event"}>Event Post</MenuItem>
                        <MenuItem value={"initiative"}>
                          Initiative Post
                        </MenuItem>
                      </Select>
                    </FormControl> */}
                        <TextField
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          value={state.location}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Category</p>
                      </div>
                      <div>
                        <FormControl className={classes.formControl}>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.type}
                            onChange={(e) =>
                              handleInputChange("type", e.target.value)
                            }
                          >
                            <MenuItem value={"offer"}>Offer Post</MenuItem>
                            <MenuItem value={"request"}>Request Post</MenuItem>
                            <MenuItem value={"event"}>Event Post</MenuItem>
                            <MenuItem value={"initiative"}>
                              Initiative Post
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <TextField
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      value={state.title}
                      id="outlined-basic"
                      variant="outlined"
                    /> */}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Description</p>
                      </div>
                      <div>
                        <TextField
                          id="outlined-multiline-static"
                          multiline
                          rows={8}
                          placeholder={
                            "Provide a brief description about your offer. Include anything that you deem important or as a dependency. (Character limit of 150)"
                          }
                          variant="outlined"
                          text={state.description}
                          onChange={(e) =>
                            handleInputChange("description", e.target.value)
                          }
                        />
                        {/* <textarea
                      placeholder={
                        "Provide a brief description about your offer. Include anything that you deem important or as a dependency. (Character limit of 150)"
                      }
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      text={state.description}
                    /> */}
                      </div>
                    </div>
                  </form>
                </>
              )) ||
              (state.type === "initiative" && (
                <>
                  <form>
                    <h2>Offer Post Details</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Title</p>
                      </div>
                      <div>
                        <TextField
                          onChange={(e) =>
                            handleInputChange("title", e.target.value)
                          }
                          value={state.title}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        {/* <input
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      value={state.title}
                    /> */}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Location</p>
                      </div>
                      <div>
                        {/* <FormControl className={classes.formControl}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state.type}
                        onChange={(e) =>
                          handleInputChange("type", e.target.value)
                        }
                      >
                        <MenuItem value={"offer"}>Offer Post</MenuItem>
                        <MenuItem value={"request"}>Request Post</MenuItem>
                        <MenuItem value={"event"}>Event Post</MenuItem>
                        <MenuItem value={"initiative"}>
                          Initiative Post
                        </MenuItem>
                      </Select>
                    </FormControl> */}
                        <TextField
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          value={state.location}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Category</p>
                      </div>
                      <div>
                        <FormControl className={classes.formControl}>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.type}
                            onChange={(e) =>
                              handleInputChange("type", e.target.value)
                            }
                          >
                            <MenuItem value={"offer"}>Offer Post</MenuItem>
                            <MenuItem value={"request"}>Request Post</MenuItem>
                            <MenuItem value={"event"}>Event Post</MenuItem>
                            <MenuItem value={"initiative"}>
                              Initiative Post
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <TextField
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      value={state.title}
                      id="outlined-basic"
                      variant="outlined"
                    /> */}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Offer Description</p>
                      </div>
                      <div>
                        <TextField
                          id="outlined-multiline-static"
                          multiline
                          rows={8}
                          placeholder={
                            "Provide a brief description about your offer. Include anything that you deem important or as a dependency. (Character limit of 150)"
                          }
                          variant="outlined"
                          text={state.description}
                          onChange={(e) =>
                            handleInputChange("description", e.target.value)
                          }
                        />
                        {/* <textarea
                      placeholder={
                        "Provide a brief description about your offer. Include anything that you deem important or as a dependency. (Character limit of 150)"
                      }
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      text={state.description}
                    /> */}
                      </div>
                    </div>
                  </form>
                </>
              ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={submitForm}>Create</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
