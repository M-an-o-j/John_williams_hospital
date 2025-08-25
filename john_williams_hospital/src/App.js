import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home";
import Index from "./pages";

export default function App() {
  return (
    <div className="bg-[#F9FBFC]" >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  )
}