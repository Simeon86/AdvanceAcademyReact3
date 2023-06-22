import Navigation from './Components/Navigation';
import './App.css';

function App() {

  const menuArray = [
    {id: 0, title: 'Home'},
    {id: 1, title: 'About'},
    {id: 2, title: 'Contact'},
    {id: 3, title: 'Prices'},
  ]



  return (
    <div>
      <ul>
        {menuArray.map((item) => <Navigation key={item.id} title={item.title}/>)}
      </ul>
      
    </div>
  );
}

export default App;
