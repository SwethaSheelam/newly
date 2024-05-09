import React from 'react';

const ApprovalForm = ({ registrationData, nextStep, prevStep }) => {
  const handleApprove = () => {
    // Logic to send approval to HR manager
    nextStep();
  };

  const handleReject = () => {
    // Logic to reject registration
    prevStep();
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manager Approval</h1>
      <div>
        <p>Name: {registrationData.name}</p>
        <p>Email: {registrationData.email}</p>
        <p>Address: {registrationData.address}</p>
        <p>ID Proof: {registrationData.idProof.name}</p>
        <p>Resume: {registrationData.resume.name}</p>
      </div>
      <div className="mt-4">
        <button onClick={handleApprove} className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600">Approve</button>
        <button onClick={handleReject} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Reject</button>
      </div>
    </div>
  );
};

export default ApprovalForm;
