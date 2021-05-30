import '@testing-library/jest-dom/extend-expect';

// -------------------
// MOCK AXIOS GLOBALLY
// -------------------
jest.mock('axios', () => ({
  request: jest.fn(
    res =>
      new Promise(resolve => {
        resolve(res || {data: {}});
      })
  ),
}));