import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contactUs";
import About from "./pages/about/about";
import Layout from './pages/layout';

//*********  bootstrap **********
import 'bootstrap/dist/css/bootstrap.min.css';


//********* custom main css **********
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contactus" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
