import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import { useState } from 'react';
import StoreRanking from './StoreRanking';
import TitleSection from './TitleSection';
import VisitedRestaurant from './VisitedRestaurant';
import HomeCard from './HomeCard';
import {
  groupCafeData,
  visitedCafeData,
  HomeCardList,
  muckpotData,
} from '../../constants/dummyData';
import MuckpotJoinModal from '../restaurantList/MuckpotJoinModal';
import MuckpotCreateModal from '../restaurantList/MuckpotCreateModal';
import { useNavigate } from 'react-router-dom';

const Cafe = () => {
  const [groupCafes, setGroupCafes] = useState(groupCafeData);
  const [homeCards, setHomeCards] = useState(HomeCardList);
  const [modalState, setModalState] = useState<'join' | 'create' | null>(null);
  const navigation = useNavigate();

  const toggleGroupFavorite = (index: number) => {
    setGroupCafes((prev) =>
      prev.map((cafe, i) => (i === index ? { ...cafe, isFavorite: !cafe.isFavorite } : cafe))
    );
  };

  const toggleHomeCardFavorite = (index: number) => {
    setHomeCards((prev) =>
      prev.map((homeCard, i) =>
        i === index ? { ...homeCard, isFavorite: !homeCard.isFavorite } : homeCard
      )
    );
  };

  return (
    <Col>
      <TitleSection title='이 달의 단체 카페 랭킹' subtitle='점심 시간에 간단한 커피챗은 여기서!' />
      <Col
        css={css`
          padding: 0 1em 1em 1em;
        `}
      >
        {groupCafes.map((cafe, index) => (
          <StoreRanking
            key={cafe.ranking}
            ranking={cafe.ranking}
            name={cafe.name}
            category={cafe.category}
            openInfo={cafe.openInfo}
            isFavorite={cafe.isFavorite}
            onToggleFavorite={() => toggleGroupFavorite(index)}
          />
        ))}
      </Col>
      <div
        css={css`
          background-color: #fafafa;
          height: 1vh;
        `}
      />
      <TitleSection title='한 번 더 먹으러 갈까요?' subtitle='먹팟과 함께 방문했던 카페에요.' />
      <VisitedRestaurant name={visitedCafeData.name} category={visitedCafeData.category} />
      <div
        css={css`
          background-color: #fafafa;
          height: 1vh;
        `}
      />
      <TitleSection
        title='나의 회사 근처 카페'
        subtitle='먹을래님의 회사에서 가까운 카페에요.'
        isRightButton={true}
        navigateTo='cafe'
      />
      <Col>
        {homeCards.map((homeCard, index) => (
          <HomeCard
            key={index}
            name={homeCard.name}
            category={homeCard.category}
            address={homeCard.address}
            tag={homeCard.tag || []}
            imageUrl={homeCard.imageUrls || []}
            isFavorite={homeCard.isFavorite}
            onToggleFavorite={() => toggleHomeCardFavorite(index)}
            onOpenModal={(type) => setModalState(type)}
          />
        ))}
      </Col>
      {modalState === 'join' && (
        <MuckpotJoinModal
          isOpen={true}
          onClose={() => setModalState(null)}
          muckpotData={muckpotData}
        />
      )}
      {modalState === 'create' && (
        <MuckpotCreateModal
          isOpen={true}
          onClose={() => setModalState(null)}
          onCreate={() => navigation('/group/make')}
        />
      )}
    </Col>
  );
};

export default Cafe;
