import React, { useReducer } from 'react';
import EmployeeRow, { Employee } from './EmployeeRow';
import { useState } from 'react';
import { EmployeeTableReducer } from '../StateManagement/EmployeeTable/reducer';
import { EmployeeApi } from '../api/employee';
import { ActionType } from '../StateManagement/EmployeeTable/actions';

type Props = {
  initialEmployeeList: Employee[]
}


const EmployeeTable: React.FC<Props> = ({initialEmployeeList}) => {
  const [state, dispatch] = useReducer(
    EmployeeTableReducer, { employeeList: initialEmployeeList }
    );

    const [updatingEmployeeId, setUpdatingEmployeeId] = useState<number>(null);
  

  // This should be extracted to actions
  const updateEmployee = async (employeeFormData: Employee) => {
    setUpdatingEmployeeId(employeeFormData.id);
      try {
        const employeeApi = new EmployeeApi();
        
        const updatedEmployee = await employeeApi.updateEmployee(employeeFormData);
        dispatch({ type: ActionType.Update, payload: updatedEmployee });
      } catch (error) {
        // dispatch();
      }
      finally {
        setUpdatingEmployeeId(null);
      }
  }

  // This should be extracted to actions 
  const deleteEmployee = async (employee: Employee) => {
    setUpdatingEmployeeId(employee.id);
    try {
      const employeeApi = new EmployeeApi();
      const deleted = await employeeApi.deleteEmployee(employee);
      if(deleted){
        dispatch({ type: ActionType.Delete, payload: employee });
      }
      
    } catch (error) {
      // dispatch();
    }
    finally {
      setUpdatingEmployeeId(null);
    }
}

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Salary</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {state.employeeList.map((employee)=>(
          <EmployeeRow key={employee.id} employee={employee} 
          updateEmployee={updateEmployee} deleteEmployee={deleteEmployee}
          isUpdating={updatingEmployeeId == employee.id}/>
        ))}
       </tbody>
    </table>
  )
}


export default EmployeeTable;