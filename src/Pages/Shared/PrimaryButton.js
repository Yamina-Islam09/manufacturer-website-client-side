import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-warning uppercase font-bold ">{children}</button>
    );
};

export default PrimaryButton;