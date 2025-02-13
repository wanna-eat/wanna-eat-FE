import { css } from '@emotion/react';
import BackHeader from '../components/commons/BackHeader';
import { Col } from '../components/commons/Flex';
import { useState } from 'react';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import TagFilter from '../components/restaurantList/TagFilter';

const MakeGroupStoreInput = () => {
  const [storeName, setStoreName] = useState<string>('');
  const [storeLocation, setStoreLocation] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const navigation = useNavigate();
  const isButtonDisabled = storeName.trim().length === 0 || storeLocation.trim().length === 0;

  return (
    <Col
      css={css`
        align-items: center;
      `}
    >
      <BackHeader
        firstTitle='먹팟을 생성할 식당/카페'
        secondTitle='정보를 입력해주세요.'
        alignLeft
      />
      <input
        type='text'
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        placeholder='상호명을 입력해주세요.'
        css={css`
          width: 90%;
          padding: 16px;
          font-size: 16px;
          border: none;
          border-bottom: 2px solid #e1e1e1;
          outline: none;
          transition: border-color 0.3s;
          margin-top: 16px;
          &:focus {
            border-bottom: 2px solid #f66;
          }
        `}
      />
      <input
        type='text'
        value={storeLocation}
        onChange={(e) => setStoreLocation(e.target.value)}
        placeholder='위치를 입력해주세요.'
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
          display: flex;
          padding: 30px 0 0 12px;
          width: 100%;
        `}
      >
        <TagFilter tags={['식당', '카페']} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
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
        <Button
          onClick={() => {
            navigation('/group/make');
          }}
          disabled={isButtonDisabled}
        >
          다음
        </Button>
      </div>
    </Col>
  );
};

export default MakeGroupStoreInput;
