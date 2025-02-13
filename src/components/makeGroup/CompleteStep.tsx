import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import Button from '../common/Button';
import CompleteImg from '../../assets/bee/flight.svg';

interface CompleteStepProps {
  onConfirm?: () => void;
}

const CompleteStep = ({ onConfirm }: CompleteStepProps) => {
  return (
    <Col
      css={css`
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 50%;
      `}
    >
      <img
        src={CompleteImg}
        alt='먹팟 등록 완료 img'
        css={css`
          width: 130px;
          height: auto;
          margin-bottom: 20px;
        `}
      />

      <h2
        css={css`
          font-size: 30px;
          font-weight: 400;
          font-family: BM kkubulim;
          color: #3d3d3d;
          margin-bottom: 4px;
        `}
      >
        먹팟이 등록됐어요!
      </h2>

      <p
        css={css`
          font-size: 16px;
          font-weight: 400;
          color: #3d3d3d;
          line-height: 24px;
          width: 100%;
          text-align: center;
        `}
      >
        먹팟 생성 및 구성원 초대가 완료되었어요. <br />
        생성한 먹팟은 ‘먹팟’ 메뉴에서 확인할 수 있어요.
      </p>

      <div
        css={css`
          width: 90%;
          display: flex;
          justify-content: center;
          position: fixed;
          bottom: 10px;
        `}
      >
        <Button onClick={onConfirm}>확인</Button>
      </div>
    </Col>
  );
};

export default CompleteStep;
