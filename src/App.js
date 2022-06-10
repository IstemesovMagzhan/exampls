import { useEffect, useState } from 'react'
// import Example1 from './components/Example1'
// import Example2 from './components/Example2'
import ExchangeRate from './components/ExchangeRate'
// import UseEffect from './components/UseEffect'
// import ToDo from './ToDo'
// import ToDoForm from './ToDoForm'

function App() {
  // const [todos, setTodos] = useState([])

  // const addTask = (userInput) => {
  //   if (userInput) {
  //     const newItem = {
  //       id: Math.random().toString(36).substr(2, 9),
  //       task: userInput,
  //       complete: false
  //     }
  //     setTodos([...todos, newItem])
  //   }
  // }

  // const removeTask = (id) => {
  //   setTodos([...todos.filter((todo) => todo.id !== id)])
  // }

  // const handleToggle = (id) => {
  //   setTodos([
  //     ...todos.map((todo) =>
  //       todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
  //     )
  //   ])
  // }
  // const [input, setInput] = useState();

  // function change (event) {
  //   setInput(
  //     event.target.value
  //   );
  // }

  const [exchangeRates, setExchangeRates] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("KGS");

  const fetchData = () => {
    fetch(`http://www.floatrates.com/daily/${baseCurrency}.json`) // make http request
      .then((response) => response.json())
      .then((data) => setExchangeRates(data));
  }


  useEffect(() => fetchData, [setExchangeRates]);

  const output = Object.values(exchangeRates).map(currency => <ExchangeRate from={baseCurrency} to={currency.code} rate={currency.inverseRate} />);

  const CURS = (event) => {
    setBaseCurrency(event.target.value);
  }

  return (
    <div className="App">

    <button onClick={useEffect}>update</button>
    <input type="text" value={baseCurrency} onChange={CURS}/>

      {output}
      
      

      {/* <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
      <UseEffect />
      

      <Example1 act={change} state={input}/>
      <Example2 act={change} state={input} /> */}
    </div>
  );
}

export default App
