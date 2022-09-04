import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HelloProps from './components/propsPractice/HelloProps';
function App() {
  const star = (num) => {
    return num;
  }
  return (
    <Router>
     <HelloProps heading="props example" subheading="react topic" data={star(100)}/> {/* Use PascalCase for React components, or lowercase for HTML elements  */}
    </Router>
  );
}

export default App;
