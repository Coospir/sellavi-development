$(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "https://rss.app/feeds/JVTosIH7CzZagiPT.xml",
            dataType: "xml",
            success: xmlParser
        });

        let template = `
        <div class="section"> <!-- Основная секция -->
            <div class="container"> <!-- Основной контейнер -->
                <div class="catalog"> <!-- Блок каталога -->
                    <div class="catalog__flex"> <!-- Родитеский блок сетки -->
                        
                    </div>
                </div>
            </div>
        </div>
    `;

        $("body").append(template);

        let rssNews = [];
        function xmlParser(xml) {
            $(xml).find("item").each(function () {
                let title = $(this).find("title").text();
                let img = $(this).find("media\\:content").attr('url');
                let link = $(this).find("link").text();
                let rss = {
                    rssTitle: title,
                    rssImg: img,
                    rssLink: link
                }

                rssNews.push(rss);
            });

            let max = 3;
            for(let i = 0; i < max; i++) {
                console.log(rssNews[i])
                $(".catalog__flex").append("<div class=\"catalog__col\"> <!-- Дочерний блок сетки -->\n" +
                    "                            <div class=\"catalog__card card\"> <!-- Блок с контентом, в данном случае карточка, все стили этого блока уже не относятся к сетке -->\n" +
                    "                                <div class=\"card__title\">" + rssNews[i].rssTitle+ "</div>\n" +
                    "                                <img class='card__text' src='" + rssNews[i].rssImg + "'/>\n" +
                    "                                <div class=\"card__button\"><a href='" + rssNews[i].rssLink +"'>Подробнее</a></div>\n" +
                    "                            </div>\n" +
                    "                        </div>");
            }
            $(".catalog__flex").append("<a class='more' href='#'>Больше новостей</a>");
        }
});

/*
*  <div class="catalog__col"> <!-- Дочерний блок сетки -->
                            <div class="catalog__card card"> <!-- Блок с контентом, в данном случае карточка, все стили этого блока уже не относятся к сетке -->
                                <div class="card__title">rssNews[i].rssTitle</div>
                                <div class="card__img">rssNews[i].rssImg</div>
                                <div class="card__text">rssNews[i].rssDescription</div>
                                <div class="card__button"><a href="rssNews[i].rssLink">Подробнее</a></div>
                            </div>
                        </div>
* */




/*'<img class="slider-img"' + $(this).find("media").text() + '\>' +
                                '<div class="slider-title">' + $(this).find("title").text() + '</div>' +
                                '<div class="slider-description">' + $(this).find("description").text() + '</div>' +
                                '<div class="slider-link"><a href="' + $(this).find("link").text() + '">Подробнее..</a></div>' + */

if(location.href === 'https://store101263.sellavi.com/') {

    $.ajax({
        type: "GET",
        url: "https://rss.app/feeds/JVTosIH7CzZagiPT.xml",
        dataType: "xml",
        success: xmlParser
    });

    let template = `
        <div class="section"> <!-- Основная секция -->
            <div class="container"> <!-- Основной контейнер -->
                <div class="catalog"> <!-- Блок каталога -->
                    <div class="catalog__flex"> <!-- Родитеский блок сетки -->
                        
                    </div>
                </div>
            </div>
        </div>
    `;

    $("#home > div.wrapper.wrapper-closed > div.content-area > section.page-section.latest-section > div").append(template);

    let rssNews = [];

    function xmlParser(xml) {
        $(xml).find("item").each(function () {
            let title = $(this).find("title").text();
            let img = $(this).find("media\\:content").attr('url');
            let link = $(this).find("link").text();
            let rss = {
                rssTitle: title,
                rssImg: img,
                rssLink: link
            }

            rssNews.push(rss);
        });

        let max = 3;
        for (let i = 0; i < max; i++) {
            console.log(rssNews[i])
            $(".catalog__flex").append("<div class=\"catalog__col\"> <!-- Дочерний блок сетки -->\n" +
                "                            <div class=\"catalog__card card\"> <!-- Блок с контентом, в данном случае карточка, все стили этого блока уже не относятся к сетке -->\n" +
                "                                <div class=\"card__title\">" + rssNews[i].rssTitle + "</div>\n" +
                "                                <img class='card__text' src='" + rssNews[i].rssImg + "'/>\n" +
                "                                <div class=\"card__button\"><a href='/news/'>Подробнее</a></div>\n" +
                "                            </div>\n" +
                "                        </div>");
        }
    }

    const cuctomSection = document.querySelector('.custom_section');
    cuctomSection.innerHTML =
        `<div class="container">
<section>
    <h2 class="kosher-title">Кошерное питание</h2>
        <div class="kosher-description">Кашрут — система ритуальных правил, определяющих соответствие чего-либо требованиям Галахи, еврейского Закона. Одна из главных целей кашрута: продуманное, рациональное, здоровое питание.</div>
        <h2 class="preim-title">Первая сеть кошерных супермаркетов в России</h2>
        <div class="preim-block">
            <div>
                <img src="https://image.flaticon.com/icons/svg/2942/2942322.svg">
                <p>Широкий ассортимент  кошерной продукции. Вы обеспечите себя кошерными продуктами от «А» до «Я», не ограничивая свои желания.</p>
            </div>
            <div>
                <img src="https://image.flaticon.com/icons/svg/903/903149.svg">
                <p>70% всех товаров поставляется напрямую из Израиля, в том числе супермаркет сотрудничает с европейскими поставщиками.</p>
            </div>
            <div>
                <img src="https://image.flaticon.com/icons/svg/854/854929.svg">
                <p>Супермаркеты находятся в шаговой доступности от синагоги. Это быстро и удобно. </p>
            </div>
    </div>
</section>
</div>
   `;
}

$(document).ready(function() {
    if(location.href == 'https://store101263.sellavi.com/' || location.href == 'https://store101263.sellavi.com/?from_admin' || location.href.pathname == '/') {
        $('.price').each(function(){
            var str_area = $(this).text();
            var simbol_area = str_area.replace(/\ \₽/g, ' РУБ.') ;
            $(this).text(simbol_area);
        });

        $('.product-price').each(function(){
            var str_area = $(this).text();
            var simbol_area = str_area.replace(/\ \₽/g, ' РУБ.') ;
            $(this).text(simbol_area);
        });
    }
});

