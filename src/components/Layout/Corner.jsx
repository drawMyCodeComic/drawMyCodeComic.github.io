import React from 'react';

export const Corner = (props) => {
    const cornerStyles = props.position === "bottom" ? {
        position: "absolute",
        top: "-6px",
        left: "-6px",
    } : {
        position: "absolute",
        bottom: "-6px",
        right: "-6px",
        transform: "rotate(180deg)"
    }
    return (
        <svg style={cornerStyles} width="207" height="213" viewBox="0 0 207 213" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M197.408 6.12C195.279 5.853 9 6.12 9 6.12L9 200.59C9 200.59 32.418 67.958 197.408 6.12Z" fill="#42CCC7" />
            </g>
            <defs>
                <filter id="filter0_d" x="3" y="3.00134" width="200.408" height="206.589" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}