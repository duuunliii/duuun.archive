import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home.js'
import WorkDetail from './routes/WorkDetail.js'

function App() {
  return (
    <BrowserRouter basename="/duuun">
      <Routes>
        <Route path="/duuun/work/:id" element={<WorkDetail />} />
      </Routes>
      <Routes>
        <Route path="/duuun/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
