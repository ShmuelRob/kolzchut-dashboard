import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";

function App() {
  return <>
    <GoogleLogin
      onSuccess={credentialResponse => {
        const decoded = jwtDecode(credentialResponse.credential!);
        console.log(decoded);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
    </>
}

export default App
