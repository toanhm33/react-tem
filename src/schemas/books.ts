import * as yup from 'yup';

export const bookSchema = yup
  .object({
    name: yup.string().required('Name is a required field'),
    description: yup.string().required('Description is a required field'),
  })
  .required();
