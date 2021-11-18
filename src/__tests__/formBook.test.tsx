import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import {
  FormBookModal,
  IPropsFormBookModal,
} from 'src/pages/HomePage/components/formBookModal';
import { HomeContextProvider } from 'src/pages/HomePage/homeContext';
import { wrapConfig } from '../helper/helper';
import HomePage from '../pages/HomePage/index';

afterEach(() => {
  cleanup();
});
function renderBookForm(props: Partial<IPropsFormBookModal> = {}) {
  const defaultProps: IPropsFormBookModal = {
    modalIsOpen: true,
    modalClose() {
      return;
    },
    isLoading: false,
    isUpdate: false,
    async onSubmitForm() {},
  };
  return wrapConfig(
    <HomeContextProvider>
      <FormBookModal {...defaultProps} {...props} />
    </HomeContextProvider>
  );
}

describe('<FormBookModal/>', () => {
  test('should display correct error message Name field require', async () => {
    const { getByTestId, findByText } = renderBookForm();
    const buttonSubmit = getByTestId('submit');
    fireEvent.click(buttonSubmit);
    const nameRequired = await findByText('Name is a required field');
    expect(nameRequired.innerHTML).toEqual('Name is a required field');
  });
  test('should display correct error message Description field require', async () => {
    const { getByTestId, findByText } = renderBookForm();
    const buttonSubmit = getByTestId('submit');
    fireEvent.click(buttonSubmit);
    const nameRequired = await findByText('Name is a required field');
    expect(nameRequired.innerHTML).toEqual('Name is a required field');
  });
  test('should correct input data name field', async () => {
    const { getByTestId } = renderBookForm();
    const inputName = getByTestId('name') as HTMLInputElement;

    const inputContent = 'Test input';
    fireEvent.change(inputName, {
      target: {
        value: inputContent,
      },
    });
    expect(inputName.value).toEqual(inputContent);
  });
  test('should correct input data description field', async () => {
    const { getByTestId } = renderBookForm();
    const textAreaName = getByTestId('description') as HTMLTextAreaElement;
    const inputContent = 'Test description';
    fireEvent.change(textAreaName, {
      target: {
        value: inputContent,
      },
    });
    expect(textAreaName.value).toEqual(inputContent);
  });

  test('should correct content button submit when is update form', async () => {
    const { getByTestId } = renderBookForm({ isUpdate: true });
    const buttonEl = getByTestId('submit') as HTMLButtonElement;
    const buttonUpdateContent = 'Update';
    expect(buttonEl.textContent).toEqual(buttonUpdateContent);
  });
  test('should open form modal when is create book', async () => {
    const { getByTestId } = wrapConfig(
      <HomeContextProvider>
        <HomePage />
      </HomeContextProvider>
    );
    const buttonEL = getByTestId('btnOpen') as HTMLButtonElement;
    fireEvent.click(buttonEL);
    const formModalEl = getByTestId('form') as HTMLButtonElement;
    expect(formModalEl).toBeInTheDocument();
  });
  test('should default disable button delete', async () => {
    const { getByTestId } = wrapConfig(
      <HomeContextProvider>
        <HomePage />
      </HomeContextProvider>
    );
    const buttonEL = getByTestId('btnDelete') as HTMLButtonElement;
    expect(buttonEL).toHaveAttribute('disabled');
  });
});
