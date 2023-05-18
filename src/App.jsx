import { ArtistInfo, Home, Navbar } from './component'
import { FindSongs } from './component/pages/Findsongs'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<ArtistInfo />} />
          <Route path='/findSongs' element={<FindSongs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
