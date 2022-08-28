import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home.js'
import WorkDetail from './routes/WorkDetail.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/duuun.archive/work/:id" element={<WorkDetail />} />
      </Routes>
      <Routes>
        <Route path="/duuun.archive/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
