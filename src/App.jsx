import Robot from './Robot';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='container'>
              <div className='titre'>
                  <h1>MES AMIS ROBOTS</h1>
              </div>
              <div className='input'>
                  <input type="text" name="" id="" placeholder='   Rechercher par nom' />
              </div>
              <div className='robot'>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/W33.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/W33.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/9WO.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/EQ6.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/9WO.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/EQ6.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/08Q.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/9WO.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/08Q.png'/>
              <Robot nom='Hervin howen ' proprio='lorem@mel' image='./images/9WO.png'/>

              </div>

        </div>
    </div>
  );
}

export default App;
