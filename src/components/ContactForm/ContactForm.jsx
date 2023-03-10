import React from 'react';
import {
  Form,
  FormField,
  Field,
  Button,
  ErrorMessage,
} from './ContactForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .positive('!!! must begin from number !!!')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSubmit({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Phone
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <Button type="submit">Add Contact</Button>
      </Form>
    </Formik>
  );
};



















// variant without Formik using class ContactForm




// class ContactForm extends React.Component {
//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const {name, value} = e.currentTarget;
//     this.setState({
//         [name]: value,
//     });
// };

// handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
// };

// reset = () => {
//     this.setState({
//         name: '',
//         number: ''
//     });
// };

//   render() {
//     return (
//       <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
//         <Form onSubmit={this.handleSubmit}>
//           <Label htmlFor={this.nameInputId}>
//             Name
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={this.state.name}
//               onChange={this.handleChange}
//               id={this.nameInputId}
//             />
//           </Label>
//           <Label htmlFor={this.numberInputId}>
//             Phone
//             <Input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={this.state.number}
//               onChange={this.handleChange}
//               id={this.numberInputId}
//             />
//           </Label>
//           <Button type='submit'>Add Contact</Button>
//         </Form>
//         </Formik>
//     );
//   }
// }
