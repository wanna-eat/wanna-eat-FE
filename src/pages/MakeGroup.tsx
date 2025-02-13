import { useState } from 'react';

import TitleStep from '../components/makeGroup/TitleStep';
import ScheduleStep from '../components/makeGroup/ScheduleStep';
import ParticipantsStep from '../components/makeGroup/ParticipantsStep';
import NotificationStep from '../components/makeGroup/NotificationStep';
import ConfirmStep from '../components/makeGroup/ConfirmStep';
import CompleteStep from '../components/makeGroup/CompleteStep';

export type GroupData = {
  title: string;
  date: string;
  time: string;
  participants: string[];
  message: string;
};

const MakeGroup = () => {
  const [step, setStep] = useState(1);
  const today = new Date().toISOString().split('T')[0];
  const [groupData, setGroupData] = useState<GroupData>({
    title: '',
    date: today,
    time: '',
    participants: [],
    message: '',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateGroupData = (field: keyof GroupData, value: string | string[]) => {
    setGroupData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {step === 1 && (
        <TitleStep data={groupData} updateData={updateGroupData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <ScheduleStep
          data={groupData}
          updateData={updateGroupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <ParticipantsStep
          data={groupData}
          updateData={updateGroupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <NotificationStep
          data={groupData}
          updateData={updateGroupData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && <ConfirmStep data={groupData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <CompleteStep />}
    </div>
  );
};

export default MakeGroup;
