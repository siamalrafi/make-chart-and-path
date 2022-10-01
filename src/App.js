import './App.css';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* This is the end of Navbar */}
      <Pricing></Pricing>
      <div className='md:mx-40'>
        <AssignmentMarks></AssignmentMarks>
      </div>

    </div>
  );
}

export default App;
