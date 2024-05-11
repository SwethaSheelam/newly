import React from 'react';

const ErrorPage = ({ error }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Error</h1>
      <p>{error}</p>
    </div>
  );
};

export default ErrorPage;
