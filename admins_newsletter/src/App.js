import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './registre/Login';
import Register from './registre/Register';
import Dashboard from './admin/dashboard/Dashboard';
import Categorie from './admin/dashboard/categorie/Categorie';
import Post from './admin/dashboard/post/Post';
import { Sidelist } from './admin/dashboard/Sidelist';
import AuthRouter from './registre/AuthRouter';
import AuthGuard from './auth/AuthGuard';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<AuthRouter />} /> 
          <Route path='/admin/*' element={
            <AuthGuard>
              <Sidelist>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/category' element={<Categorie />} />
                <Route path='/post' element={<Post />} />
              </Sidelist>
            </AuthGuard>
          }/> 
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
