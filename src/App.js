
import './App.css';
import Header from './MyComponents/Header'
import { Footer } from './MyComponents/Footer'
import {TodoItem} from './MyComponents/TodoItem'
import {Todos} from './MyComponents/Todos'

function App() {

    let todos = [
        {
            sno: 1,
            title: "Go to Market",
            desc:"We need to go out in a market to buy vegitables"
        },
        {
            sno: 2,
            title: "Go to GYM",
            desc: "We need to go out for exercise"
        },
        {
            sno: 3,
            title: "Study",
            desc: "We need to Study React course"
        },
    ]
  return (
      <>
          <Header title="My TODOLIST" searchbar={true} />
          <Todos todos={todos} onDelete={onDelete }/>
          <TodoItem/>
          <Footer />
          

      </>
  );
}

export default App;
