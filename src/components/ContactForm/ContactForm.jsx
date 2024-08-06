import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Має бути щонайменше 3 символи')
    .max(50, 'Має бути не більше 50 символів')
    .required('Обов\'язково'),
  number: Yup.string()
    .min(3, 'Має бути щонайменше 3 символи')
    .max(50, 'Має бути не більше 50 символів')
    .required('Обов\'язково')
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.contactForm}>
          <div>
            <label htmlFor="name">Ім'я</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Номер</label>
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Додати контакт</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
