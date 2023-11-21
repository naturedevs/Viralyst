import React from 'react';
interface Props {
    name : string
}

export const Btn1 : React.FC < Props > = ({name}) => {
    return (
        <div
            className="p-4 bg-[#D05404] text-lg font-bold px-8 py-4 rounded-full text-white w-fit">
            {name}
        </div>
    )
}