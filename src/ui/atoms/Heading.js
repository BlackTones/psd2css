import React from 'react';

function Heading({ type, className, children }) {
    const HeadingTag = `${type}`
    return (
        <HeadingTag className={className}>{children}</HeadingTag>
    )
}

export default Heading;