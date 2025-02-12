/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import flight from '../assets/bee/flight.svg';
import { Col } from '../components/commons/Flex';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const SettingFinished = () => {
  const navigate = useNavigate();

  return (
    <Col
      justifyContent='center'
      alignItems='center'
      css={css`
        height: 100%;
        width: 100%;
        max-width: 400px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `}
    >
      <img 
        src={flight} 
        alt="flight"
        css={css`
          width: 131.728px;
          height: 195.297px;
          margin-top: 100px;
        `}
      />
      <div css={css`
        margin-top: 30px;
        color: var(--Text, #3D3D3D);
        text-align: center;
        font-family: "BM kkubulim";
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.15px;
      `}>[먹을래]님 환영합니다!</div>
      <div css={css`
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 40px);
        max-width: 360px;
      `}>
        <Button onClick={() => navigate('/home')}>
          홈으로
        </Button>
      </div>
    </Col>
  );
};

export default SettingFinished;