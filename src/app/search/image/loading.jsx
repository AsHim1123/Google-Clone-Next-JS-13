import React from 'react';

const Loading = () => {
    return (
        <div className='pt-10 mb-2 lg:pl-52 maax-w-6xl'>
            <div className='animate-pulse'>
                <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
                <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
                <div className='h-2 w-44 mb-2.5 bg-gray-200 rounded-md'></div>
            </div>
        </div>
    );
};

export default Loading;