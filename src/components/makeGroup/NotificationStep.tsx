import { useState } from 'react';
import { Col } from '../commons/Flex';
import Button from '../common/Button';
import BackHeader from '../commons/BackHeader';
import { css } from '@emotion/react';
import { messages } from '../../constants/dummyData';

interface NotificationStepProps {
  data: { message: string };
  updateData: (field: keyof { message: string }, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const NotificationStep = ({ data, updateData, nextStep, prevStep }: NotificationStepProps) => {
  const [selectedMessage, setSelectedMessage] = useState<string>(data.message);
  const [customMessage, setCustomMessage] = useState<string>('');
  const [isCustomInput, setIsCustomInput] = useState<boolean>(false);

  return (
    <Col
      css={css`
        align-items: center;
        width: 100%;
      `}
    >
      <BackHeader
        firstTitle='구성원에게 전송될 '
        secondTitle='메시지를 선택해주세요.'
        alignLeft
        onBack={prevStep}
      />

      <Col
        css={css`
          width: 90%;
          margin-top: 20px;
          gap: 20px;
        `}
      >
        {messages.map((msg) => (
          <button
            key={msg}
            onClick={() => {
              setSelectedMessage(msg);
              setIsCustomInput(false);
            }}
            css={css`
              width: 100%;
              padding: 20px;
              font-size: 16px;
              border-radius: 20px;
              border: 1px solid ${selectedMessage === msg ? '#F66' : '#E1E1E1'};
              background: ${selectedMessage === msg
                ? 'rgba(255, 102, 102, 0.20)'
                : 'rgba(225, 225, 225, 0.20)'};
              color: ${selectedMessage === msg ? '#F66' : '#3d3d3d'};
              cursor: pointer;
              transition: 0.3s;
              text-align: left;
            `}
          >
            {msg}
          </button>
        ))}

        {!isCustomInput ? (
          <button
            onClick={() => {
              setIsCustomInput(true);
              setSelectedMessage('');
            }}
            css={css`
              width: 100%;
              padding: 20px;
              font-size: 16px;
              border-radius: 20px;
              border: 1px solid ${isCustomInput ? '#F66' : '#E1E1E1'};
              background: ${isCustomInput
                ? 'rgba(255, 102, 102, 0.20)'
                : 'rgba(225, 225, 225, 0.20)'};
              color: ${isCustomInput ? '#F66' : '#3d3d3d'};
              cursor: pointer;
              transition: 0.3s;
              text-align: left;
            `}
          >
            직접 작성하기
          </button>
        ) : (
          <input
            type='text'
            value={customMessage}
            onChange={(e) => {
              setCustomMessage(e.target.value);
              setSelectedMessage(e.target.value);
            }}
            placeholder='메시지를 입력하세요.'
            css={css`
              width: 100%;
              padding: 16px;
              font-size: 16px;
              border-radius: 20px;
              border: 1px solid #f66;
              background: rgba(255, 102, 102, 0.1);
              color: #3d3d3d;
              outline: none;
              text-align: left;
            `}
          />
        )}
      </Col>

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
            updateData('message', selectedMessage);
            nextStep();
          }}
          disabled={!selectedMessage}
        >
          다음
        </Button>
      </div>
    </Col>
  );
};

export default NotificationStep;
