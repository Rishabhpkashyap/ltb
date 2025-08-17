import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AnimatedBackground from './AnimatedBackground';
import Logo from './Logo';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [showReset, setShowReset] = useState(false);
    const [resetMessage, setResetMessage] = useState('');

    const { login, signup, resetPassword } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return setError('Please enter a valid email address');
        }

        // Validate password length
        if (password.length < 6) {
            return setError('Password must be at least 6 characters long');
        }

        try {
            setError('');
            setLoading(true);

            if (isSignUp) {
                await signup(email, password);
            } else {
                await login(email, password);
            }
        } catch (error) {
            setError(getErrorMessage(error.code));
        }

        setLoading(false);
    }

    async function handlePasswordReset(e) {
        e.preventDefault();

        if (!resetEmail) {
            return setError('Please enter your email address');
        }

        try {
            setError('');
            setResetMessage('');
            setLoading(true);
            await resetPassword(resetEmail);
            setResetMessage('Check your email for password reset instructions');
        } catch (error) {
            setError(getErrorMessage(error.code));
        }

        setLoading(false);
    }

    function getErrorMessage(errorCode) {
        switch (errorCode) {
            case 'auth/user-not-found':
                return 'Email address not found. Please check your email and try again.';
            case 'auth/wrong-password':
                return 'Incorrect password. Please check your password and try again.';
            case 'auth/invalid-credential':
                return 'Invalid email or password. Please check your credentials.';
            case 'auth/email-already-in-use':
                return 'An account with this email already exists. Please use a different email.';
            case 'auth/weak-password':
                return 'Password is too weak. Please use at least 6 characters.';
            case 'auth/invalid-email':
                return 'Invalid email format. Please enter a valid email address.';
            case 'auth/user-disabled':
                return 'This account has been disabled. Please contact support.';
            case 'auth/too-many-requests':
                return 'Too many failed login attempts. Please try again later.';
            case 'auth/network-request-failed':
                return 'Network error. Please check your internet connection.';
            case 'auth/operation-not-allowed':
                return 'Email/password sign-in is not enabled. Please contact support.';
            default:
                return 'Authentication failed. Please check your credentials and try again.';
        }
    }

    if (showReset) {
        return (
            <div className="min-h-screen bg-dark-bg relative overflow-hidden flex items-center justify-center">
                <AnimatedBackground />

                <div className="container mx-auto px-3 relative z-10">
                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <Logo />
                            <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
                            <p className="text-gray-400">Enter your email to receive reset instructions</p>
                        </div>

                        <div className="premium-glass rounded-lg p-6 shadow-xl">
                            {error && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-4">
                                    {error}
                                </div>
                            )}

                            {resetMessage && (
                                <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg mb-4">
                                    {resetMessage}
                                </div>
                            )}

                            <form onSubmit={handlePasswordReset}>
                                <div className="mb-4">
                                    <label className="premium-label block mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={resetEmail}
                                        onChange={(e) => setResetEmail(e.target.value)}
                                        className="premium-dropdown w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="premium-button w-full py-3 px-4 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Sending...' : 'Send Reset Email'}
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => {
                                        setShowReset(false);
                                        setError('');
                                        setResetMessage('');
                                        setResetEmail('');
                                    }}
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Back to Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-bg relative overflow-hidden flex items-center justify-center">
            <AnimatedBackground />

            <div className="container mx-auto px-3 relative z-10">
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <Logo />
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {isSignUp ? 'Create Account' : 'Welcome Back'}
                        </h2>
                        <p className="text-gray-400">
                            {isSignUp ? 'Sign up to access Lady Trader Bot' : 'Sign in to your account'}
                        </p>
                    </div>

                    <div className="premium-glass rounded-lg p-6 shadow-xl">
                        {error && (
                            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-4">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="premium-label block mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError(''); // Clear error when user starts typing
                                    }}
                                    className="premium-dropdown w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="premium-label block mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError(''); // Clear error when user starts typing
                                    }}
                                    className="premium-dropdown w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                                    placeholder="Enter your password (min 6 characters)"
                                    required
                                    minLength="6"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="premium-button w-full py-3 px-4 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;