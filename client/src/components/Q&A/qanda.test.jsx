import '@testing-library/jest-dom';
import {
  render, fireEvent, screen, act, cleanup,
} from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from '../../../../store';
import QandA from './index';
import mockData from './exampleproducts';

jest.mock('axios');
afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

test('renders Tile component within modal', async () => {
  axios.get.mockResolvedValue({ data: mockData[0] }); // mock the API call

  // render the component
  await act(async () => {
    render(
      <Provider store={store}>
        <QandA product_id={mockData[0].id} />
      </Provider>,
    );
  });

  // click the "Write a review" button to open the modal
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /Add A Question/i }));
  });

  // wait for the modal to appear
  const modal = await screen.findByTestId('modal');
  // check if the Tile component is rendered within the modal
  await expect(modal).toContainElement(screen.queryByTestId('content2'));
});
