import {jwtDecode} from "jwt-decode";
import {CredentialResponse, GoogleLogin} from "@react-oauth/google";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../auth/useAuth.ts";

const Login = () => {
  const navigate = useNavigate();
  const {login} = useAuth();

  const success = (credentialResponse: CredentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential!);
    login(decoded);
    navigate("/dashboard");
  }

  const failed = () => console.log("Login Failed");

  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => success(credentialResponse)}
        onError={failed}/>
    </div>
  )
}

export default Login;
