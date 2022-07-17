
import './NavPanel.scss';

const NavPanel = () => {
    return(
        <div className="header_main">
            <div className="header_item header_first">
                <div className="header_burger">☰</div>

                <div className="header_logo">
                    KINOPOISK
                </div>
            </div>

            <div className="header_item header_second">
                <div className="header_link">
                    <a href="">Главное</a>
                </div>

                <div className="header_link">
                    <a href="">Магазин</a>
                </div>

                <div className="header_link">
                    <a href="">Моё</a>
                </div>

                <div className="header_link">
                    <a href="">Телеканалы</a>
                </div>

                <div className="header_link">
                    <a href="">Спорт</a>
                </div>

                <div className="header_search">
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt=""/>
                </div>
            </div>

            <div className="header_item header_three">
                <div className="header_loadtv">
                    <div className="header_loadtv_logo">
                        <img src="https://avatars.mds.yandex.net/get-bunker/118781/1bed25da2e176ee99658eafff85ebe9a80ca0601/orig" alt=""/>
                    </div>

                    <div className="header_loadtv_text">
                        Установить на ТВ
                    </div>

                    <div className="header_user_logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavPanel;