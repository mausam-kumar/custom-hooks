import Dashboard from './components/Dashboard.jsx'
import TodoList from './components/useReducer/TodoList.jsx'
import Search from './components/searchBar/Search.jsx';
import CountryDetails from './components/searchBar/CountryDetails.jsx';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      <TodoList />
      <Search />
      <Routes>
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
