import React, { useState, useEffect, useRef } from 'react';
import styles from './VerticalSlider.module.css';
import AboutSlider from './SliderComponent/AboutSlider';
import CafeSlider from './SliderComponent/CafeSlider';
import MenuSlider from './SliderComponent/MenuSlider';
import Footer from '../Footer/Footer';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);

  const items = [<AboutSlider />, <CafeSlider />, <MenuSlider />];

  useEffect(() => {
    // 페이지 진입 시 스크롤 활성화
    document.body.style.overflowY = 'hidden';

    // 페이지 떠날 때 스크롤 다시 숨김
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      if (!isScrolling) {
        setIsScrolling(true);

        if (e.deltaY > 0 && activeIndex < items.length - 1) {
          // 스크롤을 아래로 내리고, 현재 슬라이드가 마지막 슬라이드가 아닌 경우에만 변경
          setActiveIndex((prevIndex) => prevIndex + 1);
        } else if (e.deltaY < 0 && activeIndex > 0) {
          // 스크롤을 위로 올리고, 현재 슬라이드가 첫 번째 슬라이드가 아닌 경우에만 변경
          setActiveIndex((prevIndex) => prevIndex - 1);
        }

        setTimeout(() => {
          setIsScrolling(false);
        }, 800); // 딜레이 시간 설정
      }
      e.preventDefault(); // 스크롤 이벤트를 무시
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeIndex, isScrolling, items.length]);

  // 슬라이드가 변경될 때마다 슬라이드의 display 속성 업데이트
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const children = container.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.style.display =
          i === activeIndex || i === activeIndex - 1 || i === activeIndex + 1 ? 'block' : 'none';
      }
    }
  }, [activeIndex]);

  return (
    <div className={styles.verticalSlider}>
      <div ref={containerRef} className={styles.sliderContainer}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.sliderItem} ${activeIndex === index ? styles.active : ''}`}
            style={{
              transition: 'transform 1s ease', // 트랜지션 설정
              position: 'absolute', // 슬라이드 위치 고정
              left: 0, // 슬라이드 위치 고정
              width: '100%', // 슬라이드 너비 고정
              transform: `translateY(${(index - activeIndex) * 100}%)`, // Y 축으로 이동
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
