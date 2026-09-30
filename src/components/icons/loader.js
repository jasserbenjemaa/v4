import React from 'react';

const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 100 100"
    fill="none">
    <title>Loader Logo</title>

    {/* Hexagon outline */}
    <path
      d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z"
      stroke="var(--green)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* The letter J, set in the site font */}
    <text
      id="J"
      x="50"
      y="64"
      textAnchor="middle"
      fill="var(--green)"
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '42px',
        fontWeight: 700,
      }}>
      J
    </text>
  </svg>
);

export default IconLoader;
