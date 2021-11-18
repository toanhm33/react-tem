import { useQuery } from 'react-query';
import { getBooks } from 'src/apis/service/book';
import { IBook } from 'src/types/book.type';
import { IQueryBook } from 'src/types/bookQuery';
import { EQueryKey } from 'src/types/queryKey';
export const useBooks = (nameBook: IQueryBook | undefined) => {
  return useQuery<IBook[]>(
    [EQueryKey.BOOKS, nameBook],
    async () => {
      return await getBooks(nameBook);
    },
    {
      keepPreviousData: true,
      enabled: true || Boolean(nameBook?.name) || Boolean(nameBook?.active),
    }
  );
};
