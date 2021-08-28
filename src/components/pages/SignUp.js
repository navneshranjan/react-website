// import React from "react";
// import GoogleLogin from "react-google-login";
// import "../../App.css";

// export default function SignUp() {
//   return <h1 className="sign-up">SIGN UP</h1>;
// }
import React from "react";
import GoogleLogin from "react-google-login";

function SignUp() {
  return (
    <div>
      <button>
        <GoogleLogin
          clientId="659158588035-2h334aocqjb245lbfvcml8l9q9ju6gha.apps.googleusercontent.com"
          buttonText="login"
          // onSuccess={this.responseGoogle}
          // onFailure={this.responseGoogle}
          // cookiePolicy={"single_host_origin"}
        />
      </button>
    </div>
  );
}

export default SignUp;
