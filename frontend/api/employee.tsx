import axios, { AxiosResponse } from 'axios';
import { Employee } from '../components/EmployeeRow';

const API_URL = (process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001') + '/api/v1';

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
interface ResponseData {
  success: boolean;
  data?: any;
  message?: string;
}

export class EmployeeApi {

  async getListOfEmployees() {
      try {
        const response: AxiosResponse<ResponseData> = await  axios.get(`${API_URL}/employees/`,{
          params: {
            limit: 1000
          }
        });
        if (response.data.success) {
          return response.data.data;
        } else {
          //TODO: Show error toast code
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
  }


  async createEmployee(employeeFormData: Employee) {
      try {
        // The way the ui is made, id comes as null here
        // We Remove this null before sending to server
        delete employeeFormData.id;
        const response: AxiosResponse<ResponseData> = await axios.post(
          `${API_URL}/employees/`, employeeFormData, config);
        if (response.data.success) {
          return response.data.data;
        } else {
          //TODO: Show error toast code
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
  }

  async updateEmployee(employee: Employee): Promise<Employee> {
    try {
      const response = await axios.put(`${API_URL}/employees/${employee.id}`, employee, config);
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