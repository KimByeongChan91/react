// 오늘 할일 - 2024 06 14
// 일요일 글씨색 빨간색
// 토요일 글씨색 파란색

import { changeColorbyDay } from './util/color';

const Header = () => {
  const [year, month, date] = new Date().toLocaleString().split(' ');

  const day = new Date().getDay();


  return (
    <div>
        <span>오늘 할 일</span>
       <span style={{color: changeColorbyDay(day) }}>
        {year} {month} {date}
        </span>
    </div>
  );
};

export default Header;
