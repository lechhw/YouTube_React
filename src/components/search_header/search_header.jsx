import React, { useState } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch, onClickLogo }) => {
  const inputRef = React.createRef();
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const returnToHome = () => {
    setOpenSideMenu(false);
    onClickLogo();
  };

  const toggleSideMenu = () => {
    setOpenSideMenu(openSideMenu ? false : true);
  };

  const handleSearch = () => {
    const keyword = inputRef.current.value;
    onSearch(keyword);
    inputRef.current.value = '';

    if (openSideMenu) {
      setOpenSideMenu(false);
    }
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <button
            onClick={toggleSideMenu}
            className={styles.menu_button}
            type="button"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <img
            onClick={onClickLogo}
            className={styles.logo_img}
            src="./images/logo.png"
            alt="logo"
          />
        </div>

        <div className={styles.input_group}>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder="검색"
            onKeyPress={onKeyPress}
          />
          <button
            onClick={onClick}
            className={styles.search_button}
            type="submit"
          >
            <img src="./images/search.svg" alt="search" />
          </button>
        </div>

        <button className={styles.login_button}>
          <i className="fa-regular fa-circle-user"></i>
          <span className={styles.span}>로그인</span>
        </button>
      </header>

      {/* sidebar */}
      <aside
        className={openSideMenu ? styles.sidebar_show : styles.sidebar_hide}
      >
        <ul className={styles.list}>
          <li className={styles.menu} onClick={returnToHome}>
            <i className="fa-solid fa-house"></i>
            <span>홈</span>
          </li>
          <li className={styles.menu}>
            <i className="fa-solid fa-compass"></i>
            <span>탐색</span>
          </li>
          <li className={styles.menu}>
            <img src="./images/subscription.svg" alt="" />
            <span>구독</span>
          </li>
        </ul>

        <div className={styles.overlay} onClick={toggleSideMenu}></div>
      </aside>
    </>
  );
};

export default SearchHeader;
