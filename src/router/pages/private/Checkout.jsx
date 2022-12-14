import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CourseDescription from '../../../components/common/coursedetails&checkout/CourseDescription';

const Checkout = () => {
    const courseDetail = useLoaderData();
    const [termsAcceptance, setTermsAcceptance] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='mt-10'>
            <CourseDescription courseDetail={courseDetail} />
            <div className='flex items-center justify-center mt-5 gap-1'>
                <input onChange={() => setTermsAcceptance(!termsAcceptance)} type="checkbox" checked={termsAcceptance} className="checkbox checkbox-xs" />
                <label htmlFor="checkbox">Before checking out I accepted the terms & conditions.</label>
            </div>
            <div className='flex justify-center mt-5'>
                <button
                    disabled={!termsAcceptance}
                    onClick={() => {
                        toast.success('Thank You for Purchasing the course');
                        navigate('/');
                    }}
                    className="btn btn-outline btn-success"
                >
                    <span className='text-black'>Confirm Checkout</span>
                </button>
            </div>
        </div>
    );
};

export default Checkout;