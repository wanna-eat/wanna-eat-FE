import { useState } from 'react';
import { Col } from '../commons/Flex';
import Button from '../common/Button';
import BackHeader from '../commons/BackHeader';
import { css } from '@emotion/react';
import { GroupData } from '../../pages/MakeGroup';

interface ScheduleStepProps {
  data: GroupData;
  updateData: (field: keyof GroupData, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const ScheduleStep = ({ data, updateData, nextStep, prevStep }: ScheduleStepProps) => {
  const [date, setDate] = useState<string>(data.date || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>(data.time);
  const isButtonDisabled = date.trim().length === 0 || time.trim().length === 0;

  return (
    <Col
      css={css`
        align-items: center;
      `}
    >
      <BackHeader firstTitle='먹팟 일정을 입력해주세요.' alignLeft onBack={prevStep} />

      <div
        css={css`
          width: 90%;
          margin-top: 16px;
        `}
      >
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          css={css`
            width: 100%;
            padding: 12px;
            font-size: 16px;
            margin-top: 8px;
            border: none;
            border-bottom: 1px solid #e1e1e1;
            outline: none;
            transition: border-color 0.3s;
            &:focus {
              border-color: #f66;
            }
          `}
        />
        <input
          type='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          css={css`
            width: 100%;
            padding: 12px;
            font-size: 16px;
            margin-top: 12px;
            border: none;
            border-bottom: 1px solid #e1e1e1;
            outline: none;
            transition: border-color 0.3s;
            &:focus {
              border-color: #f66;
            }
          `}
        />
      </div>
      <div
        css={css`
          width: 90%;
          display: flex;
          justify-content: center;
          position: fixed;
          bottom: 10px;
        `}
      >
        <Button
          onClick={() => {
            updateData('date', date);
            updateData('time', time);
            nextStep();
          }}
          disabled={isButtonDisabled}
        >
          다음
        </Button>
      </div>
    </Col>
  );
};

export default ScheduleStep;
