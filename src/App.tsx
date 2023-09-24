import './App.css'
import { RouterProvider} from 'react-router-dom';
import { router } from './app/routes';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, /* useAppSelector */ } from './app/hooks';
import { checkAuthAsync } from './features/auth/authSlice';




function App() {
  const dispatch = useAppDispatch();
  //const user = useAppSelector((state)=> state.auth.loggedInUserToken)
  const userChecked = useAppSelector((state)=> state.auth.userChecked)
  useEffect(()=> {
    dispatch(checkAuthAsync())
  }, [dispatch])

  
  
  return (
    <div className='App'>
      {userChecked && (
    <RouterProvider router={router}/>
    )}
    </div>
  )
}

export default App
