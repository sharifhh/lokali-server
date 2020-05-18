import { useState, useEffect } from "react";

import Link from "next/link";
import Head from "../components/head";
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
} from "@material-ui/core";

export default function (props) {
  const { state, classes, handleInputChange } = props;
  console.log(props);
  console.log(state);
  const type = `${state.type.charAt(0).toUpperCase()}${state.type.slice(1)}`;
  return (
    <>
      <form>
        <h2>{type} Post Details</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>{type} Title</p>
          </div>
          <div>
            <TextField
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={state.title}
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
            <p>{type} Description</p>
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
              onChange={(e) => handleInputChange("description", e.target.value)}
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
            <p>Location</p>
          </div>
          <div>
            <TextField
              onChange={(e) => handleInputChange("location", e.target.value)}
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
            <p>{type} Category</p>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
              >
                <MenuItem value={"option 1"}>Option 1</MenuItem>
                <MenuItem value={"option 2"}>Option 2</MenuItem>
                <MenuItem value={"option 3"}>Option 3</MenuItem>
                <MenuItem value={"option 4"}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>{type} Details</p>
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
              text={state.details}
              onChange={(e) => handleInputChange("details", e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
}
