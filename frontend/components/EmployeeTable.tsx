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
    const [creatingEmployee, setCreatingEmployee] = useState<boolean>(false);
  

  // This should be extracted to actions
  const updateEmployee = async (employeeFormData: Employee) => {
    setUpdatingEmployeeId(employeeFormData.id);
      try {
        const employeeApi = new EmployeeApi();
        
        if(employeeFormData.id){
          const updatedEmployee = await employeeApi.updateEmployee(employeeFormData);
          dispatch({ type: ActionType.Update, payload: updatedEmployee });
        }
        else {
          const createdEmployee = await employeeApi.createEmployee(employeeFormData);
          dispatch({ type: ActionType.Create, payload: createdEmployee });
        }

        
      } catch (error) {
        // dispatch();
      }
      finally {
        setUpdatingEmployeeId(null);
        setCreatingEmployee(false);
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

  const onAddEmployee = () => {
    setCreatingEmployee(true);
  }

  const onCreateCancel = () => {
    setCreatingEmployee(false)
  }

  return (
    <table className="table table-hover">
      <thead>
        <tr className="align-middle">
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Salary</th>
          <th scope="col">
          <button type="button" className="btn btn-outline-success mt-1" onClick={onAddEmployee}>Add Employee</button>&nbsp;
          </th>
        </tr>
      </thead>
      <tbody>
        {creatingEmployee?
        <EmployeeRow employee= {{firstName:"",lastName:"",salary:0,id:null}}
          updateEmployee={updateEmployee} deleteEmployee={null}
          onCreateCancel={onCreateCancel}
          isUpdating={false}/> 
          : <></>
        }
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