import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const LoginForm = () => {
    return (
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
                        <button type='submit' className="btn btn-success bg-transparent hover:bg-success">Log In</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default LoginForm;