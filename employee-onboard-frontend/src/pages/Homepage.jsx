import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import ApprovalForm from './ApprovalForm';
import PortalAccess from './PortalAccess';

const HomePage = () => {
  const [step, setStep] = useState(1);
  const [registrationData, setRegistrationData] = useState(null);

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

  switch (step) {
    case 1:
      return <RegistrationForm saveRegistrationData={saveRegistrationData} />;
    case 2:
      return <ApprovalForm registrationData={registrationData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <PortalAccess />;
    default:
      return null;
  }
};

export default HomePage;
