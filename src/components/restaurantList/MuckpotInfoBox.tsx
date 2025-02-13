import { css } from '@emotion/react';
import { Col, Row } from '../commons/Flex';
import TagList from '../home/TagList';
import RestaurantImg from '../../assets/home/restaurant.svg';

interface Muckpot {
  title: string;
  date: string;
  time: string;
  members: string[];
  restaurant: string;
  tags: string[];
  category: string;
  address: string;
  message: string;
}

interface MuckpotInfoBoxProps {
  muckpotData: Muckpot;
}

const subTextStyle = css`
  font-size: 13px;
  color: #878787;
  margin-right: 18px;
  align-self: center;
  white-space: nowrap;
`;

const MuckpotInfoBox = ({ muckpotData }: MuckpotInfoBoxProps) => {
  const { title, date, time, members, restaurant, tags, category, address, message } = muckpotData;

  return (
    <Col
      css={css`
        background: #fff;
        border-radius: 20px;
        padding: 16px 16px 0 16px;
        text-align: left;
        border: 1px solid #ddd;
        margin-bottom: 16px;
      `}
    >
      <div
        css={css`
          border-bottom: solid 1px #e1e1e1;
          padding-bottom: 12px;
        `}
      >
        <span
          css={css`
            font-weight: 600;
            color: #3d3d3d;
          `}
        >
          {title}
        </span>
        <br />
        <span
          css={css`
            font-size: 14px;
            font-weight: 400;
            color: #878787;
          `}
        >
          {date} {time}
        </span>
      </div>

      <Row>
        <p css={subTextStyle}>구성원</p>
        <p
          css={css`
            font-size: 14px;
            font-weight: 600;
            color: #878787;
          `}
        >
          {members.join(' ')}
        </p>
      </Row>

      <Row>
        <p
          css={css`
            font-size: 13px;
            color: #878787;
            margin-right: 18px;
            align-self: center;
            white-space: nowrap;
            align-self: flex-start;
            margin-top: 0;
          `}
        >
          장소
        </p>
        <Col
          css={css`
            margin-left: 8px;
            gap: 6px;
          `}
        >
          <Row
            css={css`
              gap: 6px;
              font-weight: 600;
              color: #3d3d3d;
            `}
          >
            <img
              src={RestaurantImg}
              alt='restaurantImg'
              css={css`
                width: 20px;
                height: 20px;
              `}
            />
            {restaurant} <br />
          </Row>
          <TagList tags={tags} />

          <span
            css={css`
              font-size: 14px;
              font-weight: 400;
              color: #3d3d3d;
            `}
          >
            {category}
          </span>

          <span
            css={css`
              font-size: 13px;
              font-weight: 400;
              color: #878787;
            `}
          >
            {address}
          </span>
        </Col>
      </Row>

      <Row>
        <p css={subTextStyle}>메세지</p>
        <p
          css={css`
            font-size: 16px;
            font-weight: 400;
            font-family: 'BM kkubulim';
          `}
        >
          {message}
        </p>
      </Row>
    </Col>
  );
};

export default MuckpotInfoBox;
