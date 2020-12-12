import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from '../layout/heading';
import ErrorMessage from './errorMessage';

export default function Contact() {
  const { register, errors, handleSubmit } = useForm();
  function onSubmit(data) {
      console.log(data);
}

  return (
    <>
    <Heading title="Contact"/>
    <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your first name" ref={register({ required: true, minLength: 2 })} />
                {errors.firstName?.type === "required" && <ErrorMessage>Your input is required</ErrorMessage>}
                {errors.firstName?.type === "minLength" && <ErrorMessage>Your first name must be 2 charcters or more</ErrorMessage>}
                </Form.Group>

                <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" placeholder="Enter your last name" ref={register({ required: true, minLength: 2 })} />
                {errors.lastName?.type === "required" && <ErrorMessage>Your input is required</ErrorMessage>}
                {errors.lastName?.type === "minLength" && <ErrorMessage>Your last name must be 2 charcters or more</ErrorMessage>}
                </Form.Group>

                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Example@email.com" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                {errors.email?.type === "required" && <ErrorMessage>Your input is required</ErrorMessage>}
                {errors.email?.type === "pattern" && <ErrorMessage>Your email must follow an accepted format</ErrorMessage>}
                </Form.Group>

                <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" placeholder="Enter your message here" as="textarea" rows={3} ref={register({required: true, minLength: 10})} />
                {errors.message?.type === "required" && <ErrorMessage>Your input is required</ErrorMessage>}
                {errors.message?.type === "minLength" && <ErrorMessage>Your message must be 10 charcters or more</ErrorMessage>}
                </Form.Group>
      
      <Button type="submit">Submit</Button>
    </Form>
    </>
  )};