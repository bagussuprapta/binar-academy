import Card from './components/Card';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Hello FSW13" />

      <Card
        title="Hello"
        description="Lorem ipsum dolor sit amet"
        btnText="Go Somewhere"
        btnHref="https://google.com"
        imgSrc="https://placeimg.com/320/240/any"
        imgAlt="Hello"
      />
    </div>
  );
}

export default App;
