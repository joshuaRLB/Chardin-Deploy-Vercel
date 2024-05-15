import { useState, useEffect } from 'react';
import { auth, signInWithEmailAndPassword } from '../api/firebaseScript'; // Adjust the path as per your folder structure

import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Authentication successful, redirect or perform actions accordingly
      const user = auth.currentUser;
        localStorage.setItem('email', email);
      navigate("/admin");
      console.log('User logged in successfully');
    } catch (error) {
      alert("Invalid Username or Password");
      console.error('Error signing in:', error.message);
    }
  };
   useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate("/admin"); // Redirect to admin page if user is logged in
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div>
      <div className="bg-dark-gray min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center mb-5">
                          <h1 className="h4 text-white mb-4">Login to your Account</h1>
                        </div>
                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label className="text-white ml-2">Email Address</label>
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              value={email}
                              aria-describedby="emailHelp"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-white ml-2">Password</label>
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group mb-5">
                            {/* <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label"
                                for="customCheck"
                              >
                                Remember Me
                              </label>
                            </div> */}
                          </div>
                          
        
                            <button type="submit" className="btn btn-danger btn-user btn-block">Login</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
