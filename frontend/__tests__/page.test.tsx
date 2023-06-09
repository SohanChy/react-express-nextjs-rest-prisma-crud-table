import { queryByLabelText, render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import EmployeeTable from '../components/EmployeeTable';


jest.mock('next/router', () => require('next-router-mock'));

const mockEmployeeList = [
  {  id: 1,
    firstName: "John",
    lastName: "Smith",
    salary: 5400,
  },
  {  id: 2,
    firstName: "Jenna",
    lastName: "Smith",
    salary: 1400,
  }
];

describe('Core Requirements - Read', () => {

  it('should display a heading and a employees table', () => {
    const { getByRole } = render(<Home employeeList={mockEmployeeList} />);

    const headingElement = getByRole('heading', { name: /employees/i });
    expect(headingElement).toBeInTheDocument();
 
    const tableElement = getByRole('table');
    expect(tableElement).toBeInTheDocument();
    
  });

  it('The table should have four columns, with headings First name, last name, and salary', () => {
    const { getByRole, getAllByRole } = render(<EmployeeTable initialEmployeeList={mockEmployeeList}/>);
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

    const { getAllByRole } = render(<EmployeeTable initialEmployeeList={mockEmployeeList}/>);
    const tableRows = getAllByRole('row');
    expect(tableRows.length).toBeGreaterThan(1);

    const cells = getAllByRole('cell');

    // count total $ signs in all cells
    let count = 0;
    for (const cell of cells) {
      if (cell.textContent?.includes('$')) {
        count++;
      }
    }

    // There  should be only same amount of $ signs as rows
    expect(count).toEqual(mockEmployeeList.length);

  });

});

describe('Core Requirements - Edit', () => {

  it('The table rows should have an Edit button', () => {
    const { getAllByRole } = render(<EmployeeTable initialEmployeeList={mockEmployeeList} />);

    const rows = getAllByRole('row');

    // first row is header, so skip it by slicing
    for (const row of rows.slice(1)) {
      expect(row.textContent).toContain('Edit');
    }
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

describe('Core Requirements - Delete', () => {

  it('The table rows should have an Delete button', () => {
    const { getAllByRole } = render(<EmployeeTable initialEmployeeList={mockEmployeeList} />);

    const rows = getAllByRole('row');

    // first row is header, so skip it by slicing
    for (const row of rows.slice(1)) {
      expect(row.textContent).toContain('Delete');
    }
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