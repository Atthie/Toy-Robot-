import Robot from './Robot';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='container'>
              <div>
                  <h1>MES AMIS ROBOTS</h1>
              </div>
              <div>
                  <input type="text" name="" id="" placeholder='   Rechercher par nom' />
              </div>
              <Robot nom='Hervin howen ' proprio='lorem@mel'/>
              <Robot nom='Dan clark' proprio='lorem@mel'/>
        </div>
    </div>
  );
}

export default App;
