import { useState } from 'react';
import { Col } from '../commons/Flex';
import Button from '../common/Button';
import BackHeader from '../commons/BackHeader';
import { css } from '@emotion/react';
import { GroupData } from '../../pages/MakeGroup';

interface TitleStepProps {
  data: GroupData;
  updateData: (field: keyof GroupData, value: string) => void;
  nextStep: () => void;
}

const TitleStep = ({ data, updateData, nextStep }: TitleStepProps) => {
  const [title, setTitle] = useState<string>(data.title);
  const isButtonDisabled = title.trim().length === 0;

  return (
    <Col
      css={css`
        align-items: center;
      `}
    >
      <BackHeader firstTitle='먹팟 제목을 입력해주세요.' alignLeft />

      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='먹팟 제목'
        css={css`
          width: 90%;
          padding: 16px;
          font-size: 16px;
          border: none;
          border-bottom: 2px solid #e1e1e1;
          outline: none;
          transition: border-color 0.3s;
          margin-top: 12px;
          &:focus {
            border-bottom: 2px solid #f66;
          }
        `}
      />

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
            updateData('title', title);
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

export default TitleStep;
