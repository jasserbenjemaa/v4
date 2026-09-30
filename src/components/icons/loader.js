import React from 'react';

const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 100 100"
    fill="none"
    stroke="var(--green)"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round">
    <title>Loader Logo</title>

    {/* Hexagon outline */}
    <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" />

    {/* The letter J */}
    <g id="J">
      <path d="M42 30 H64 M58 30 V58 C58 67 53 72 46 72 C40 72 36 69 35 63" />
    </g>
  </svg>
);

export default IconLoader;
