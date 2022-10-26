import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';
import ReactToPdf from 'react-to-pdf'

const CourseDetailNav = ({name, details, pdfRef}) => {
    return (
        <div className='bg-black w-screen fixed top-[65px] left-0 text-white'>
            <div className='container mx-auto px-2 lg:px-5 py-3 flex justify-between items-center'>
                <div>
                    <h1 className='text-xl font-semibold'>Learn: {name}</h1>
                    <div className='flex gap-3'>
                        <p className='flex gap-1 items-center text-sm'>{details.ratings} <AiFillStar /></p>
                        <p className='text-sm'>{details.totalSell} students</p>
                    </div>
                </div>
                <ReactToPdf targetRef={pdfRef} filename="course-details.pdf" options={{orientation: 'landscape', unit: 'in', format: [16,12]}}>
                    {
                        ({toPdf}) => (
                            <FaDownload onClick={toPdf} className="cursor-pointer" size={24} />
                        )
                    }
                </ReactToPdf>
            </div>
        </div>
    );
};

export default CourseDetailNav;