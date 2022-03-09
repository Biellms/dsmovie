import Form from "pages/form/Form";
import Listing from "pages/listing/Listing";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (

    <BrowserRouter>

      <Navbar />

        <Routes>

          <Route path="/" element={<Listing />}/>

          <Route path="/form">
            <Route path=":movieId" element={<Form />}/>
          </Route>

        </Routes>

    </BrowserRouter>
    
  );
}

export default App;
