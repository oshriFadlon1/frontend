import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login() {

  const login = useGoogleLogin({
    onSuccess: (Response) =>{
      console.log(Response)
      const {access_token} = Response
      axios.post('http://localhost:8080/api',{"access_token":access_token})
      .then((anser) => console.log(anser))
      .catch((error)=>console.log(error))
    } 
  });

  return (
    <button onClick={login}> Log In </button>
  );
}

export default Login;
