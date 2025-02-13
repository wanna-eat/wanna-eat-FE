import { Col } from '../components/commons/Flex';
import BackHeader from '../components/commons/BackHeader';
import { useState } from 'react';
import { css } from '@emotion/react';
import TagFilter from '../components/restaurantList/TagFilter';
import SearchBar from '../components/common/SearchBar';
import HomeCard from '../components/home/HomeCard';
import MakeMuckpotButton from '../components/restaurantList/MakeMuckpotButton';
import MuckpotJoinModal from '../components/restaurantList/MuckpotJoinModal';
import { HomeCardList, TAGS, muckpotData } from '../constants/dummyData';
import MuckpotCreateModal from '../components/restaurantList/MuckpotCreateModal';
import { useNavigate } from 'react-router-dom';

const RestaurantList = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [homeCards, setHomeCards] = useState(HomeCardList);
  const [modalState, setModalState] = useState<'join' | 'create' | null>(null);
  const navigation = useNavigate();

  const toggleHomeCardFavorite = (index: number) => {
    setHomeCards((prev) =>
      prev.map((homeCard, i) =>
        i === index ? { ...homeCard, isFavorite: !homeCard.isFavorite } : homeCard
      )
    );
  };
  return (
    <>
      <Col>
        <BackHeader firstTitle={'식당'}></BackHeader>
        <div
          css={css`
            margin-top: 12px;
            width: 90%;
            margin-left: 5%;
          `}
        ></div>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <h3
          css={css`
            margin-left: 1em;
          `}
        >
          상황별로 골라보기
        </h3>
        <TagFilter tags={TAGS} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
        <MakeMuckpotButton />
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
    </>
  );
};

export default RestaurantList;
