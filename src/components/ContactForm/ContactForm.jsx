import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import c from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { selectLoading } from '../../redux/contacts/selectors';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const defaultTheme = createTheme();

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={c.container}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="div" sx={{ mt: 3 }}>
              <Formik
                initialValues={{ name: '', number: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                      />
                      <ErrorMessage name="name" className={c.error} component="div" />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="number"
                        label="Number"
                        id="number"
                        autoComplete="new-number"
                      />
                      <ErrorMessage name="number" className={c.error} component="div" />
                    </Grid>
                  </Grid>
                  <Button
                    // disabled={loading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add Contact
                  </Button>
                </Form>
              </Formik>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default ContactForm;
