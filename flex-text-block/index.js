let cs = document.querySelector(".custom_section");
    const newSection =
        `<div class="about_company">
        <div class="company_title">
          <h1>Khagani Man</h1>
        </div>
        <div class="company_content">
          <h1>Немного о компании</h1>
          <img src="https://images.unsplash.com/photo-1568153878744-22637b3fa3b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" class="company_img" />
          <p class="company_description">Наш недорогой магазин мужской деловой одежды – это находка для тех, кто ценит свое время и предпочитает качественные и комфортные вещи. В удобном каталоге представлены коллекции
            брендовой одежды бизнес-класса. Вся повседневная и деловая мужская одежда пошита из высококачественных натуральных тканей, изготовленных в Турции. В каталоге интернет-магазина KHAGANI-MAN
            собраны лучшие коллекции, которые удовлетворят даже самых придирчивых покупателей. Чтобы выглядеть стильно и креативно, совсем необязательно посещать модные и дорогие бутики.
            Наш интернет-магазин мужской одежды в Москве предлагает все для того, чтобы сделать вас настоящей индивидуальностью, а консультанты помогут в создании нового образа, который подчеркнет
            все ваши лучшие деловые черты и достоинства!</p>
        </div>
    </div>`;

    cs.innerHTML = newSection;
    $(".custom_section").html("<iframe src=\"https://averin.pro/widget.php?l=khagani_man&style=2&width=250&gallery=0&s=80&icc=4&icr=3&t=1&tt=Мы в Инстаграм&h=1&ttcolor=FFFFFF&th=c3c3c3&bw=debc71&bscolor=FFFFFF&bs=FF0000&ts=Подписаться&ch=utf8\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" style=\"border:none;overflow:hidden;width:350px; height: 490px\" ></iframe>");