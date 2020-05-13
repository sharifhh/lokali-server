import React from "react";

const LandingPage = (props) => {
  return (
    <>  
      <ul class="nav d-flex justify-content-end">
        <li class="nav-item pr-3">
          <button type="button" class="btn btn-primary">
            Login
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-primary">
            Register
          </button>
        </li>
      </ul>
      <div>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam
          rerum neque labore veniam enim incidunt tempora non laudantium
          necessitatibus? Vitae pariatur harum eveniet hic fugiat, ad magnam
          dolores consequuntur!
        </p>
      </div>
      <div>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam
          rerum neque labore veniam enim incidunt tempora non laudantium
          necessitatibus? Vitae pariatur harum eveniet hic fugiat, ad magnam
          dolores consequuntur!
        </p>
      </div>
      <div className="d-flex">
        <div>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            totam rerum neque labore veniam enim incidunt tempora non laudantium
            necessitatibus? Vitae pariatur harum eveniet hic fugiat, ad magnam
            dolores consequuntur!
          </p>
        </div>
        <div>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            totam rerum neque labore veniam enim incidunt tempora non laudantium
            necessitatibus? Vitae pariatur harum eveniet hic fugiat, ad magnam
            dolores consequuntur!
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
