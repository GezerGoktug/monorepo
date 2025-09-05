
import { Button } from '@my/ui-kit'
import { Input } from '@my/ui-kit'
import { Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Error from './pages/Error'

const Layout = () => (
  <>
    <Button>Click me</Button>
    <Input label='Email' />
    <div>
      sdsd
    </div>
    Admin App
    <Outlet />
  </>
)

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='dash' element={<Dashboard />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
