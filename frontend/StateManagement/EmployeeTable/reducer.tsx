import { act } from 'react-dom/test-utils';
import { Employee } from '../../components/EmployeeRow';
import {ActionType, Action} from './actions'
type State = {
    employeeList: Employee[]
}
  
export const EmployeeTableReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ActionType.Get:
        return {...state, employeeList: action.payload};

      case ActionType.Create:
        return {...state, employeeList: [...state.employeeList, action.payload]};

      case ActionType.Update:
        return {...state, employeeList: state.employeeList.map((employee: Employee) => {
          if (employee.id === action.payload.id) {
            return action.payload;
          } else {
            return employee;
          }
        })
      };

      case ActionType.Delete:
        return {...state, 
          employeeList: state.employeeList.filter(
            employee => employee.id !== action.payload.id
            )
        };

      default:
        throw new Error(`Unhandled action type: ${action}`);
    }
  };