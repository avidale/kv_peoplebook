import React, { Component } from 'react';
import Linkify from 'react-linkify';
import logo from './logo.svg';
import './App.css';

const people = [
  {
    "knowledge": "Продакт-менеджмент, все аспекты стартапинга, Тверь, Екатеринбург, Москва, Лондон, Барселона, граффити и стритарт, шахматы, техно-хаус-джаз-хипхоп музыка, стратегический консалтинг, аудит, кейс-чемпионаты, финансовая аналитика, ВШЭ, английский и испанский язык, executive search, организация форумов, развитие сообществ, психология, долгие романтические отношения и их конец, путь к счастью и чилл по жизни :)",
    "name": "Вася Сиников",
    "occupation": "Соосновал, накодил и надизайнил MVP, а теперь управляю развитием продуктов в www.compensair.com Обращайтесь, если у вас задержат рейс, мы выплатили уже больше 2 млн евро компенсаций. До этого учился и работал околоэкономистом. Слушаю музыку, рисую граффити, играю в шахматы",
        "photo": process.env.PUBLIC_URL + "/photos/sinikov.png",

    "profiles": "Добавляйтесь в друзьяшки https://vk.com/va.sinikov t.me/sinikov www.linkedin.com/in/vasinikov",
    "timestamp": "2019/01/25 12:00:11 PM GMT+3"
  },
  {
    "knowledge": "О Москве, градостроительстве, урбанистике, строительстве, истории, инвестициях, девелопменте",
    "name": "Александр Землянский",
    "occupation": "Девелопмент, строительство, инвестиции, привлечение инвестиций, собственные пабы, футбол, батуты, гитара, не люблю демократию (привет)",
    "photo": process.env.PUBLIC_URL + "/photos/zemlyansky.png",
    "profiles": "https://vk.com/alexvzeml",
    "timestamp": "2019/01/26 12:41:08 AM GMT+3"
  },
  {
    "knowledge": "Интеллектуальное волонтерство, наставничество, консалтинг для НКО\nСостою в 7 молодежных сообществах помимо Каппа Веди, могу рассказать про них\nРаньше писал стихи, сейчас пишу кейсы\nХочу научиться играть в сквош, ищу напарника.\nВ прошлом году посетил 10 европейских стран , могу рассказать о своем опыте.",
    "name": "Сергей Шершень ",
    "occupation": "Начальник отдела управления талантами в Федеральной пассажирской компании. Раньше работал в Ростехе, Мегафоне, Альфа Банке, Роснефти, BCG и Strategy Partners Group.\n\nПишу кандидатскую диссертацию по пенсионной реформе\n\nОсновал наставнический проект my-mentor.ru, наша команда победила на конкурсе \"Доброволец России - 2018\" в номинации \"корпоративное волонтерство\"",
    "photo": process.env.PUBLIC_URL + "/photos/shershen.jpg",
    "profiles": "https://vk.com/sergshen\nhttps://www.facebook.com/sergshen1",
    "timestamp": "2019/01/26 1:16:03 PM GMT+3"
  },
  {
    "knowledge": "Рациональное мышление, оптимизация бизнес-процессов, научпоп, научная фантастика, архитектура, продукция виноделия Пьемонта, путешествия по России (70+ городов), волонтерство, трубная арматура.",
    "name": "Анастасия Гапонец",
    "occupation": "Опыт работы в John Deere и General Electric. Работала фин.директором на винодельне в Италии. Сейчас являюсь финансовым директором на металлургическом предприятии. ",
    "photo": process.env.PUBLIC_URL + "/photos/gaponec.jpg",
    "profiles": "https://vk.com/siberria\nhttps://www.facebook.com",
    "timestamp": "2019/01/26 12:57:14 AM GMT+3"
  },
  {
    "knowledge": "маркетинг сложных сервисов, таргетинг, CPA-сети, работа с аудиторией 14-25, кроссовки, монетизация телеграм-каналов, рестораны, доставки еды и другие способы поесть, практика стендап-комедии и скучная теория юмора, как потерять загранпаспорт накануне вылета и как этого можно было избежать",
    "name": "Даниэль Фельдман",
    "occupation": "Я придумал и делаю СНИКЕРСЕЙЛ - сервис для поиска лучших цен на обувь. До этого в Microsoft отвечал за B2B маркетинг облачных сервисов. В свободное от работы время стараюсь вести телеграм-канал @kudaeda про московские рестораны. И ем в них. В свободное от работы и канала время (кого я обманываю) занимаюсь стенд-апом",
    "photo": process.env.PUBLIC_URL + "/photos/feldman.jpg",
    "profiles": "tlg.wtf/feldmand",
    "timestamp": "2019/01/26 12:23:46 AM GMT+3"
  },
  {
    "knowledge": "Урал, баня, Потанинка",
    "name": "Рафаэль Валиахметов ",
    "occupation": "SAP ERP",
    "photo": process.env.PUBLIC_URL + "/photos/rafael.jpg",
    "profiles": "intentionally left blank",
    "timestamp": "2019/01/26 12:49:18 AM GMT+3"
  },
  {
    "knowledge": "Анализ данных, машинное обучение (кроме компьютерного зрения). Жизнь в Тель-Авиве.",
    "name": "Давид Дале",
    "occupation": "Программирую текстовый движок Алисы, до этого был аналитиком в Yandex Data Factory и Альфа-Банке (кредитный скоринг). Временами преподаю прикладную математику (преимущественно теорвер/матстат/анализ данных). Приложил руку к созданию кейс-школы Феникс. Всё никак не доделаю пакет с новой эконометрической моделькой. ",
    "photo": process.env.PUBLIC_URL + "/photos/dale.jpg",
    "profiles": "vk.com/dale.david\nfacebook.com/dale.david.fluteman\nt.me/cointegrated",
    "timestamp": "2019/01/25 9:05:39 PM GMT+3"
  }, 
 {
    "name": "Айрана Монгуш", 
    "timestamp": "01.03.2019 11:02:25", 
    "profiles": "телеграм @terrainco инстаграм @aira_mo почта ayrana.mongush@gmail.com", 
    "photo": "https://pp.userapi.com/c840127/v840127692/789ff/W5hYLkcf-5Y.jpg", 
    "occupation": "Я продакт-менеджер в Mail.Ru Group, рекламные технологии. Ранее занималась тем же в представительстве Facebook&Instagram в России — aitarget.com. Ex-Deloitte. Сейчас делаю два проекта — в Edtech (mathematicalhub.com, мы проучились в YC Startup School 2018) + туристический проект tyva.me. Я одна из сооснователей Phoenix Case School. Сейчас член Каппа Веди", 
    "knowledge": "Занималась Growth маркетингом на рынке штатов, возможно, единственный специалист по таргетированной рекламе (FB&Insta&VK&myTarget) в России."
  }, 
  {
    "name": "Павленко Евгений", 
    "timestamp": "01.03.2019 11:05:18", 
    "profiles": "https://www.facebook.com/eepavlenko https://www.instagram.com/eeepavlenko/", 
    "photo": process.env.PUBLIC_URL + "/photos/epavlenko.jpg", 
    "occupation": "Стратегический и операционный консалтинг в PwC, преимущественно в сфере инновационного развития, науки и высшего образования", 
    "knowledge": "Почему в России все так плохо с высшим образованием и будет ли лучше?"
  }, 
  {
    "name": "Александр Солдатов", 
    "timestamp": "01.03.2019 11:54:26", 
    "profiles": "https://vk.com/soldatov_ax",  
    "photo": process.env.PUBLIC_URL + "/photos/soldatov.jpg", 
    "occupation": "5 лет руководитель направления робототехники в университете, действующий чемпион Всероссийских соревнований Робофест 2018. Сейчас  -  IT Project Manager. Уже 10 лет торгую на финансовых рынках, таких как NYSE/NASDAQ/MOEX/FOREX.", 
    "knowledge": "IT, Робототехника, Финансовое планирование, Инвестиции в ЦБ, Спекулирование. "
  }, 
  {
    "name": "Роман Беднарский", 
    "timestamp": "01.03.2019 11:54:36", 
    "profiles": "t.me/bromansky", 
    "photo": process.env.PUBLIC_URL + "/photos/bednarski.jpg",  
    "occupation": "DIY-штуки, лайтовый кодинг на питоне, управление продуктами и анализ данных. Сейчас работаю в Яндексе и руковожу развитием части одного из образовательных сервисов.", 
    "knowledge": "Шри-Ланка, города России, Китай, каратэ, тайский бокс, атлетика, прыжки с парашютом, фортепиано, тренды в технологиях."
  }, 
  {
    "name": "Анна Раковская", 
    "timestamp": "01.03.2019 13:18:14", 
    "profiles": "tg: @amusion  inst: @hyperboreaa", 
    "photo": process.env.PUBLIC_URL + "/photos/rakovski.jpg",
    "occupation": "Яндекс.Маркет - Менеджер по поддержке процессов ex-Luxoft - Менеджер по продукту. Занималась проектами по диджитализации Почты России.", 
    "knowledge": "планирование путешествий (ресурсы, билеты, итд), сериалы, логистика"
  }, 
  {
    "name": "Тодорович Срджан", 
    "timestamp": "01.03.2019 14:03:54", 
    "profiles": "Не хотим", 
    "photo": process.env.PUBLIC_URL + "/photos/todor.jpg",
    "occupation": "Работаю в банке, занимаюсь ресечем в сфере корпоративного упраления. Интересуюсь трейдингом, оценкой деривативов. ", 
    "knowledge": "Можно расспросить про экономику, финансы, банковские продукты и обучение на экономических факультетах. Знаю много про Сербию и малину. "
  }, 
  {
    "name": "Михаил Мещеряков", 
    "timestamp": "02.03.2019 15:00:39", 
    "profiles": "http://linkedin.com/in/mikhailmeshcheryakov ", 
    "photo": process.env.PUBLIC_URL + "/photos/mesher.jpg",
    "occupation": "В последние годы занимаюсь продажами программного обеспечения. Изначально промышленного для нефтегазовой отрасли, а сейчас ПО класса application performance management для всех индустрий - банки/ритейл/авиация/промышленность/e-commerce", 
    "knowledge": "Industrial internet of things,  big data, продажи ПО, автоматизация, цифровизация, digital transformation, application performance management Съемки с дрона, wildlife photography "
  }, 
  {
    "name": "Альфия Бабий", 
    "timestamp": "", 
    "profiles": "@helmeton", 
    "photo": "https://pp.userapi.com/c850536/v850536699/9b637/qevAudN7Q1Q.jpg", 
    "occupation": "Работала в Accenture и Redmadrobot. Анализ текстовых данных, компьютерная лингвистика, проектирование диалоговых систем - вот это все. Сейчас занимаюсь этим на фрилансе и чувствую себя очень комфортно. Хочу научить бота генеративно шутить и пытаюсь двигаться в эту сторону. Хочу сама научиться нормально шутить, но делаю для этого не так много. Вот написала материал про свой опыт полиаморных отношений и собираюсь выступить с ним в стендап-клабе. Приходите.", 
    "knowledge": "Опыт путешествия автостопом по Исландии в марте, психотерапия, медитации, кино, мозг и когнитивные искажения."
  }, 
  {
    "name": "Коликов Никита", 
    "timestamp": "", 
    "profiles": "@kolikovnikita", 
    "photo": process.env.PUBLIC_URL + "/photos/kolikov.jpg",
    "occupation": "Инвестиции, фондовый рынок США (IPO)", 
    "knowledge": "Спортивный досуг разного типа"
  }, 
  {
    "name": "Дарья Харламова", 
    "timestamp": "", 
    "profiles": "https://t.me/love_buh https://instagram.com/love_buh/", 
    "photo": process.env.PUBLIC_URL + "/photos/kharlamova.jpg",
    "occupation": "В сфере моих интересов сейчас развитие персонала и социальная психология. Думаю о переходе в эту область. Работаю в компании РосАгроМаркет: мы строим современные оптовые торговые центры для фермеров. Делала бизнес-модель, помогала привлекать инвестиции, сейчас налаживаю систему корп.управления и внутренние процессы.", 
    "knowledge": "Организую и рада компании: путешествия по центральной России, киновечеринки, тематические вечеринки - Профессиональные интересы: социальная психология, управление персоналом, особенности корп.управления в средних российских компаниях, логистика свежих продуктов Хобби: offline community management, TEDx в России, правильное питание, кулинария, танго"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="title">Пиплбук</div>
        <div className="toc">
            {people.map(row => <a href={"#" + row.name} class="toc__person">
                <img src={row.photo} className="photo photo--small" />
                <div class="name name--brief">{row.name.split(' ')[0]}</div>
            </a>)}
        </div>
        <div class="people">
        {people.map(row => <div class="person" id={row.name}>
          <Linkify>
          <div class="name name--full">{row.name}</div>
          <img class="photo photo--large" src={row.photo} />
          <div class="label">Чем занимаюсь</div>
          <div class="answer">{row.occupation.split(/\n+/).map(paragraph => <div class="answer-chunk">{paragraph}</div>)}</div>
          <div class="label">О чем могу рассказать</div>
          <div class="answer">{row.knowledge}</div>
          <div class="label">Контакты</div>
          <div class="answer">{row.profiles}</div>
          </Linkify>
          </div>)}
        </div>
      </div>
    );
  }
}

export default App;
