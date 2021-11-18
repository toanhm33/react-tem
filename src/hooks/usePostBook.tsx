import { useMutation, useQueryClient } from 'react-query';
import { postBook } from 'src/apis/service/book';
import { IBook } from 'src/types/book.type';
import { EQueryKey } from 'src/types/queryKey';
export const usePostBook = () => {
  const queryClient = useQueryClient();
  return useMutation(postBook, {
    // When mutate is called:
    onMutate: async (newBook) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(EQueryKey.BOOKS);

      // Snapshot the previous value
      const previousBooks = queryClient.getQueryData<IBook[]>(EQueryKey.BOOKS);

      //   // Optimistically update to the new value
      if (previousBooks) {
        queryClient.setQueryData<IBook[]>(EQueryKey.BOOKS, () => [
          ...previousBooks,
          newBook,
        ]);
      }

      return { previousBooks };
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, variables, context: any) => {
      if (context?.previousBooks) {
        queryClient.setQueryData<IBook>(EQueryKey.BOOKS, context.previousBooks);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(EQueryKey.BOOKS);
    },
  });
};
