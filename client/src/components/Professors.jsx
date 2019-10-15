import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import { ProfessorListContainer } from "./styled-components/ProfessorListStyles";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

export default class Professors extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    professors: [],
    newProfessor: {
      name: "",
      school: "",
      image: "",
      course: "",
      description: ""
    },
    redirectToProfessor: false,
    displayProfessorForm: false
  };

  componentDidMount = () => {
    this.getAllProfessors();
  };

  getAllProfessors = () => {  // When the page loads, grab all professors from the database
    axios.get(`/api/professors/`).then(res => {
      this.setState({ professors: res.data });
    });
  };

  createProfessor = e => {
    e.preventDefault();
    axios
      .post(`/api/professors`, {   // Ask the server to create a new professor in the database
        name: this.state.newProfessor.name,
        course: this.state.newProfessor.course,
        image: this.state.newProfessor.image,
        description: this.state.newProfessor.description,
        school: this.state.newProfessor.school
      })
      .then(res => {
        const professorsList = [...this.state.professors];   // Copy the old professors list into a new one
        professorsList.unshift(res.data);
        this.setState({
          newProfessor: {
            name: "",
            school: "",
            image: "",
            course: "",
            description: ""
          },
          displayProfessorForm: false,
          professors: professorsList
        });
      });
  };

  toggleProfessorForm = () => {  // This toggle the professor button when clicked
    this.setState((state, props) => {
      return { displayProfessorForm: !state.displayProfessorForm };
    });
  };

  handleChange = e => {
    const changeNewProfessor = { ...this.state.newProfessor };
    changeNewProfessor[e.target.name] = e.target.value;
    this.setState({ newProfessor: changeNewProfessor });
  };

  render() {
    return (
      <div id="event">
        <div
          className="container-fluid text-center"
          style={{ marginBottom: "20px", marginTop: "110px" }}
        >
          <button className="review-button" onClick={this.toggleProfessorForm}>
            <FontAwesomeIcon
              icon={faChild}
              className="card-img-top"
              style={{ width: "2rem" }}
            />
            Review a Professor
          </button>
        </div>
        <div>
          {this.state.displayProfessorForm ? (
            <Form className="jumbotron" onSubmit={this.createProfessor}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="image"
                  type="text"
                  name="image"
                  onChange={this.handleChange}
                  value={this.state.newProfessor.image}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="name"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.newProfessor.name}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>School</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="school"
                  type="text"
                  name="school"
                  onChange={this.handleChange}
                  value={this.state.newProfessor.school}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="course"
                  type="number"
                  name="course"
                  onChange={this.handleChange}
                  value={this.state.newProfessor.course}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Review of Course and Professor</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  className="text-center"
                  id="description"
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.newProfessor.description}
                />
              </Form.Group>
              <div
                className="text-center"
                style={{ marginTop: "20px", marginLeft: "140px" }}
              >
                <button className="text-center submit-button">Submit</button>
              </div>
            </Form>
          ) : null}
        </div>

        <ProfessorListContainer>
          {this.state.professors.map(professor => {
            return (
              <Container style={{marginBottom: "130px"}}>
                <Card
                  key={professor._id}
                  className="text-center"
                  style={{
                    width: "18rem",
                    border: "1px black solid"
                  }}
                >
                  <Link to={`/professors/${professor._id}`} key={professor._id}>
                    <Card.Img
                      variant="tops"
                      src={professor.image}
                      className="card-img-top"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      {professor.name}
                    </Card.Title>
                    <Card.Text style={{ color: "black" }}>
                      {professor.course}
                    </Card.Text>
                    <Card.Text style={{ color: "black" }}>
                      {professor.school}
                    </Card.Text>
                    <Card.Text style={{ color: "black" }}>
                      {professor.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
           
              </Container>
            );
          })}
        </ProfessorListContainer>
      </div>
    );
  }
}
