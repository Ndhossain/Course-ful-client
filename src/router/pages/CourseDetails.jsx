import React, { createRef } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CourseDescription from '../../components/common/coursedetails&checkout/CourseDescription';
import CourseDetailNav from '../../components/coursedetailspage/CourseDetailNav';

const ref = createRef();

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const navigate = useNavigate();
    const { name, details, _id} = courseDetail;

    return (
        <div>
            <CourseDetailNav name={name} details={details} pdfRef={ref} />
            <div ref={ref}>
                <CourseDescription courseDetail={courseDetail} />
            </div>
            <div className='flex justify-center mt-5'>
                <button
                    onClick={() => navigate(`/checkout/${_id}`)}
                    className="btn-lg rounded-md hover:bg-transparent border border-success btn-success text-center"
                >
                    Get Premium Access
                </button>
            </div>
        </div>
    );
};

export default CourseDetails;