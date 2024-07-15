import { AsyncThunkAction, GetDispatch, GetState } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateScheme } from 'shared/types/stateScheme';

type TActionCreator<Return, Args, RejectedValue> =
  (arg: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>

jest.mock('axios');
const mockAxios = jest.mocked(axios);

class TestAsyncThunk<Return, Args, ThunkApiConfig> {
  dispatch: GetDispatch<ThunkApiConfig>;

  actionCreator: TActionCreator<Return, Args, ThunkApiConfig>;

  getState: () => GetState<ThunkApiConfig>;

  navigate: jest.Mock<unknown, unknown[], unknown>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    actionCreator: TActionCreator<Return, Args, ThunkApiConfig>,
    state?: StateScheme,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn() as unknown as GetDispatch<ThunkApiConfig>;
    this.getState = jest.fn(() => state as GetState<ThunkApiConfig>);
    this.api = mockAxios;
    this.navigate = jest.fn();
  }

  async callThunk(reqParams: Args) {
    const action = this.actionCreator(reqParams);
    return action(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate },
    );
  }
}

export default TestAsyncThunk;
