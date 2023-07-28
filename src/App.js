import './App.css';
import HomePage from './Components/HomePage'
import EditPage from './Components/EditPage';
import AddPage from './Components/AddPage';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App container-fluid">
         <BrowserRouter>
         <header className='topbar'> 
          <Link to='/profiles' className='hm' >HomePage</Link>&nbsp;&nbsp;
          <Link to='/profiles/add' className='ad'>AddProfile</Link>&nbsp;&nbsp;
          <Link to='/profiles/edit' className='ed'>EditProfile</Link>
         </header>
         <Routes>
          <Route index path='/' element={<HomePage/>}/>
          <Route path='profiles'>
            <Route index element={<HomePage/>}/>
            <Route path='add' element={<AddPage/>}/>
            <Route path=":profileId" element={<Profile/>}/> 
            <Route path='edit' element={<EditPage/>}/>
          </Route>
          <Route path='*' element={<h1>Page not found ,please check url</h1>}/>
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
