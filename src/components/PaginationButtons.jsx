'use client'

import React from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import Link from "next/link";

const PaginationButtons = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const startIndex = +searchParams.get("start" || 1);

    return (
        <div>
            {startIndex >= 10 && (

                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                    <div className='flex flex-col cursor-pointer items-center hover:underline'><BsChevronLeft className='h-5'/>
                        <p>Previous</p></div>

                </Link>

            )}
        </div>
    );
};

export default PaginationButtons;