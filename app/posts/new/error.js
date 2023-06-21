'use client' /* error components must be Client components */

import { useEffect } from 'react'

const Error = ({ error, reset}) => {

    useEffect(() => {
        /* Log the error to an error reporting service */
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    /* Attempt to recover by tring to re-render the segment */
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}

export default Error;