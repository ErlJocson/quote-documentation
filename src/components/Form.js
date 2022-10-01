import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://random-quotes-spring.herokuapp.com/api/v1/quote/", {
        name,
        quote,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setName("");
    setQuote("");
  };

  return (
    <Container>
      <FormContainer>
        <h2>Add new quote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name:</label>
            <input
              type="text"
              className="answer-form"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Quote:</label>
            <input
              type="text"
              className="answer-form"
              required
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" className="submit-form" />
          </div>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Form;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  margin: 10px auto;
  padding: 20px;
  box-shadow: var(--dark-shadow);
  h2 {
    text-align: center;
    margin: 20px 0;
  }

  form div {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    input.answer-form {
      border-radius: 10px;
      width: 300px;
      padding: 6px;
    }

    input.submit-form {
      width: 100px;
      padding: 5px;
    }
  }
`;
