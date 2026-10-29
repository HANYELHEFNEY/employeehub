
// =====================================================================
// App: the root component
// CONCEPT: UI = f(state). `page` decides which screen is shown. Clicking a tab changes the
// state, React calls App() again, and the other page appears. No page reload, no router yet
// (React Router comes in Session 4).
// =====================================================================
import { useState } from 'react';
import EmployeesPage from './pages/EmployeesPage';
import DepartmentsPage from './pages/DepartmentsPage';
 
export default function App() {
  const [page, setPage] = useState('employees'); // 'employees' | 'departments'
 
  return (
    <div className="page">
      <header className="top">
        <h1>EmployeeHub</h1>
        <nav className="tabs">
          {/* The class is computed from state: the current tab gets "active" */}
          <button className={page === 'employees' ? 'tab active' : 'tab'} onClick={() => setPage('employees')}>
            Employees
          </button>
          <button className={page === 'departments' ? 'tab active' : 'tab'} onClick={() => setPage('departments')}>
            Departments
          </button>
        </nav>
      </header>
 
      {/* Conditional rendering: only one page exists at a time */}
      {page === 'employees' ? <EmployeesPage /> : <DepartmentsPage />}
    </div>
  );
}
