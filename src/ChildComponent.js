import React from "react";

const ChildComponent = ({type}) => {
    return (
        <div>
            This is a Child Component, getting props from the {type} Component
        </div>
    );

};

export default ChildComponent;