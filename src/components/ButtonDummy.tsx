import React from 'react'

interface ButtonDummyProps {
    variant?: string;
}

const ButtonDummy = (props: ButtonDummyProps) => {

    if (props.variant === 'outline') {
        return <button className={`font-poppins w-fit flex flex-col justify-center  items-center bg-btn-bg-outline-hover border-btn-bg-outline-border border py-2 px-4 rounded-md`}>
            <p className='text-sm text-btn-text-outline'>Default</p>
        </button>
    } else if (props.variant === 'text') {
        return <button className={`font-poppins w-fit flex flex-col justify-center items-center bg-btn-bg-text-hover py-2 px-4 rounded-md`}>
            <p className='text-sm text-btn-text-text'>Default</p>
        </button>
    }
    else {
        return (
            <button className={`font-poppins w-fit flex flex-col justify-center items-center bg-btn-bg-default-hover drop-shadow-lg py-2 px-4 rounded-md`}>
                <p className='text-sm text-btn-text-default'>Default</p>
            </button>
        )
    }


}

export default ButtonDummy