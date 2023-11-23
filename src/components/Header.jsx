const Header = () => {
    return (
        <header className="header">
                <div className="header__top">
                    <ul>
                        <li><a href="">로그인</a></li>
                        <li>
                            <select name="" id="">
                                <option value="">한국어</option>
                            </select>
                        </li>
                        <li><a href="">검색</a></li>
                        <li><a href="">관리자</a></li>
                    </ul>
                </div>
                <div className="header__bottom">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">예술</a></li>
                            <li><a href="">지역</a></li>
                            <li><a href="">뮤지엄</a></li>
                            <li><a href="">유산</a></li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
};

export default Header;