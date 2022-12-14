import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import { ICommonCard, ITheme } from '../../commonTypes';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ICardsData = {
  cardsData: ICommonCard[];
  theme?: ITheme;
};

const CardList = ({ cardsData, theme = 'light' }: ICardsData) => {
  const navigation = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={cx('cardList')}>
      {cardsData.map(({ id, name, title, img, yearsLife }) => (
        <div className={cx('cardList-item')} key={id}>
          <Card
            name={name}
            handleClick={() => {
              navigation(`/artistProfile/id=${id}`);
            }}
            title={title}
            img={img}
            yearsLife={yearsLife}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
