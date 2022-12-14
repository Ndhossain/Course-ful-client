import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../common/sociallogin/SocialLogin';
import Passwordreset from './Passwordreset';

const LoginForm = ({from}) => {
    const [userInfo, setUserInfo] = useState({email: '', password: ''});
    const {loginUser, loading, setLoading} = useAuth();
    const [error, setError] = useState('');
    const [resetForm, setResetForm] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(userInfo.email && userInfo.password) {
            try {
                setError('');
                await loginUser(userInfo.email, userInfo.password);
                navigate(from, {replace: true});
                toast.success('Successfully Logged In');
                setUserInfo({email: '', password: ''})
            } catch (err) {
                console.log(err);
                setError(err.message);
                setLoading(false);
                toast.error('Something Went Wrong');
            }
        }
    }

    return (
        <div className="card flex-shrink-0 w-11/12 max-w-md shadow-2xl mx-auto bg-base-100">
            <div className="card-body">
                <p className='text-red-600'>{error}</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            required 
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} 
                            type="email" 
                            value={userInfo.email} 
                            placeholder="email" 
                            className="input input-bordered" 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                            required 
                            onChange={(e) => setUserInfo({...userInfo, password: e.target.value})} 
                            type="password" 
                            value={userInfo.password} 
                            placeholder="password" 
                            className="input input-bordered" 
                        />
                        <label className="label">
                            <span onClick={() => setResetForm(true)} className="label-text-alt link link-hover">Forgot password?</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' disabled={loading} className="btn btn-success bg-transparent hover:bg-success">Log In</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <SocialLogin from={from} setError={setError} />
            </div>
            {resetForm && <Passwordreset setResetForm={setResetForm} from={from} />}
        </div>
    );
};

export default LoginForm;