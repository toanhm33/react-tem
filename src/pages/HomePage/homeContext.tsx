import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { bookSchema } from 'src/schemas/books';

type Props = {
  children: React.ReactNode;
};

type Context = {
  form: UseFormReturn;
};

const initialContext = {
  form: {} as UseFormReturn,
};

const HomeContext = createContext<Context>(initialContext);

const HomeContextProvider = ({ children }: Props): JSX.Element => {
  const form = useForm({
    resolver: yupResolver(bookSchema),
  });

  return (
    <HomeContext.Provider value={{ form }}>{children}</HomeContext.Provider>
  );
};

export { HomeContext, HomeContextProvider };
