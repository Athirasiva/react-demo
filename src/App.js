import './App.css';
import Demo from './Demo';
import Example from './Example';
import Test from './Test';
import Testclass from './Testclass';

function App() {
//  js
 const firstName = "Arya"
const secondName = "Athira"
  return (
    <>
      <h1 style={{color:'red'}}>My First React App</h1>
      <h2 >Heading 1</h2>
      <p style={{fontFamily:'cursive', marginTop:20, marginLeft:60}}>This is paragraph 1</p>
      <p style={{backgroundColor:'blueviolet'}}>This is paragraph 2</p>

      <Demo firstName={firstName}/>
      <Test secondName={secondName}/>
      <Example/>
      <Testclass/>
    </>
  );
}

export default App;
