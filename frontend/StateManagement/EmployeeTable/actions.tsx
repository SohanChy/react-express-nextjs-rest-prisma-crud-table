import { EmployeeProps } from "../../components/EmployeeRow";

export enum ActionType {
    Update = 'UPDATE',
    Delete = 'DELETE',
  }
  
interface UpdateAction {
    type: ActionType.Update;
    payload: EmployeeProps;
}

interface DeleteAction {
    type: ActionType.Delete;
    payload: number;
}

export type Action = UpdateAction | DeleteAction;

