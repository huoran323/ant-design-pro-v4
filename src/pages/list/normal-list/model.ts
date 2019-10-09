import { AnyAction, Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
import { NormalListItem, NormalListData } from './data.d';
import { getNormalList } from './service';

export interface StateType {
  data: NormalListData;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: StateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetch: Effect;
  };
  reducers: {
    save: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'normalList',
  state: {
    data: {
      list: [],
    },
  },

  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getNormalList);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
export default Model;
