
import React from 'react';
import './App.css';
import ContactForm from './Component/ContactForm';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <div>

        <nav>
            
              <Link to="/home">*Home*</Link> 
          
              <Link to="/about">*About*</Link> 
           
              <Link to="/users">*Users*</Link> 
        
              <Link to="/signup">*Sign up*</Link> 
       
        </nav>
   
        <Switch>

          <Route exact path="/home"> 
            <Home />
          </Route>
          <Route exact path="/about"> 
            <About />
          </Route>
          <Route exact path="/users"> 
            <Users />
          </Route>
          <Route exact path="/signup"> 
            <ContactForm />
          </Route>
          <Route exact path="/thank-you"> 
            <ThankYou />
          </Route>
          
        </Switch>
      </div>
    </Router>
    
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function ThankYou() {
  return <h2>Thank you for signing up</h2>;
}

export default App;


