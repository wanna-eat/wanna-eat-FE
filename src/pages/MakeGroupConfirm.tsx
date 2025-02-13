import { css } from '@emotion/react';
import BackHeader from '../components/commons/BackHeader';
import { Col } from '../components/commons/Flex';
import TagList from '../components/home/TagList';
import { groupConfrimData } from '../constants/dummyData';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

const MakeGroupConfirm = () => {
  const navigate = useNavigate();
  return (
    <Col
      css={css`
        align-items: center;
      `}
    >
      <BackHeader
        firstTitle='먹팟을 생성할 식당/카페 '
        secondTitle='정보를 확인해주세요.'
        alignLeft={true}
      />
      <Col
        css={css`
          background: rgba(255, 102, 102, 0.1);
          border: 1px solid #ff6666;
          border-radius: 16px;
          padding: 20px;
          width: 94%;
          margin-top: 16px;
        `}
      >
        <p
          css={css`
            font-size: 16px;
            font-weight: 600;
            color: #ff6666;
            margin: 0 0 8px 0;
          `}
        >
          {groupConfrimData.name}
        </p>
        <TagList tags={groupConfrimData.tags} changeColor={true} />
        <p
          css={css`
            font-size: 14px;
            font-weight: 500;
            color: #ff6666;
            margin-top: 8px 0 0 0;
          `}
        >
          {groupConfrimData.category}
        </p>
        <p
          css={css`
            font-size: 14px;
            font-weight: 400;
            color: #ff8989;
            margin: 0;
          `}
        >
          {groupConfrimData.address}
        </p>
      </Col>
      <div
        css={css`
          width: 92%;
          justify-content: center;
          display: flex;
          position: fixed;
          bottom: 10px;
        `}
      >
        <Button children={'다음'} onClick={() => navigate('/group/make')} />
      </div>
    </Col>
  );
};

export default MakeGroupConfirm;
