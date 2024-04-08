import { AsyncThunkAction, GetDispatch, GetState } from '@reduxjs/toolkit';

type TActionCreator<Return, Args, ThunkApiConfig> =
  (arg: Args) => AsyncThunkAction<Return, Args, ThunkApiConfig>

class TestAsyncThunk<Return, Args, ThunkApiConfig> {
  dispatch: GetDispatch<ThunkApiConfig>;

  actionCreator: TActionCreator<Return, Args, ThunkApiConfig>;

  getState: () => GetState<ThunkApiConfig>;

  constructor(actionCreator: TActionCreator<Return, Args, ThunkApiConfig>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn() as unknown as GetDispatch<ThunkApiConfig>;
    this.getState = jest.fn();
  }

  async callThunk(reqParams: Args) {
    const action = this.actionCreator(reqParams);
    return action(this.dispatch, this.getState, undefined);
  }
}

export default TestAsyncThunk;
