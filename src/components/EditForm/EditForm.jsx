import c from './EditForm.module.css';
import { MdDone } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { Field, Form, Formik } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import { editContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const EditForm = ({ contact: { name, number, id }, handleEdit }) => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(editContact({ contactId: id, contactInfo: values }))
      .unwrap()
      .catch(() =>
        toast.error('Oops... Something went wrong', {
          id: 'editError',
        })
      );
    handleEdit(false);
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name, number }}
        validationSchema={validationSchema}
      >
        <Form>
          <div className={c.formBox}>
            <div className={c.fields}>
              <Field
                name="name"
                as={TextField}
                size="small"
                id="standard-basic"
                variant="standard"
              />
              <Field
                name="number"
                as={TextField}
                size="small"
                id="standard-basic"
                variant="standard"
              />
            </div>
            <div className={c.formButtonsBox}>
              <button className={c.formBtn} type="submit">
                <MdDone size={20} className={c.icon} />
              </button>

              <button onClick={() => handleEdit(false)} className={c.formBtn} type="button">
                <MdClose size={20} className={c.icon} />
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditForm;
