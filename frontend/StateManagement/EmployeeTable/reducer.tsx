import { EmployeeProps } from '../../components/EmployeeRow';
import {ActionType, Action} from './actions'
type State = {
    employeeList: EmployeeProps[]
}
  
export const EmployeeTableReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ActionType.Update:
        return { employeeList: [] };
      case ActionType.Delete:
        return { employeeList: [] };
      default:
        throw new Error(`Unhandled action type: ${action}`);
    }
  };