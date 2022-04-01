import './App.css';
import {Container} from "@mui/material";
import FillForm from "./components/FillForm/FillForm";
import Help from "./components/Help/Help";


function App() {
  return (
      <Container>
          <FillForm/>
          <Help/>
      </Container>
  );
}

export default App;
