import leftArrowImg from '../../assets/leftArrow.svg';
import { css } from '@emotion/react';
import { Row, Col } from './Flex';
import { useNavigate } from 'react-router-dom';

interface BackHeaderProps {
  firstTitle: string;
  secondTitle?: string;
  alignLeft?: boolean;
  onBack?: () => void;
}

const BackHeader = ({ firstTitle, secondTitle, alignLeft = false, onBack }: BackHeaderProps) => {
  const navigate = useNavigate();
  const handleBack = onBack || (() => navigate(-1));

  return alignLeft ? (
    <Col
      css={css`
        position: relative;
        align-items: flex-start;
        padding: 12px 20px;
        gap: 8px;
        margin-top: 12px;
      `}
    >
      <img
        src={leftArrowImg}
        css={css`
          cursor: pointer;
        `}
        onClick={handleBack}
      />
      <p
        css={css`
          font-size: 24px;
          font-weight: 700;
          margin: 12px 0 0 0;
          white-space: pre-line;
          word-wrap: break-word;
        `}
      >
        {firstTitle}
      </p>
      {secondTitle && (
        <p
          css={css`
            font-size: 24px;
            font-weight: 700;
            margin: 0;
            white-space: pre-line;
            word-wrap: break-word;
          `}
        >
          {secondTitle}
        </p>
      )}
    </Col>
  ) : (
    <Row
      css={css`
        position: relative;
        align-items: center;
        padding: 12px 0;
        justify-content: center;
      `}
    >
      <img
        src={leftArrowImg}
        css={css`
          position: absolute;
          left: 20px;
          cursor: pointer;
        `}
        onClick={() => navigate(-1)}
      />
      <Col
        css={css`
          align-items: center;
        `}
      >
        <p
          css={css`
            font-size: 20px;
            font-weight: 500;
            margin: 0;
          `}
        >
          {firstTitle}
        </p>
        {secondTitle && (
          <p
            css={css`
              font-size: 20px;
              font-weight: 500;
              margin: 0;
            `}
          >
            {secondTitle}
          </p>
        )}
      </Col>
    </Row>
  );
};

export default BackHeader;
