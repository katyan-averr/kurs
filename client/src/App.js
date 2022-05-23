import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { store } from './redux';


const App = observer(() =>{
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() =>{
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, []) 

  if (loading){
    return <Spinner animation={"grow"}/>
  }

  return (
    <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
    </Provider>
  );
});

export default App;
