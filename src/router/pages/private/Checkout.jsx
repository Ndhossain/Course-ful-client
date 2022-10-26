import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDescription from '../../../components/common/coursedetails&checkout/CourseDescription';

const Checkout = () => {
    const courseDetail = useLoaderData();
    const [termsAcceptance, setTermsAcceptance] = useState(false);
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
                    onClick={() => console.log('clicked')}
                    className="btn-lg rounded-md hover:bg-transparent border border-success btn-success text-center"
                >
                    Confirm Checkout
                </button>
            </div>
        </div>
    );
};

export default Checkout;