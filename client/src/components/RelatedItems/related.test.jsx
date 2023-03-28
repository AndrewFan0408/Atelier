// import '@testing-library/jest-dom';
// import {
//   render, fireEvent, screen, act, cleanup,
// } from '@testing-library/react';
// import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import axios from 'axios';
// import QandA from './index';
// import mockData from './exampleproducts';
// import mockQuestions from './exampleQuestions';

// jest.mock('axios');
// afterEach(() => {
//   jest.clearAllMocks();
//   cleanup();
// });

// const mockStore = configureStore([]);

// describe('QandA component', () => {
//   let store;
//   beforeEach(() => {
//     store = mockStore({
//       answerListReducer: {
//         answers: mockQuestions.results.answers,
//         questions: mockQuestions.results,
//         numberOfQuestions: 2,
//         product: {},
//         loading: true,
//         productId: '',
//       },
//     });
//   });

//   test('renders Add A Question button', async () => {
//     axios.get.mockResolvedValue({ data: mockData[0] });

//     await act(async () => {
//       render(
//         <Provider store={store}>
//           <QandA />
//         </Provider>,
//       );
//     });

//     await act(async () => {
//       fireEvent.click(screen.getByRole('button', { name: /Add A Question/i }));
//     });

//     const modal = await screen.findByTestId('modal');
//     await expect(modal).toContainElement(screen.queryByTestId('content2'));
//     fireEvent.change(screen.getByLabelText('Your Question? (mandatory)'), {
//       target: { value: 'mev is SO cool' },
//     });
//     fireEvent.change(screen.getByLabelText('What is your nickname? (mandatory)'), {
//       target: { value: 'mev' },
//     });
//     fireEvent.change(screen.getByLabelText('What is your email? (mandatory)'), {
//       target: { value: 'mev@example.com' },
//     });

//     const submit = screen.getByText('Submit Question');
//     axios.post.mockResolvedValue({ status: 201 });
//     fireEvent.click(submit);
//   });

//   test('renders Add Answer button when questions are there', async () => {
//     axios.get.mockResolvedValue({ data: mockData[0] });

//     await act(async () => {
//       render(
//         <Provider store={store}>
//           <QandA />
//         </Provider>,
//       );
//     });

//     await act(async () => {
//       fireEvent.click(screen.queryByTestId('329884'));
//     });
//     const modal = await screen.findByTestId('modal');
//     await expect(modal).toContainElement(screen.queryByTestId('content1'));
//     fireEvent.change(screen.getByLabelText('Your Answer? (mandatory)'), {
//       target: { value: 'mev is SO cool' },
//     });
//     fireEvent.change(screen.getByLabelText('What is your nickname? (mandatory)'), {
//       target: { value: 'mev' },
//     });
//     fireEvent.change(screen.getByLabelText('What is your email? (mandatory)'), {
//       target: { value: 'mev@example.com' },
//     });

//     const submit = screen.getByText('Submit Answer');
//     axios.post.mockResolvedValue({ status: 201 });
//     fireEvent.click(submit);
//   });

//   test('renders collapse answers when see more answers is clicked', async () => {
//     axios.get.mockResolvedValue({ data: mockData[0] });

//     await act(async () => {
//       render(
//         <Provider store={store}>
//           <QandA />
//         </Provider>,
//       );
//     });

//     await act(async () => {
//       fireEvent.click(screen.getAllByText('See More Answers')[0]);
//     });

//     expect(screen.getByText('Collapse Answers')).toBeInTheDocument();
//   });

//   test('collapses answers when Collapse Answers is clicked', async () => {
//     axios.get.mockResolvedValue({ data: mockData[0] });

//     await act(async () => {
//       render(
//         <Provider store={store}>
//           <QandA />
//         </Provider>,
//       );
//     });

//     await act(async () => {
//       fireEvent.click(screen.getAllByText('See More Answers')[0]);
//     });

//     await act(async () => {
//       fireEvent.click(screen.getByText('Collapse Answers'));
//     });

//     expect(screen.queryByText('Collapse Answers')).not.toBeInTheDocument();
//   });
// });
