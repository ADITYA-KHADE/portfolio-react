import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../style/Contact.css'

function Contact() {

	const handlealert = () => {
		setTimeout(() => {
			alert('successfully uploaded')
		}, 1000);
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email address').required('Email is required'),
		reason: Yup.string().required('Reason for contact is required'),
		message: Yup.string().required('Message is required'),
	  });

	  const handleSubmit = (values, { resetForm }) => {
		console.log(values);
		resetForm();};

	return(
	<div className="main" id="contacts">
		<div className="contact">
			<br />
          <h2 className="contact-head">Contact me</h2>
          <Formik
             initialValues={{
				name: '',
				email: '',
				enquiry:'',
				message: '',
				}} validationSchema={validationSchema} onSubmit={handleSubmit}>
			  <Form>
				  <div className="form-group">
					<label htmlFor="name">Name</label>
					<Field type="text" id="name" name="name" className="form-control custom-input" />
					<ErrorMessage name="name" component="div" className="error" />
				  </div>
	
				  <div className="form-group">
				   <label htmlFor="email">Email Address</label>
				   <Field type="email" id="email" name="email" className="form-control custom-input" />
				   <ErrorMessage name="email" component="div" className="error" />
				  </div>
	
				  <div className="form-group">
					<label htmlFor="reason">Type of enquiry</label>
					<Field as="select" id="reason" name="reason" className="form-control">
					  <option value="" label="Freelance project proposal" />
					  <option value="general" label="General Inquiry" />
					  <option value="support" label="Technical Support" />
					  <option value="billing" label="Billing Question" />
					</Field>
					<ErrorMessage name="reason" component="div" className="error" />
				  </div>
	
				  <div className="form-group">
				   <label htmlFor="message">Your message</label>
				   <Field as="textarea" id="message" name="message" placeholder="Type your message here..." className="form-control" />
				   <ErrorMessage name="message" component="div" className="error" />
				  </div>
				  <br />
				   <button type="submit" className="btn btn-primary" onClick={handlealert}>Submit</button>
				</Form>
            </Formik>
        </div>
	</div>
  );
}

export default Contact
