import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Hexagon outline */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />

        {/* The letter J, drawn as a stroked path */}
        <path
          d="M47 29 L47 50 C47 59 43 63 37 63 C32 63 29 60 28 56"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
