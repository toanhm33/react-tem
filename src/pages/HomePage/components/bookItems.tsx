import clsx from 'clsx';
import React, { ChangeEvent, useEffect, useState, useContext } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { ToolTip } from 'src/components/common/tooltip/tooltip';
import { IBook } from 'src/types/book.type';
import { HomeContext } from '../homeContext';
import { IDeleteBook } from './tableBook';
interface IPropsBook extends IDeleteBook {
  book: IBook;
  onUpdateBook: () => void;
  isCheckAll: boolean;
}

export const BookItems: React.FC<IPropsBook> = ({
  book,
  onUpdateBook,
  isCheckAll,
  listBookIdDelete,
  setListBookIdDelete,
}) => {
  const { form } = useContext(HomeContext);
  const [isCheck, setCheck] = useState(false);
  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    if (checked) {
      const newListBookIdsDeleted = [...listBookIdDelete, book.id];
      setListBookIdDelete(newListBookIdsDeleted);
    } else {
      const newListBookIdsDeleted = listBookIdDelete.filter(
        (idBook) => idBook !== book.id
      );
      setListBookIdDelete(newListBookIdsDeleted);
    }
    setCheck((pre) => !pre);
  }
  useEffect(() => {
    setCheck(isCheckAll);
  }, [isCheckAll]);
  function handleUpdate() {
    form.setValue('id', book.id);
    form.setValue('name', book.name);
    form.setValue('description', book.description);

    form.setValue('type', book.type);
    form.setValue('active', book.active);
    onUpdateBook();
  }
  const checkActive = clsx(
    'py-1 px-3 rounded-full text-xs',
    book.active ? 'bg-green-200 text-green-600 ml-2' : 'bg-red-200 text-red-600'
  );
  return (
    <tr className="hover:bg-gray-100 cursor-pointer">
      <td className="border-dashed border-t border-gray-200 px-3">
        <label className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer ">
          <input
            type="checkbox"
            className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline"
            checked={isCheck}
            onChange={handleCheck}
          />
        </label>
      </td>
      <td className="border-dashed border-t border-gray-200">
        <span className="text-gray-700 px-6 py-2 flex items-center">
          {book.name}
        </span>
      </td>
      <td className="border-dashed border-t border-gray-200">
        <span className="text-gray-700 px-7 py-4 flex items-center">
          {book.type}
        </span>
      </td>
      <td className="border-dashed border-t border-gray-200 relative">
        <span
          data-tip={book.description}
          className="text-gray-700 px-7 py-4 absolute top-0 whitespace-nowrap overflow-hidden w-full overflow-ellipsis"
        >
          {book.description}
        </span>
        <ToolTip type={'info'} />
      </td>
      <td className="border-dashed border-t border-gray-200 ">
        <span className="text-gray-700 px-7 py-4 flex items-center text-center">
          <span className={checkActive}>
            {book.active ? 'ACTIVE' : 'INACTIVE'}
          </span>
        </span>
      </td>
      <td className="border-dashed border-t border-gray-200">
        <span
          className="text-gray-700 px-7 py-4 flex items-center text-center ml-5"
          onClick={handleUpdate}
          data-testid="btnUpdate"
        >
          <AiOutlineEdit className=" transform hover:scale-150" />
        </span>
      </td>
    </tr>
  );
};
