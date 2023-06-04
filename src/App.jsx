import { ArtistInfo, Home, Navbar, Login, PageNotFound } from './component'
import { AddSongs } from './component/pages/AddSongs'
import { FindSongs, SongDetails } from './component/pages/Findsongs'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from './component'
import { AuthContextProvider } from './component/context/Context'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<ProtectedRoutes redirect='/login' />}>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<ArtistInfo />} />

              <Route path='findSongs'>
                <Route index element={<FindSongs />} />
                <Route path=':id' element={<SongDetails />} />
              </Route>

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
