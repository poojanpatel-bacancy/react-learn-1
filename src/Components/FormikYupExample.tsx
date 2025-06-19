import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'At least 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'At least 6 characters'),
});

function FormikYupExample() {
  const initialValues = { name: '', email: '', password: '' };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Formik + Yup Example</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
              <div style={{ color: 'red' }}>
                <ErrorMessage name="name" />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Email:</label><br />
              <Field name="email" type="email" />
              <div style={{ color: 'red' }}>
                <ErrorMessage name="email" />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Password:</label><br />
              <Field name="password" type="password" />
              <div style={{ color: 'red' }}>
                <ErrorMessage name="password" />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikYupExample; 