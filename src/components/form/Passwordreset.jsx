import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Passwordreset = ({ setResetForm, from }) => {
    const [email, setEmail] = useState('');
    const {loading, resetPassword} = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await resetPassword(email);
            setResetForm(false);
            toast.success('Check your email to reset password.');
            navigate(from);
        } catch (err) {
            setError(err.message);
            toast.error('Something went wrong. Please Try again.')
        }
    }

    return (
        <div className='fixed w-screen h-screen flex justify-center items-center left-0 top-0 bg-black/20'>
            <p className='text-red-600'>{error}</p>
            <form onSubmit={handleSubmit} className='p-5 bg-white rounded-lg'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input 
                        required 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        value={email} 
                        placeholder="email" 
                        className="input input-bordered" 
                    />
                </div>
                <div className="form-control mt-6">
                    <button type='submit' disabled={loading && email} className="btn btn-success bg-transparent hover:bg-success">Reset Password</button>
                </div>
            </form>
        </div>
    );
};

export default Passwordreset;