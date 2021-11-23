import React, {usetextarea} from "react"
import {Form, Button, Row, InputGroup} from "react-bootstrap"
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  phone: yup.number().required(),
  message: yup.string().required(),
});
const ContactForm = () => {

    return(
    <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        }}
        >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
            <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group md="4" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="first name"
                    name="firstName"
                    aria-describedby="inputGroupPrepend"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    aria-describedby="inputGroupPrepend"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                />

                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationFormikemail">
                <Form.Label>email</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                    type="text"
                    placeholder="enter your valid email address"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.email}
                    </Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group md="6" controlId="validationFormik03">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="enter your 10 digit mobile number"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                />

                <Form.Control.Feedback type="invalid">
                    {errors.phone}
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="3" controlId="validationFormik04">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                    as = "textarea"
                    type="text"
                    placeholder="enter your message, because your message's and feedback's are very importent to us."
                    name="textarea"
                    value={values.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                />
                 <Form.Control.Feedback type="invalid">
                    {errors.message}
                </Form.Control.Feedback>
                </Form.Group>
            </Row>
            
            <Button variant = "dark" type="submit">Submit</Button>

            </Form>
        )}
        </Formik>
    )
}
export default ContactForm