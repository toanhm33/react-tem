import React, { useEffect, useContext } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FcAbout } from 'react-icons/fc';
import {
  Button,
  Dropdown,
  Input,
  Label,
  Message,
  Switch,
  Textarea,
} from 'src/components/common';
import { useTypesBook } from 'src/hooks/useTypesBook';
import { IBook } from 'src/types/book.type';
import { HomeContext } from '../homeContext';

export interface IPropsFormBookModal {
  modalIsOpen: boolean;
  modalClose: () => void;
  onSubmitForm: (value: IBook) => Promise<void>;
  isLoading: boolean;
  isUpdate: boolean;
}

const defaultOptions = [
  {
    id: 1,
    key: 'Romanic',
    value: 'Romanic',
  },
];

export const FormBookModal: React.FC<IPropsFormBookModal> = ({
  modalIsOpen,
  modalClose,
  onSubmitForm,
  isLoading,
  isUpdate,
}) => {
  const { data } = useTypesBook();
  const { form } = useContext(HomeContext);
  const { handleSubmit, register, formState, reset } = form;
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  return (
    <div></div>
    // <ModalComponent
    //   open={modalIsOpen}
    //   closeOnDocumentClick
    //   onClose={modalClose}
    //   className="w-50"
    // >
    //   <div className="leading-loose  flex justify-center ">
    //     <form
    //       className="m-4 p-10 bg-white rounded shadow-xl w-1/2 sm:w-full"
    //       onSubmit={handleSubmit(onSubmitForm)}
    //       data-testid="form"
    //     >
    //       <div className="text-gray-800 font-medium items-center flex mb-5">
    //         <FcAbout className="text-xl mr-1" />
    //         <h1> Create New Book</h1>
    //       </div>
    //       <div>
    //         <Label htmlFor="name">Name</Label>
    //         <Input
    //           {...register('name')}
    //           data-testid="name"
    //           name="name"
    //           type="text"
    //           placeholder="Name"
    //           error={Boolean(
    //             formState.errors.name && formState.errors.name.message
    //           )}
    //         />
    //         <Message
    //           type="error"
    //           content={formState.errors.name && formState.errors.name.message}
    //         />
    //       </div>
    //       <div className="mt-4">
    //         <Label htmlFor="description">Description</Label>
    //         <Textarea
    //           {...register('description')}
    //           name="description"
    //           data-testid="description"
    //           placeholder="Description"
    //           error={Boolean(
    //             formState.errors.description &&
    //               formState.errors.description.message
    //           )}
    //         />
    //         <Message
    //           type="error"
    //           content={
    //             formState.errors.description &&
    //             formState.errors.description.message
    //           }
    //         />
    //       </div>
    //       <div className="flex md:justify-between">
    //         <div className="w-1/2 md:flex-1">
    //           <Label htmlFor="status">Type</Label>
    //           <Dropdown
    //             {...register('type')}
    //             options={data ? data : defaultOptions}
    //             data-testid="type"
    //           />
    //         </div>
    //         <div className="ml-5">
    //           <Label htmlFor="active">Active</Label>
    //           <section className="mt-5">
    //             <Switch {...register('active')} data-testid="active" />
    //           </section>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-end mt-14">
    //         <div className="flex">
    //           <Button
    //             typestatus="error"
    //             onClick={modalClose}
    //             data-testid="cancel"
    //           >
    //             <span className="text-center">Cancel</span>
    //           </Button>
    //           <Button
    //             typestatus="success"
    //             className="ml-4"
    //             type="submit"
    //             isLoading={isLoading}
    //             data-testid="submit"
    //           >
    //             <span className="text-center">
    //               {isUpdate ? 'Update' : 'Create'}
    //             </span>
    //           </Button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </ModalComponent>
  );
};
