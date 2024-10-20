import { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginType, setLoginType] = useState('labeler')
    const navigate = useNavigate();
    const login = () => {
        if (loginType === "client") {
            navigate('/projects');
        } else {
            navigate('/label-projects');
        }
    };
    return (
        <main className="main-container">
            <div className="background-image">
                <img
                    src={`${process.env.PUBLIC_URL}/satellite-image.png`}
                    alt="Satellite imagery background"
                    className="image-fill"
                />
            </div>
            <div className="login-box">
                <h1 className="login-title">Login to GeoWeb</h1>
                <div className="tabs-list">
                    <button 
                        className={`tabs-trigger ${loginType === 'labeler' ? 'active' : ''}`} 
                        onClick={() => setLoginType('labeler')}
                    >
                        Labeler
                    </button>
                    <button 
                        className={`tabs-trigger ${loginType === 'client' ? 'active' : ''}`} 
                        onClick={() => setLoginType('client')}
                    >
                        Client
                    </button>
                </div>
                <form className="form" onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="clientEmail" className="label">Email</label>
                        <input
                        id="clientEmail"
                        type="email"
                        placeholder="Enter your email"
                        className="input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="clientPassword" className="label">Password</label>
                        <input
                        id="clientPassword"
                        type="password"
                        placeholder="Enter your password"
                        className="input"
                        />
                    </div>
                    <button className="submit-btn blue-btn">Sign In</button>
                </form>

                <div className="forgot-password">
                <a href="/forgot-password" className="link blue-link">
                    Forgot password?
                </a>
                </div>
                <div className="register-section">
                <p className="register-text">Don't have an account?</p>
                <a href="/register" className="link green-link">
                    Register here
                </a>
                </div>
            </div>
        </main>
    )
}

export default Login