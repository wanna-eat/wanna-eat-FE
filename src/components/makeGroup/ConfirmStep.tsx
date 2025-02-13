import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import Button from '../common/Button';
import BackHeader from '../commons/BackHeader';
import MuckpotInfoBox from '../restaurantList/MuckpotInfoBox';

interface ConfirmStepProps {
  data: {
    title: string;
    date: string;
    time: string;
    participants: string[];
    message: string;
  };
  nextStep: () => void;
  prevStep: () => void;
}

const ConfirmStep = ({ data, nextStep, prevStep }: ConfirmStepProps) => {
  return (
    <Col
      css={css`
        align-items: center;
      `}
    >
      <BackHeader firstTitle='먹팟 등록 전 확인해주세요.' alignLeft onBack={prevStep} />
      <div
        css={css`
          width: 90%;
          margin-top: 20%;
        `}
      >
        <MuckpotInfoBox
          muckpotData={{
            title: data.title,
            date: data.date,
            time: data.time,
            members: data.participants,
            restaurant: '성수노루',
            tags: ['시끌벅적한', '대규모', '회식에 딱'],
            category: '곱창, 막창, 양',
            address: '서울 성동구 아차산로 110 1층',
            message: data.message,
          }}
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
        <Button onClick={nextStep}>다음</Button>
      </div>
    </Col>
  );
};

export default ConfirmStep;
