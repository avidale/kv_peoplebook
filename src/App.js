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
