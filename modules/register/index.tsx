import Image from "next/image";

const Register = () => {
  return (
    <>
      <div className="signup-container">
        <header className="signup-header">
          <h1>Create Account</h1>
        </header>

        <div className="signup-description">
          <p>
            Welcome to our signup page
          </p>
        </div>
        

        <div className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone-No" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Re-enter Password" />

          <br></br>
          <br></br>

          <button className="create-account-button">Create Account</button>
        </div>
      

        <div className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>

      <style jsx>{`
        .signup-container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          background-color: whitesmoke;
        }

        .signup-header {
          margin-bottom: 20px;
        }

        .signup-description {
          margin-bottom: 20px;
        }

        .signup-options {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }

        .signup-option {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          background-color: seagreen;
          color: white;
          border: 5px black;
          cursor: pointer;
          border-radius: 21px;
        }

        .signup-logo {
          width: 20px;
          height: 20px;
          margin-left: 10px;
          border-radius:8px;
        }

        .signup-form input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 15px;
        }

        .create-account-button {
          background-color: seagreen;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 14px;
          cursor: pointer;
        }

        .login-link {
          margin-top: 10px;
          
        }
            a{
              text-decoration:none;
            }



      `}</style>
    </>
  );
};

export default Register;
