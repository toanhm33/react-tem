import { IBook, ITypesBook } from '../../types/book.type';
import Request from '../config';
const requestApi = new Request();
import { stringify } from 'query-string';
import { IQueryBook } from 'src/types/bookQuery';

const getBooks = async (nameBook: IQueryBook | undefined): Promise<IBook[]> => {
  let queryString;
  if (nameBook) {
    queryString = stringify(nameBook);
  }
  try {
    return await requestApi.get(`/books?${queryString}`);
  } catch (error) {
    throw error;
  }
};

const postBook = async (dataBook: IBook): Promise<IBook> => {
  try {
    return await requestApi.post(`/books`, dataBook);
  } catch (error) {
    throw error;
  }
};
const updateBook = async (dataBook: IBook): Promise<IBook> => {
  try {
    return await requestApi.put(`/books/${dataBook.id}`, dataBook);
  } catch (error) {
    throw error;
  }
};

//because the api doesn't support delete multiple
const deleteBook = async (dataBook: number[]) => {
  try {
    const listRequestDelete = dataBook.map((id) =>
      requestApi.delete(`/books/${id}`)
    );
    return await Promise.all(listRequestDelete);
  } catch (error) {
    throw error;
  }
};

const getTypesBook = async (): Promise<ITypesBook[]> => {
  try {
    return await requestApi.get(`/typesBook`);
  } catch (error) {
    throw error;
  }
};

export { getBooks, getTypesBook, postBook, updateBook, deleteBook };
