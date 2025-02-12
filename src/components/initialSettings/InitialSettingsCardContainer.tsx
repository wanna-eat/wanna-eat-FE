/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../commons/Flex';

import { ReactNode } from 'react';

interface InitialSettingsCardContainerProps {
  children: ReactNode;
}

const InitialSettingsCardContainer = ({ children }: InitialSettingsCardContainerProps) => {
  return (
    <div css={css`
      position: relative;
      width: 90%;
      max-width: 353px;
      min-height: 500px;
      margin: 0 auto;
      margin-top: 50px;
    `}>
      
      {/* Left gradient (Yellow) */}
      <div css={css`
        position: absolute;
        left: -20px;
        top: 0;
        width: 40px;
        height: 100%;
        border-radius: 20px;
        background: linear-gradient(90deg, rgba(255, 190, 57, 0.20) 0%, rgba(255, 190, 57, 0.05) 100%);
        filter: blur(5px);
        z-index: -1;
      `} />

      {/* Right gradient (Red) */}
      <div css={css`
        position: absolute;
        right: -20px;
        top: 0;
        width: 40px;
        height: 100%;
        border-radius: 20px;
        background: linear-gradient(90deg, rgba(255, 102, 102, 0.05) 0%, rgba(255, 102, 102, 0.20) 100%);
        filter: blur(5px);
        z-index: -1;
      `} />

      {/* Main card */}
      <Col css={css`
        border-radius: 20px;
        border: 1px solid #F66;
        background: linear-gradient(149deg, rgba(255, 255, 255, 0.30) 46.02%, rgba(255, 255, 255, 0.00) 68.37%, rgba(255, 255, 255, 0.30) 87.88%);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
        backdrop-filter: blur(10px);
        width: 100%;
        min-height: 500px;
        padding: 20px;
      `}>
        {children}
      </Col>
    </div>
  );
};

export default InitialSettingsCardContainer;