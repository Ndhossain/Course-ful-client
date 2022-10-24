import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-success bg-transparent hover:bg-success">Login</button>
                            </div>
                            <label className="label">
                                <p className='label-text-alt'>
                                    Dont't have a account? <Link to='/register' className="label-text-alt link link-hover">Register</Link> now
                                </p>
                            </label>
                        </form>
                        <div className="divider">OR</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;