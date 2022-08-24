//components
import Button from './components/Button';
import DropDownButton from './components/DropDownButton';
import Navbar from './components/Navbar';

//styles
import './styles/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="row mx-3">
        <div className="col-12 col-md-6">
          <h2>Buttons</h2>
          <div className="normal-buttons">
            <Button color="primary">
              Primary
            </Button>
            <Button color="secondary">
              Secondary
            </Button>
            <Button color="success">
              Success
            </Button>
            <Button color="info">
              Info
            </Button>
            <Button color="warning">
              Warning
            </Button>
            <Button color="danger">
              Danger
            </Button>
            <Button color="link">
              Link
            </Button>
          </div>
          <div className="dropdown-buttons mt-3">
            <DropDownButton>
              Primary
            </DropDownButton>
            <DropDownButton color="success">
              Success
            </DropDownButton>
            <DropDownButton color="info">
              Info
            </DropDownButton>
            <DropDownButton color="danger">
              Danger
            </DropDownButton>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-md-0 mt-3">
          <h2 className='mb-0'>Navbars</h2>
          <Navbar textColor='dark' bgColor='primary'/>
          <Navbar textColor='dark' bgColor='dark' />
          <Navbar textColor='light' bgColor='light' />
        </div>
      </div>
    </div>
  );
}

export default App;
