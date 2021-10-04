import './App.css';
import Sidebar from './components /Sidebar'
import Main from './components /Main'
import AddNewTodo from './components /AddNewTodo'
import Calender from './components /Calender'
import EditTodo from './components /EditTodo'
import Projects from './components /Projects'
import Todos from './components /Todos'
import User from './components /User'
function App() {
  return (
    <div className = "App">
      <Sidebar>
        <User/>
        <AddNewTodo/>
        <Calender/>
        <Projects/>
        <Main>
        <Todos/>
        <EditTodo/>
        </Main>

      </Sidebar>

      <Main>
        <Todos/>
        <EditTodo/>

      </Main>
    </div>
  );
}

export default App;
