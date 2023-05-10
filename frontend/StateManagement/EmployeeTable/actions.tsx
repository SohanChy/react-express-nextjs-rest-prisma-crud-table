import { Employee } from "../../components/EmployeeRow";

export enum ActionType {
    Update = 'UPDATE',
    Delete = 'DELETE',
    Create = 'CREATE',
  }

interface CreateAction {
    type: ActionType.Create;
    payload: Employee;
}
  
interface UpdateAction {
    type: ActionType.Update;
    payload: Employee;
}

interface DeleteAction {
    type: ActionType.Delete;
    payload: Employee;
}

export type Action = UpdateAction | DeleteAction | CreateAction;

