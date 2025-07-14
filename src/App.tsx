// App.tsx
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "./components/HomePage"
import { DocPage } from "./components/DocPage"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleLinkClick = () => {}

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onMenuClick={() => setIsMobileOpen(true)} />
        <div className="flex flex-1">
          <Sidebar
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
            onLinkClick={handleLinkClick}
          />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/docs/:folder/:page" element={<DocPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App