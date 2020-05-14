import React, {useState, useEffect} from "react";
import {Form, InputGroup, Button} from "react-bootstrap"
import axios from "axios";
import GenreList from "../components/GenreList"

export default function GenrePage() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("Adventure");
  const [genres, setGenres] = useState([]);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        axios.post('http://localhost:8080/genres', {
          name: name
        })
        .then(function (response) {
          setValidated(true);
        })
        .catch(function (error) {
        });
      }
  
    };

    const handleChange = (e) => {
      setName(e.target.value)
    }

    useEffect(() => {
      axios.get("http://localhost:8080/genres").then((result) => {
        setGenres(result.data);
      }); 
    }, []);

    return (
      <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group md="4" controlId="name">
            <Form.Label>Genre Name </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              defaultValue={name}
              onChange={handleChange}
              />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      <GenreList genres={genres} />
      </>
    );
  }
