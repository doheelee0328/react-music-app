import { ArtistInfo, Home, Navbar, Login, PageNotFound } from './component'
import { AddSongs } from './component/pages/AddSongs'
import { FindSongs } from './component/pages/Findsongs'
import { AuthContextProvider } from './component/context/context'
import { Routes, Route } from 'react-router-dom'
import ProtectRoute from './component/routes/routes'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<ProtectRoute redirect='/login' />}>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<ArtistInfo />} />
              <Route path='/findSongs' element={<FindSongs />} />
              <Route path='/addSongs' element={<AddSongs />}></Route>
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
