import { Formik, Form, Field, ErrorMessage } from 'formik';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

function validate(values: FormValues) {
  const errors: Partial<FormValues> = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 3) {
    errors.name = 'At least 3 characters';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'At least 6 characters';
  }
  return errors;
}

function FormikExample() {
  const initialValues: FormValues = { name: '', email: '', password: '' };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Formik Example</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div style={{ marginBottom: 16 }}>
              <label>Name:</label><br />
              <Field name="name" />
              <ErrorMessage name="name">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Email:</label><br />
              <Field name="email" type="email" />
              <ErrorMessage name="email">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Password:</label><br />
              <Field name="password" type="password" />
              <ErrorMessage name="password">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikExample; 