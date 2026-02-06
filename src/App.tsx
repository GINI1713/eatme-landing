import { Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/Home'
import NotionGuide from './pages/NotionGuide'
import SlackGuide from './pages/SlackGuide'
import SheetsGuide from './pages/SheetsGuide'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guide/notion" element={<NotionGuide />} />
      <Route path="/guide/slack" element={<SlackGuide />} />
      <Route path="/guide/sheets" element={<SheetsGuide />} />
    </Routes>
  )
}

export default App
