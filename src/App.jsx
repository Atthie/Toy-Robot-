import Robot from './Robot';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [robotData, setRobotData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setRobotData(data);
      });
  }, []);

  function filterRobots(robotData, searchTerm) {
    return robotData.filter(
      function(robot) {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  const filteredRobots = filterRobots(robotData, searchTerm);


  function recherche(event) {
    const value = event.target.value;
    if (value.length >= 3) {
      setSearchTerm(value);
    } else {
      setSearchTerm('');
    }
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='titre'>
          <h1>MES AMIS ROBOTS</h1>
        </div>
        <div className='input'>
          <input type="text" name="" id="" placeholder='Rechercher par nom'  onChange={recherche} />
        </div>
        <div className='robot'>
          <div className='row'>
            {filteredRobots.map(robot => (
              <Robot key={robot.id} nom={robot.name} mail={robot.email} image={robot.name}  />
            ))}
          </div>           
        </div>
      </div>
    </div>
  );
}

export default App;
