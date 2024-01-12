import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/layout/header';
//import Department from './components/departments/department';
//import CreateButtonDepartment from './components/departments/createDepartmentButton';
import UpdateDepartment from './components/departments/updateDepartment';
import AddDepartment from './components/departments/addDepartment';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Departments from './components/departments'; 
import EmployeeList from './components/employeeList';
import AddEmployee from './components/employees/addEmployee';
import UpdateEmployee from './components/employees/updateEmployee';
import TaskList from './components/taskList';
import AddTask from './components/tasks/addTask';
import UpdateTask from './components/tasks/updateTask';
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Header />
      
      <Routes>
      <Route 
      exact path="/"
      element={<Departments />}>
      </Route>

      <Route 
      exact path="/createDepartmentForm"
      element={<AddDepartment />}>
      </Route>

      <Route
      exact path="/updateDepartment/:dep_id"
      element={<UpdateDepartment />}>
      </Route>
      
      <Route
      exact path="/employeeList/:department_id"
      element={<EmployeeList />}>
      </Route>

      <Route exact path="/createEmployeeForm/:departmentId" element={<AddEmployee/>}>
      </Route>
      <Route exact path="/updateEmployeeForm/:departmentId/:employeeId" element={<UpdateEmployee/>}>
      </Route>
      <Route exact path='/taskList/:departmentId/:employeeId' element={<TaskList/>}></Route>
      <Route exact path="/addTask/:departmentId/:employeeId" element={<AddTask/>}></Route>  
      <Route exact path="/updateTask/:departmentId/:employeeId/:taskId" element={<UpdateTask/>}>
        
      </Route>
      </Routes>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
