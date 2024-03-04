import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

it('test 1', () => {
  process.env.PUBLIC_URL = 'dev';
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();



});

test('screen', () => {
  render(<App />);

  expect(screen.getByText(/this is/i)).toBeDefined();
})