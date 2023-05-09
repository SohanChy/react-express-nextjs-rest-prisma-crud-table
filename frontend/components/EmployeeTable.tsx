import React, { useReducer } from 'react';
import EmployeeRow, { EmployeeProps } from './EmployeeRow';
import { useState } from 'react';
import { EmployeeTableReducer } from '../StateManagement/EmployeeTable/reducer';

type Props = {
  initialEmployeeList: EmployeeProps[]
}

const EmployeeTable: React.FC<Props> = ({initialEmployeeList}) => {
  const [state, dispatch] = useReducer(
    EmployeeTableReducer, { employeeList: initialEmployeeList }
    );

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
          <EmployeeRow key={employee.id} employee={employee}/>
        ))}
       </tbody>
    </table>
  )
}

export default EmployeeTable;