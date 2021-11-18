import React, { ChangeEvent, useMemo, useRef, useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import {
  Button,
  Dropdown,
  InputSearch,
  Message,
  ToolTip,
} from 'src/components/common';
import { dataFilter } from 'src/constant/dataFilter';
import EMessage from 'src/constant/Messages';
import { useBooks } from 'src/hooks/useBooks';
import { useDebounce } from 'src/hooks/useDebounce';
import { useDeleteBook } from 'src/hooks/useDeleteBook';
import { usePostBook } from 'src/hooks/usePostBook';
import { useUpdatePostBook } from 'src/hooks/useUpdateBook';
import { IQueryBook } from 'src/types/bookQuery';
import { IBook } from './../../types/book.type';
import { FormBookModal } from './components/formBookModal';
import { TableBook } from './components/tableBook';
import { HomeContextProvider } from './homeContext';
const debounceTime = 500;

const HomePage: React.FC = () => {
  const [searchBook, setSearchBook] = useState<IQueryBook | undefined>(
    undefined
  );
  const debouncedSearchName = useDebounce(searchBook, debounceTime);
  const { data, isLoading, error } = useBooks(debouncedSearchName);
  const [isUpdate, setIsUpdate] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);
  const { mutateAsync, isLoading: loadingCreateBook } = usePostBook();
  const { mutateAsync: mutateDeleteBook, isLoading: loadingDeleteBook } =
    useDeleteBook();
  const [listBookIdDelete, setListBookIdDelete] = useState<number[]>([]);
  const { mutateAsync: mutateUpdateBook, isLoading: loadingUpdateBook } =
    useUpdatePostBook();

  const refFormModal = useRef(null);
  const isDeleteBook = useMemo(() => {
    return !Boolean(listBookIdDelete.length);
  }, [listBookIdDelete]);

  function handleOpenFormBookModal() {
    setModalOpen(true);
  }
  function handleCloseFormBookModal() {
    setModalOpen(false);
    if (isUpdate) {
      setIsUpdate(false);
    }
  }
  async function handleSubmitForm(book: IBook) {
    const conditionSubmit = isUpdate ? updateBook : saveBook;
    conditionSubmit(book);
  }
  function handleUpdateBook() {
    handleOpenFormBookModal();
    setIsUpdate(true);
  }

  async function saveBook(value: IBook) {
    try {
      await mutateAsync(value);
      toast.success(EMessage.CREATE_SUCCESS);
      handleCloseFormBookModal();
    } catch (error) {
      // const { message } = error.response;
      // toast.error(message);
    }
  }
  async function updateBook(value: IBook) {
    try {
      await mutateUpdateBook(value);
      toast.success(EMessage.UPDATE_SUCCESS);
      handleCloseFormBookModal();
    } catch (error) {
      // const { message } = error.response;
      // toast.error(message);
    }
  }
  async function handleDeleteBook() {
    try {
      await mutateDeleteBook(listBookIdDelete);
      toast.success(EMessage.DELETE_SUCCESS);
      setListBookIdDelete([]);
    } catch (error) {}
  }
  function handleSearchBook(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchBook((pre) => ({ ...pre, name: value }));
  }
  function handleChangeStatus(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setSearchBook((pre) => ({ ...pre, active: value }));
  }

  if (error) {
    return <Message type="error" content="Something wrong!!" />;
  }
  return (
    <HomeContextProvider>
      <div className="bg-gray-200 min-h-screen">
        <div className="container mx-auto py-6 px-4">
          <section className="flex items-center border-b mb-10 border-gray-300">
            <h1 className="text-3xl py-4">Books</h1>
            <span
              data-tip="CREATE BOOK"
              onClick={handleOpenFormBookModal}
              data-testid="btnOpen"
            >
              <IoAddCircleOutline className="ml-2 text-3xl cursor-pointer" />
            </span>
            <ToolTip />
          </section>
          <div className="mb-4 justify-between items-center">
            <section className="flex justify-between md:flex-col">
              <div className="mb-5 w-2/3 flex md:w-full">
                <div className="flex-1 mr-5">
                  <InputSearch
                    placeholder="Search book..."
                    onChange={handleSearchBook}
                  />
                </div>
                <Button
                  typestatus="success"
                  disabled={isDeleteBook}
                  isLoading={loadingDeleteBook}
                  onClick={handleDeleteBook}
                  data-testid="btnDelete"
                >
                  Delete
                </Button>
              </div>
              <div>
                <Dropdown
                  options={dataFilter}
                  onChange={handleChangeStatus}
                  defaultValue="status"
                  className="md:mb-5"
                />
              </div>
            </section>
            <TableBook
              data={data ?? []}
              onUpdateBook={handleUpdateBook}
              listBookIdDelete={listBookIdDelete}
              setListBookIdDelete={setListBookIdDelete}
              isLoading={isLoading}
            />
          </div>
        </div>
        {modalIsOpen && (
          <FormBookModal
            isLoading={loadingCreateBook || loadingUpdateBook}
            modalIsOpen={modalIsOpen}
            modalClose={handleCloseFormBookModal}
            onSubmitForm={handleSubmitForm}
            isUpdate={isUpdate}
          />
        )}
      </div>
    </HomeContextProvider>
  );
};

export default HomePage;
