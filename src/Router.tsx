import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotAllow from './pages/NotAllow';

export default function Router():JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/NotAllow" element={<NotAllow/>} />
    </Routes>
  );
}
