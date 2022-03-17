import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "./actions";

type ActionCreatorsType = typeof actions;

const useActions = (actions: ActionCreatorsType) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
