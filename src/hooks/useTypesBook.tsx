import { useQuery } from 'react-query';
import { getTypesBook } from 'src/apis/service/book';
import { ITypesBook } from 'src/types/book.type';
export const useTypesBook = () => {
  return useQuery<ITypesBook[]>(
    'typesBook',
    async () => {
      return await getTypesBook();
    },
    { keepPreviousData: true }
  );
};
