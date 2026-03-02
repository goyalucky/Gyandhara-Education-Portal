import {useState, React} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import signup from "../assets/signup.png"
const Signup = () => {
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error state before submitting
        setError('');

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Proceed with form submission if passwords match
        axios.post('http://localhost:3001/signup', { contact, email, password })
            .then(response => {
                console.log(response);
                // Assuming a token is returned upon successful signup
                localStorage.setItem('authToken', response.data.token);
                navigate('/registration');
            })
            .catch(err => {
                setError('An error occurred during signup. Please try again.');
                console.error(err);
            });
    };
    return (
        <div className="h-screen bg-neutral-100 w-screen flex justify-center items-center">
            <div className="bg-hero"></div>
            <div className="py-52 h-screen w-96 flex justify-center items-center rounded-xl">
                <form onSubmit={handleSubmit} className="h-[39rem] min-w-full flex justify-center items-center flex-col mr-3 border-2 bg-gradient-to-r from-slate-50 to-slate-200">
                    <h2 className="text-5xl text-gray-700">SIGN-UP</h2>
                    <br />
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="border-2 border-purple-500 rounded-lg h-10 w-80 text-center text-purple-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Enter your Contact"
                        className="border-2 border-purple-500 rounded-lg h-10 w-80 text-center text-purple-400 mt-10"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        placeholder="New-Password"
                        className="border-2 border-purple-500 rounded-lg h-10 w-80 text-center text-purple-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Confirm-Password"
                        className="border-2 border-purple-500 rounded-lg h-10 w-80 text-center text-purple-400"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <br />
                    <button className="border-2 mt-5 border-purple-500 rounded-lg h-10 w-40 bg-purple-700 text-white">
                        Submit
                    </button>
                    {error && <div className="text-red-500">{error}</div>}
                    <br />
                    <p className="text-purple-700">--OR--</p>
                    <br />
                    <button className="border-2 border-purple-500 rounded-lg w-40 bg-purple-700 h-10 text-white">
                    <Link to="/login">Log-in</Link> 
                    </button>
                </form>
                <img src={signup} alt="Decoration" className="rounded-4xl" />
            </div> 
        </div>
    );
};

export default Signup;
