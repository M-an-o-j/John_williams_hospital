import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home";

export default function App() {
  return (
    <div className="bg-[#F9FBFC] h-screen lg:px-32">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<h1>Doctors</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
        </Routes>
      </Router>
    </div>
  )
}