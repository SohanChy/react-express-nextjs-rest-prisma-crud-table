import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import EmployeeTable from '../components/EmployeeTable';


jest.mock('next/router', () => require('next-router-mock'));

describe('Core Requirements - Read', () => {

  const mockEmployeeList = [
    {  id: 1,
      firstName: "John",
      lastName: "Smith",
      salary: 5400,
    }
  ];

  it('should display a heading and a employees table', () => {
    const { getByRole } = render(<Home />);

    const headingElement = getByRole('heading', { name: /employees/i });
    expect(headingElement).toBeInTheDocument();
 
    const tableElement = getByRole('table');
    expect(tableElement).toBeInTheDocument();
    
  });

  it('The table should have four columns, with headings First name, last name, and salary', () => {
    const { getByRole, getAllByRole } = render(<EmployeeTable employeeList={mockEmployeeList} />);
    const tableElement = getByRole('table');
    expect(tableElement).toBeInTheDocument();

    const tableRows = getAllByRole('row');
    expect(tableRows.length).toBeGreaterThan(1);
    expect(tableRows[1].querySelectorAll('td').length).toBe(4);

    const tableHeaders = getAllByRole('columnheader');
    expect(tableHeaders.length).toBeGreaterThan(3);
    expect(tableHeaders[0]).toHaveTextContent('First Name');
    expect(tableHeaders[1]).toHaveTextContent('Last Name');
    expect(tableHeaders[2]).toHaveTextContent('Salary');


  });

  it('Elements of Table column Salary should have $ sign.', () => {
    throw new Error();
  });

  it('Elements of Table column Salary should have $ sign.', () => {
    throw new Error();
  });

});

describe('Core Requirements - Edit', () => {

  it('The table rows should have an Edit button', () => {
    throw new Error();
  });

  it('Edit button should show an option to edit the specific row', () => {
    throw new Error();
  });

  it('Clicking save should update the table with edited information', () => {
    throw new Error();
  });

  it('Clicking cancel should clean the editing option', () => {
    throw new Error();
  });

});

describe('Core Requirements - Edit', () => {

  it('The table rows should have an Delete button', () => {
    throw new Error();
  });

  it('Delete button should ask confirmation with yes no.', () => {
    throw new Error();
  });

  it('Clicking Yes on the confirmation should remove the row from table', () => {
    throw new Error();
  });

  it('Clicking No on the confirmation should keep the table as is', () => {
    throw new Error();
  });

});

describe('Core Requirements - Add Employee', () => {

  it('There should be an Add Employee Button', () => {
    throw new Error();
  });

  it('Clicking the add employee button should show a employee creation form', () => {
    // with inputs for First name, last name, and salary
    // with confirmation and cancel
    throw new Error();
  });

  it('Clicking save on the create form should insert new employee to the table', () => {
    throw new Error();
  });

});