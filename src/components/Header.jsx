const Header = () => {
    return (
        <header className="header">
                <div className="header__top">
                    <ul>
                        <li>로그인</li>
                        <li>
                            <select name="" id="">
                                <option value="">한국어</option>
                            </select>
                        </li>
                        <li>검색</li>
                    </ul>
                </div>
                <div className="header__bottom">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <nav>
                        <ul>
                            <li>예술</li>
                            <li>지역</li>
                            <li>뮤지엄</li>
                            <li>유산</li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
};

export default Header;