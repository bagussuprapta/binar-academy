import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
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
