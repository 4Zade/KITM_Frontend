import { Routes, Route } from 'react-router-dom';
import { MainRoute } from './routes/MainRoute';
import { NotFound } from './routes/NotFound';
import { Authentication } from './routes/Authentication';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Authentication/>}/>
        <Route path="/main" element={<MainRoute/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
