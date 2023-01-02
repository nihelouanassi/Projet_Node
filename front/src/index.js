import { BrowserRouter as Router,useLocation  } from 'react-router-dom';
import {Route,Routes} from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import ReactDOM from 'react-dom';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';



const App =() => {
  function getPage(elem){
    return <div className='relative w-full h-[calc(100%-50px)] flex flex-row'> 

      <div className='w-[calc(100%-250px)] h-full bg-grey-circle rounded-tl-[30px]'>
      {elem}
      </div>
      </div>
  }
  function getLR(elem){
    return <div className='bg-grey-circle'>{elem}</div>
  }
  return <div className='app w-screen h-screen bg-gray-silver flex flex-col'>
    
          {/* <div className='w-screen'><Nav /></div>  */}
          <Router>
           
           
            <Routes>
             
              <Route path="/Login" element ={getLR(<Login />)}></Route>
              <Route path="/Register" element={getLR(<Register />)}></Route>
              <Route path="/Posts" element={getLR(<Posts />)}></Route>
              <Route path="/CreatePosts" element={getLR(<CreatePost />)}></Route>
             

            </Routes>
          </Router>
         
      </div>
      

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


