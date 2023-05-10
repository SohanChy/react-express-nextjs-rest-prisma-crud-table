import axios from 'axios';
import { Employee } from '../components/EmployeeRow';

const API_URL = 'https://localhost:3001';

export class EmployeeApi {
  createEmployee(employeeFormData: Employee) {
    employeeFormData.id = 999999;
    return employeeFormData;
  }

  async updateEmployee(employee: Employee): Promise<Employee> {
    return employee;
    
    try {
      const response = await axios.put(`${API_URL}/employee/${employee.id}`, employee);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }


  async deleteEmployee(employee: Employee): Promise<boolean> {
    return true;
    
    try {
      const response = await axios.put(`${API_URL}/employee/${employee.id}`, employee);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
}