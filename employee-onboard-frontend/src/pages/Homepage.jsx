// App.js

import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import ApprovalForm from './ApprovalForm';
import PortalAccess from './PortalAccess';
import ConfirmationPage from './ConfirmationPage';
import ErrorPage from './ErrorPage';

const HomePage = () => {
  const [step, setStep] = useState(1);
  const [registrationData, setRegistrationData] = useState(null);
  const [error, setError] = useState(null);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const saveRegistrationData = (data) => {
    setRegistrationData(data);
    nextStep();
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  switch (step) {
    case 1:
      return <RegistrationForm saveRegistrationData={saveRegistrationData} handleError={handleError} />;
    case 2:
      return <ApprovalForm registrationData={registrationData} nextStep={nextStep} prevStep={prevStep} handleError={handleError} />;
    case 3:
      return <PortalAccess />;
    case 4:
      return <ConfirmationPage />;
    case 5:
      return <ErrorPage error={error} />;
    default:
      return null;
  }
};

export default HomePage;
