
import { Button } from '@my/ui-kit'
import { Input } from '@my/ui-kit'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

const Layout = () => (
  <>
    <Button>Click me</Button>
    <Input label='Email' />

    Main App

    <Outlet />
  </>
)

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
