import React from 'react';

const Page = async() => {
    const response = await fetch(` https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=lectures`);
    const data = await response.json();
    console.log(data)

    return (
        <>
            Web Search Page
        </>
    );
};

export default Page;