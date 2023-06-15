import { MockedProvider } from '@apollo/client/testing';

/**
 * Higher Order Component that wraps a component with the `MockedProvider` from the `@apollo/client/testing` library.
 * This allows for easy mocking of Apollo client data during testing.
 *
 * @author Aravinda Meewalaarachchi
 * @param Props - an object with a single property, `component` which is a React functional component to be wrapped
 * @returns ReactElement - A React component that has been wrapped with the `MockedProvider`
 *
 */

export const withMockedProvider = (Component: any) => {
  return (props: any) => {
    const {
      props: { providerProps, componentProps },
    } = props;
    return (
      <MockedProvider mocks={[providerProps?.mocks]} addTypename={false}>
        <Component {...componentProps} />
      </MockedProvider>
    );
  };
};
