import React from 'react';
import './Layout.css';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} DevsLinked
    </footer>
  );
};
