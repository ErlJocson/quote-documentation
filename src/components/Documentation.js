import React from "react";
import styled from "styled-components";

function Documentation() {
  return (
    <MyDocumentation>
      <h2>Documentation</h2>
      <div>
        <p className="title">
          <strong>Base url:</strong> https://random-quotes-spring.herokuapp.com/
        </p>
        <p>This url will give a 404 error.</p>
      </div>
      <div>
        <p className="title">
          <strong>Get all quotes:</strong>
          https://random-quotes-spring.herokuapp.com/api/v1/quote/all
        </p>
        <p>This will return all quotes available in the database</p>
      </div>
      <div>
        <p className="title">
          <strong> Get one random quote:</strong>
          https://random-quotes-spring.herokuapp.com/api/v1/quote/1
        </p>
        <p>This will return one random quote from the database</p>
      </div>
      <div>
        <p className="title">
          <strong>Post a new quote: </strong>
          https://random-quotes-spring.herokuapp.com/api/v1/quote/
        </p>
        <p>Use this url endpoint to add new quote to the database</p>
        <p>
          <pre>&#123;</pre>
          <pre>name:"Sample name",</pre>
          <pre>quote:"Sample quote"</pre>
          <pre>&#125;</pre>
        </p>
      </div>
    </MyDocumentation>
  );
}

export default Documentation;

const MyDocumentation = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;

  div {
    p.title {
      font-size: 20px;
      margin-bottom: 5px;
    }
    margin: 20px;
  }
`;
