// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
const BasicForm = () => (
	<div>
		<h1>Any place in your app!</h1>
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={
				Yup.object().shape({
					email: Yup.string()
						.email()
						.required("Required"),
					password: Yup.string()
						.required("No password provided.")
						.min(8, "Password is too short - should be 8 chars minimum.")
						.matches(/(?=.*[0-9])/, "Password must contain a number.")
				})
			}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					//alert(JSON.stringify(values, null, 2));
					if(values.email === "email@example.com" && values.password === "password123")
						document.location="/";
					setSubmitting(false);
				}, 400);
			}}
			>
			{({ isSubmitting }) => (
				<Form>
					<Field type="email" name="email" />
					<ErrorMessage name="email" component="div" />
					<Field type="password" name="password" />
					<ErrorMessage name="password" component="div" />
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	</div>
);

export default BasicForm;