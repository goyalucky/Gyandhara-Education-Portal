import {useState,useEffect, React} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import login from "../assets/login.png"
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem('authToken');
        
    //     if (token) {
    //       // Redirect to the login page if the token is not present
    //       navigate('/dashboard');
    //     }
    //   }, [navigate]);
    const handleLogin = (e) => {
        e.preventDefault();
        // Reset error state before submitting
        setError('');

        axios.post('http://localhost:3001/login', { email, password })
            .then(response => {
                if (response.data.token) {
                    // Store the token in local storage
                    localStorage.setItem('authToken', response.data.token);
                    // Redirect to the dashboard
                    navigate('/sidebar');
                } else {
                    // If the response does not contain a token, display an error
                    setError(response.data.message || 'Login failed. Please try again.');
                }
            })
            .catch(err => {
                // Handle errors that occur during the request
                setError('An error occurred during login. Please try again.');
                console.error(err);
            });
    };
    return (
        <div className="h-screen bg-neutral-100 w-screen flex justify-center items-center">
            <div className="bg-hero"></div>
            <div className="py-52 h-screen w-96 flex justify-center items-center rounded-xl">
                <img src={login} alt="Decoration" className="rounded-4xl" />
                <form onSubmit={handleLogin} className="h-[39rem] min-w-full flex justify-center items-center flex-col ml-3 border-2 bg-gradient-to-r from-slate-50 to-slate-200">
                    <h2 className="text-5xl text-gray-700">LOG-IN</h2>
                    <br />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-2 border-purple-500 rounded-lg h-10 w-80 text-center text-purple-400 mt-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-2 border-purple-500 rounded-lg h-10 w-80 text-center text-purple-400 mb-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#" className="underline hover:decoration-2">
                        Forget Password
                    </a>
                    <button type="submit" className="border-2 mt-5 border-purple-500 rounded-lg h-10 w-40 bg-purple-700 text-white">
                        Login
                    </button>
                    {error && <div className="text-red-500">{error}</div>}
                    <br />
                    <p className="text-purple-700">--OR--</p>
                    <br /><h6 class="text-black font-bold">Log in with</h6>
                    <br/>
                    <div class="text-black font-bold"><a href="#"><i class="fab fa-google fa-xl"></i></a>-Google</div>
                    <br/>
                    <h3 className="text-purple-600 mb-2">Don't Have An Account?</h3>
                    <button className="border-2 border-purple-500 rounded-lg w-40 bg-purple-700 h-10 text-white">
                    <Link to="/signup">Sign-Up</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
