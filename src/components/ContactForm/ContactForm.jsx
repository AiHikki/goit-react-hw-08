import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useId } from 'react';
import c from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const schema = yup.object().shape({
  name: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const ContactForm = () => {
  const elementId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={c.container}>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={c.form}>
          <div className={c.field}>
            <label htmlFor={elementId + '-name'}>Name</label>
            <Field name="name" type="text" id={elementId + '-name'} placeholder="Name" />
            <ErrorMessage name="name" component="div" className={c.error} />
          </div>

          <div className={c.field}>
            <label htmlFor={elementId + '-number'}>Number</label>
            <Field name="number" type="tel" id={elementId + '-number'} placeholder="999-99-99" />
            <ErrorMessage name="number" component="div" className={c.error} />
          </div>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
