import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/users/UsersPage';
import UserPage from './pages/users/UserPage';
import NavbarComponent from './components/organisms/NavbarComponent';
import DashboardPage from './pages/DashboardPage';
import NotFoundErrorPage from './pages/errors/NotFound';

const App = () => (
  <BrowserRouter>
    <NavbarComponent />

    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/user/:id' element={<UserPage />} />
      <Route path='/dashboard/*' element={<DashboardPage />} />
      <Route path='*' element={<NotFoundErrorPage />} />
    </Routes>
  </BrowserRouter>
)

export default App