import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";
import QRCode from "./pages/QRCode";

export default function App() {
  return (
      <Router>
        <div className={"content"}>
          <Routes>
            <Route path={"/"} exact element={<Form />}/>
            <Route path={"/qrcode"} exact element={<QRCode />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
  );
}
