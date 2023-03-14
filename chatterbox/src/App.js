
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Join from "./component/Join/Join";




function App() {



  return (
    <div className="App">
      <Router>

        <Route path="/" component={Join}  />
        <Route path="/chat" />

      </Router>

          
    </div>
  );
}

export default App;
