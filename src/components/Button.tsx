import React from 'react';
import { IconLocalGroceryStore } from "../assets/svg/IconLocalGroceryStore";

enum ButtonVariant {
    Outline = 'outline',
    Text = 'text',
}

interface ButtonProps {
    variant?: 'outline' | 'text';
    disabledShadow?: boolean;
    disabled?: boolean;
    startIcon?: string;
    endIcon?: string;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}

function Button(props: ButtonProps) {
    if (props.variant === ButtonVariant.Outline) {
        return (
            <button
                className={`font-poppins w-fit flex flex-col justify-center items-center bg-btn-bg-outline border-btn-bg-outline-border border py-2 px-4 rounded-md hover:bg-btn-bg-outline-hover focus:bg-btn-bg-outline-hover`}
            >
                <p className='text-sm text-btn-text-outline'>Default</p>
            </button>
        );
    } else if (props.variant === ButtonVariant.Text && !props.disabled) {
        return (
            <button
                className={`font-poppins w-fit flex flex-col justify-center items-center bg-none py-2 px-4 rounded-md hover:bg-btn-bg-text-hover focus:bg-btn-bg-text-hover`}
            >
                <p className='text-sm text-btn-text-text'>Default</p>
            </button>
        );
    } else if (props.disabledShadow) {
        return (
            <button
                className={`font-poppins w-fit flex flex-col justify-center items-center bg-btn-bg-primary py-2 px-4 rounded-md `}
            >
                <p className='text-sm text-btn-text-primary'>Default</p>
            </button>
        );
    } else if (props.disabled) {
        let bgStyleDisabled: string;
        if (props.variant === ButtonVariant.Text && props.disabled) {
            bgStyleDisabled = 'bg-none';
        } else {
            bgStyleDisabled = 'bg-btn-bg-disabled';
        }
        return (
            <button
                className={`font-poppins w-fit flex flex-col justify-center items-center ${bgStyleDisabled} py-2 px-4 rounded-md`}
            >
                <p className='text-sm text-btn-text-disabled'>Default</p>
            </button>
        );
    } else if (props.startIcon || props.endIcon) {
        return (
            <button
                className={`font-poppins min-w-min w-28 flex flex-row justify-evenly py-2 items-center bg-btn-bg-icon rounded-md`}
            >
                {props.startIcon && <IconLocalGroceryStore />}
                <p className='text-sm text-btn-text-primary'>Default</p>
                {props.endIcon && <IconLocalGroceryStore />}
            </button>
        );
    } else if (props.size) {
        let classNamesButton = `font-poppins min-w-min w-fit flex flex-row justify-evenly items-center bg-btn-bg-icon rounded-md`;
        let classActiveButton = '';
        if (props.size === 'sm') {
            classActiveButton = `py-1.5 px-3`
        } else if (props.size === 'md') {
            classActiveButton = `py-2 px-4`
        } else if (props.size === 'lg') {
            classActiveButton = `py-2.5 px-5`
        }

        return (
            <button
                className={`${classNamesButton} ${classActiveButton}`}
            >
                <p className='text-sm text-btn-text-primary'>Default</p>
            </button>
        );
    } else if (props.color) {
        let colorBtn = ''
        let textColorBtn = ''
        if (props.color === 'default') {
            return <button
                className={`font-poppins min-w-min w-fit flex flex-row justify-evenly items-center bg-[#E0E0E0] rounded-md py-2 px-4 focus:bg-[#AEAEAE] hover:bg-[#AEAEAE]`}
            >
                <p className={`text-sm text-[#3F3F3F]`}>Default</p>
            </button>
        } else if (props.color === 'primary') {
            return <button
                className={`font-poppins min-w-min w-fit flex flex-row justify-evenly items-center bg-[#2962FF] focus:bg-[#0039CB] hover:bg-[#0039CB] rounded-md py-2 px-4 `}
            >
                <p className={`text-sm text-[#fff]`}>Default</p>
            </button>
        } else if (props.color === 'secondary') {
            return <button
                className={`font-poppins min-w-min w-fit flex flex-row justify-evenly items-center bg-[#455A64] rounded-md py-2 px-4 focus:bg-[#1C313A] hover:bg-[#1C313A]`}
            >
                <p className={`text-sm text-[#fff]`}>Default</p>
            </button>
        } else if (props.color === 'danger') {
            return <button
                className={`font-poppins min-w-min w-fit flex flex-row justify-evenly items-center bg-[#D32F2F] rounded-md py-2 px-4  focus:bg-[#9A0007] hover:bg-[#9A0007]`}
            >
                <p className={`text-sm text-[#fff]`}>Default</p>
            </button>
        }

    }
    else {
        return (
            <button
                className={`font-poppins w-fit flex flex-col justify-center items-center bg-btn-bg-default drop-shadow-lg py-2 px-4 rounded-md hover:bg-btn-bg-default-hover focus:bg-btn`} >Default</button>)
    }
}

export default Button;
