import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header'
import MainLayout from "./layouts/MainLayout";
import Button from "./components/Button";

function State() {
  return (
    <div className="State mt-5">
      <Header title="Button Components" />
      
      <MainLayout>
        <Button variant="primary">
          Click
        </Button>

        <Button variant="secondary">
          Click
        </Button>

        <Button variant="black">
          Click
        </Button>
      </MainLayout>
    </div>
  );
}

export default State;
