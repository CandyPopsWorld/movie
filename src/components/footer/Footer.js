
import './Footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="link_group">
                <div className="link_item">
                    <a href="https://vk.com/plus.kinopoisk"><img src="https://rodina-fond.ru/upload/iblock/41b/3itliq1br21a11hp10m7p1xrgjcp81ct/vk-icon.png" alt=""/></a>
                </div>

                <div className="link_item">
                    <a href="https://t.me/plus_kinopoisk"><img src="https://static.wixstatic.com/media/cb099d_228121fd6d754a49b95e38361af40797~mv2.png" alt=""/></a>
                </div>

                <div className="link_item">
                    <a href="https://www.youtube.com/channel/UCZCjhmkJHNrdUb_4FrgQSEQ"><img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Almost-Black-Logo.wine.svg" alt=""/></a>
                </div>
            </div>

            <div className="question_text">
                <div className="text">
                    Мы всегда готовы вам помочь.
                    <span>Задать вопрос</span>
                </div>
            </div>

            <div className="about_text">
                <p>© 2003–2022 Кинопоиск. 18+</p>
                <p>HBO ® and related service marks are the property of Home Box Office, Inc</p>
                <p>ООО «Кинопоиск», адрес местонахождения: 115035, Россия, г. Москва, ул. Садовническая, д. 82, стр. 2, пом. 9А01</p>
                <p>Intertech Service AG</p>
                <p>Адрес для обращений пользователей: kinopoisk@support.yandex.ru</p>
                <div className="about_links">
                    <a href="https://yandex.ru/legal/kinopoisk_vod">Соглашение</a>
                    <a href="https://yandex.ru/support/kinopoisk">Справка</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;