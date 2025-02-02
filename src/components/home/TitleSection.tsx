/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col, Row } from '../commons/Flex';
import arrowImg from '../../assets/rightArrow.svg';

interface TitleSectionProps {
  title: string;
  subtitle: string;
  isRightButton?: boolean;
}

const TitleSection = ({ title, subtitle, isRightButton = false }: TitleSectionProps) => {
  return (
    <Row>
      <Col
        css={css`
          padding: 1em 1em 0 1em;
        `}
      >
        <h3
          css={css`
            margin: 0;
          `}
        >
          {title}
        </h3>

        <span
          css={css`
            font-size: 12px;
            color: #878787;
          `}
        >
          {subtitle}
        </span>
      </Col>
      {isRightButton && (
        <button
          css={css`
            display: flex;
            font-size: 12px;
            background: none;
            color: #878787;
            gap: 8px;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            cursor: pointer;
          `}
        >
          <span>전체보기</span>
          <img src={arrowImg} alt='arrowImg' />
        </button>
      )}
    </Row>
  );
};

export default TitleSection;
