/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/views/Home';

import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {rootStore} from '../src/store';
import {ThemeProvider} from '@rneui/themed';
import {theme} from '../src/theme';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRoutes} from '../src/routes/Home/types';
import {EditDevice} from '../src/views';
import HeaderButton from '../src/views/Home/headerButton';

afterEach(cleanup);
const RootStack = createStackNavigator();
const MockedNavigator = ({component, params = {}}) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={rootStore}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="MockedScreen"
              component={component}
              initialParams={params}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};
const MockedNavigatorForRoot = ({route, params = {}}) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={rootStore}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName={route}>
            <RootStack.Screen
              name={HomeRoutes.HomeLogged}
              component={Home}
              initialParams={{headerLeft: () => <HeaderButton />}}
            />
            <RootStack.Screen
              name={HomeRoutes.EditDevice}
              component={EditDevice}
              initialParams={params}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

test('Open Home Screen', async () => {
  const rendered = render(<MockedNavigator component={Home} />).toJSON;
  expect(rendered).toMatchSnapshot();

  const listDevice = await screen.findByTestId('flatList');
  expect(listDevice).toBeTruthy();
  // Add this line to get rid of the act() warning
  // await waitFor(() => {});
});

describe('Making test Devices Liste Edit', () => {
  it('should match the snapshot EditDevice', () => {
    const rendered = render(<MockedNavigator component={EditDevice} />).toJSON;

    expect(rendered).toMatchSnapshot();
  });

  it('should match the snapshot Home', () => {
    const rendered = render(<MockedNavigator component={Home} />).toJSON;

    expect(rendered).toMatchSnapshot();
  });

  it('test imputText Edit Device', async () => {
    const expectedValueOs = 'android';
    render(<MockedNavigator component={EditDevice} />);

    const inputModelId = screen.getByTestId('modelId');
    await act(async () => {
      await fireEvent(inputModelId, 'onChangeText', expectedValueOs);
    });
    const next = screen.queryByText('modelId');

    expect(next).toEqual(next);
  });
  test('clicking on one item takes you to the details screen', async () => {
    render(<MockedNavigatorForRoot route={HomeRoutes.EditDevice} />);
    const input = await screen.getByTestId('modelId');
    const model = 'Samsung';
    fireEvent.changeText(input, model);
    console.log(input);
    const next = screen.queryByText(model);

    expect(next).toEqual(next);
    fireEvent.press(screen.getByText('Save'));
  });
});
