import React, { ChangeEvent, useState } from 'react';
import { Loading } from 'src/components/common/loading/loading';
import { IBook } from 'src/types/book.type';
import { BookItems } from './bookItems';

const columnConfig = [
  {
    key: 'NAME',
  },
  {
    key: 'TYPE',
  },
  {
    key: 'DESCRIPTION',
  },
  {
    key: 'STATUS',
  },
  {
    key: 'ACTION',
  },
];

export interface IDeleteBook {
  listBookIdDelete: number[];
  setListBookIdDelete: React.Dispatch<React.SetStateAction<number[]>>;
}
interface ITableBook extends IDeleteBook {
  data: IBook[] | [];
  onUpdateBook: () => void;
  isLoading: boolean;
}
export const TableBook: React.FC<ITableBook> = ({
  data,
  onUpdateBook,
  listBookIdDelete,
  setListBookIdDelete,
  isLoading,
}) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  function handleCheckAll(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    if (checked) {
      const listBookIds = data.map((book) => book.id);
      setListBookIdDelete(listBookIds);
    } else {
      setListBookIdDelete([]);
    }
    setIsCheckAll((pre) => !pre);
  }
  function loadingComponent() {
    return (
      <div className="absolute top-38 left-2/4 translate-y-2/4 translate-x-2/4 z-10 ">
        <Loading />
      </div>
    );
  }
  return (
    <section className="overflow-x-auto h-600 bg-white  shadow rounded-lg relative">
      <table className="w-full table-fixed sm:table-auto ">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100 w-16 z-10">
              <label className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox focus:outline-none focus:shadow-outline cursor-pointer"
                  onChange={handleCheckAll}
                />
              </label>
            </th>
            {columnConfig.map(({ key }) => (
              <th
                key={key}
                className="bg-gray-100 z-10 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
              >
                <label className="text-teal-500 inline-flex justify-between items-center  px-2 py-2 rounded-lg">
                  {key}
                </label>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="relative">
          {data.map((book) => (
            <BookItems
              key={book.id}
              book={book}
              onUpdateBook={onUpdateBook}
              isCheckAll={isCheckAll}
              setListBookIdDelete={setListBookIdDelete}
              listBookIdDelete={listBookIdDelete}
            />
          ))}
        </tbody>
      </table>
      {isLoading && loadingComponent()}
    </section>
  );
};
