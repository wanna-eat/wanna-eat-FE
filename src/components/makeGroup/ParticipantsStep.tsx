import { useState } from 'react';
import { Col } from '../commons/Flex';
import Button from '../common/Button';
import BackHeader from '../commons/BackHeader';
import { css } from '@emotion/react';
import { GroupData } from '../../pages/MakeGroup';
import { participantsList } from '../../constants/dummyData';
import SearchBar from '../common/SearchBar';
import checkOnImg from '../../assets/group/checkOn.svg';
import checkOffImg from '../../assets/group/checkOff.svg';

interface ParticipantsStepProps {
  data: GroupData;
  updateData: (field: keyof GroupData, value: string[]) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const ParticipantsStep = ({ data, updateData, nextStep, prevStep }: ParticipantsStepProps) => {
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>(data.participants);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const isAllSelected = selectedParticipants.length === participantsList.length;
  const toggleAll = () => {
    setSelectedParticipants(isAllSelected ? [] : participantsList.map((p) => p.name));
  };

  const toggleParticipant = (name: string) => {
    setSelectedParticipants((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const filteredParticipants = participantsList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Col
      css={css`
        align-items: center;
        width: 100%;
      `}
    >
      <BackHeader
        firstTitle='먹팟에 초대할 구성원을'
        secondTitle='선택해주세요.'
        alignLeft
        onBack={prevStep}
      />

      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='이름 또는 부서로 구성원을 검색해보세요.'
      />

      <div
        css={css`
          width: 90%;
          margin-top: 16px;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          cursor: pointer;
          color: ${isAllSelected ? '#F66' : '#3d3d3d'};
        `}
        onClick={toggleAll}
      >
        전체 선택
      </div>

      <div
        css={css`
          width: 100%;
          margin-top: 12px;
          display: flex;
          flex-direction: column;
        `}
      >
        {filteredParticipants.length > 0 ? (
          filteredParticipants.map((p) => (
            <label
              key={p.name + p.team}
              css={css`
                display: flex;
                align-items: center;
                padding: 16px;
                border-bottom: 1px solid #e1e1e1;
                cursor: pointer;
              `}
              onClick={() => toggleParticipant(p.name)}
            >
              <img
                src={selectedParticipants.includes(p.name) ? checkOnImg : checkOffImg}
                alt='선택 상태'
                css={css`
                  width: 20px;
                  height: 20px;
                  margin-right: 12px;
                `}
              />
              <img
                src={p.img}
                alt={`${p.name} 프로필`}
                css={css`
                  width: 48px;
                  height: 48px;
                  border-radius: 24px;
                  margin-right: 12px;
                `}
              />

              <div
                css={css`
                  flex-grow: 1;
                  display: flex;
                  flex-direction: column;
                `}
              >
                <span
                  css={css`
                    font-size: 16px;
                    font-weight: 500;
                  `}
                >
                  {p.name}
                </span>
                <span
                  css={css`
                    font-size: 14px;
                    color: #878787;
                    font-weight: 400;
                  `}
                >
                  {p.gender}
                </span>
              </div>

              <span
                css={css`
                  font-size: 14px;
                  padding: 6px 12px;
                  border: solid 1px #e1e1e1;
                  border-radius: 20px;
                `}
              >
                {p.team}
              </span>
            </label>
          ))
        ) : (
          <p
            css={css`
              text-align: center;
              color: #888;
              font-size: 16px;
              margin-top: 16px;
            `}
          >
            검색 결과가 없습니다.
          </p>
        )}
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
            updateData('participants', selectedParticipants);
            nextStep();
          }}
          disabled={selectedParticipants.length === 0}
        >
          다음
        </Button>
      </div>
    </Col>
  );
};

export default ParticipantsStep;
