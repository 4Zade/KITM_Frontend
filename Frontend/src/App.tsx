import { Routes, Route } from 'react-router-dom';
import { MainRoute } from './routes/MainRoute';
import { Authentication } from './routes/Authentication';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Authentication/>}/>
        <Route path="/main" element={<MainRoute/>}/>
      </Routes>
    </>
  )
}

export default App
