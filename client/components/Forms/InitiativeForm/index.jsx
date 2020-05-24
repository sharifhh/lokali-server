import React, { useEffect, useState } from "react";
import axios from "axios";

const InitiativeForm = () => {
  const initialFormState = {
    heading: "",
    subheading: "",
    summary: "",
    location: "",
    category: "",
    timeOfInitiative: "",
    dateOfInitiative: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  const [checkedErrors, setCheckedErrors] = useState({});
  useEffect(() => {
    console.log(checkedErrors);
  }, [checkedErrors]);

  const handleSubmit = () => {
    const errors = {};
    for (const property in formState) {
      if (!formState[property])
        errors[property] = formState[property];
    }
    setCheckedErrors(errors);
    console.log(errors);

    if (!errors.length) {
      axios
        .post("http://localhost:4000/api/posts/initiatives", formState)
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
        .finally(setFormState(initialFormState));
    }
  };

  return (
    <>
      <form className="container d-flex flex-column">
        <h1>Create New Inititiative</h1>
        <label>Heading</label>
        <input
          className={`${checkedErrors.heading === "" && "errorbox"}`}
          value={formState.heading}
          onChangeCapture={(event) =>
            handleChange("heading", event.target.value)
          }
          type="text"
          name="heading"
          required
        />
        <label>Subheading</label>
        <textarea
          className={`${checkedErrors.subheading === "" && "errorbox"}`}
          value={formState.subheading}
          onChangeCapture={(event) =>
            handleChange("subheading", event.target.value)
          }
          type="text"
          name="subheading"
          required
        />
        <label>Summary</label>
        <textarea
          className={`${checkedErrors.summary === "" && "errorbox"}`}
          value={formState.summary}
          onChangeCapture={(event) =>
            handleChange("summary", event.target.value)
          }
          type="text"
          name="summary"
          required
        />
        <label>Location</label>
        <input
          className={`${checkedErrors.location === "" && "errorbox"}`}
          value={formState.location}
          onChangeCapture={(event) =>
            handleChange("location", event.target.value)
          }
          type="text"
          name="location"
          required
        />
        <label>Category</label>
        <input
          className={`${checkedErrors.category === "" && "errorbox"}`}
          value={formState.category}
          onChangeCapture={(event) =>
            handleChange("category", event.target.value)
          }
          type="text"
          name="category"
          required
        />
        <label>Time Of Initiative</label>
        <input
          className={`${checkedErrors.timeOfInitiative === "" && "errorbox"}`}
          value={formState.timeOfInitiative}
          onChangeCapture={(event) =>
            handleChange("timeOfInitiative", event.target.value)
          }
          type="time"
          name="timeOfInitiative"
          required
        />
        <label>Date Of Event</label>
        <input
          className={`${checkedErrors.dateOfInititiative === "" && "errorbox"}`}
          value={formState.dateOfInititiative}
          onChangeCapture={(event) =>
            handleChange("dateOfInititiative", event.target.value)
          }
          type="date"
          name="dateOfInititiative"
          required
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default InitiativeForm;
