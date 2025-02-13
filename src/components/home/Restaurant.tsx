import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import { useState } from 'react';
import StoreRanking from './StoreRanking';
import TitleSection from './TitleSection';
import VisitedRestaurant from './VisitedRestaurant';
import HomeCard from './HomeCard';
import {
  groupRestaurantData,
  visitedRestaurantData,
  HomeCardList,
  muckpotData,
} from '../../constants/dummyData';
import MuckpotJoinModal from '../restaurantList/MuckpotJoinModal';
import MuckpotCreateModal from '../restaurantList/MuckpotCreateModal';
import { useNavigate } from 'react-router-dom';

const Restaurant = () => {
  const [groupRestaurants, setGroupRestaurants] = useState(groupRestaurantData);
  const [homeCards, setHomeCards] = useState(HomeCardList);
  const [modalState, setModalState] = useState<'join' | 'create' | null>(null);
  const navigation = useNavigate();

  const toggleGroupFavorite = (index: number) => {
    setGroupRestaurants((prev) =>
      prev.map((restaurant, i) =>
        i === index ? { ...restaurant, isFavorite: !restaurant.isFavorite } : restaurant
      )
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
      <TitleSection title='이 달의 단체 식당 랭킹' subtitle='단체 예약이 가능한 식당이에요.' />
      <Col
        css={css`
          padding: 0 1em 1em 1em;
        `}
      >
        {groupRestaurants.map((restaurant, index) => (
          <StoreRanking
            key={restaurant.ranking}
            ranking={restaurant.ranking}
            name={restaurant.name}
            category={restaurant.category}
            openInfo={restaurant.openInfo}
            isFavorite={restaurant.isFavorite}
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
      <TitleSection title='한 번 더 먹으러 갈까요?' subtitle='먹팟과 함께 방문했던 식당이에요.' />
      <VisitedRestaurant
        name={visitedRestaurantData.name}
        category={visitedRestaurantData.category}
      />
      <div
        css={css`
          background-color: #fafafa;
          height: 1vh;
        `}
      />
      <TitleSection
        title='나의 회사 근처 식당'
        subtitle='먹을래님의 회사에서 가까운 식당이에요.'
        isRightButton={true}
        navigateTo='restaurant'
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

export default Restaurant;
