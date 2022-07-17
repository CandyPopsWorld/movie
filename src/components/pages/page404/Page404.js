import '../page404/Page404.scss';
import { Link } from 'react-router-dom';

const Page404 = ()=> {
    return (
        <>
            <div className="headerError">
                <div className="logo">
                    <Link to='/'>
                        <img src="https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/logo.svg" alt=""/>
                    </Link>
                </div>
            </div>

            <div className="mainError">
                <div className="mainError_section">
                    <h1>404. Страница не найдена</h1>
                    <p>Возможно, она была перемещена, или вы просто неверно указали адрес страницы.</p>

                    <div className="link">
                        <Link to='/'>Перейти на главную</Link>
                        <a href="https://yandex.ru/support/kinopoisk/index.html">Написать в поддержку</a>
                    </div>
                </div>

                <div className="mainError_section">
                    <video muted playsInline autoPlay loop src="https://www.kinopoisk.ru/public/videos/errors/desktop/404/5.mp4"></video>
                </div>
            </div>
        </>
    )
}

export default Page404;