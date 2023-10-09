import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <a
      className="rounded-lg bg-sky-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-cyan-100 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
      href="#"
    />
  );
};

export default Button;