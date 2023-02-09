import React, { ReactElement, useState } from 'react';
import './styles.css' 
import BrokenGlass from './../../images/brokenGlass.png'
import FrameImage from './../../images/frame.png'

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}
export interface componentProps {
    portrait: boolean
}

function Ticker(props: componentProps): ReactElement {
    const [joke, setJoke] = useState(jokes[getRandomInt(8)]);
    let getNewJoke = (): void => {
        let newJoke = jokes[getRandomInt(9)]
        if (newJoke !== joke) return setJoke(jokes[getRandomInt(9)])
        else getNewJoke()
    }
    React.useEffect(() => {
        let interval = setInterval(() => {
            console.log('new joke')
            getNewJoke()
        }, 40000)
        return () => {
            console.log('clear interval')
            clearInterval(interval);
        };
    }, []);
    
    let rootVars = document.documentElement
    if (props.portrait) {
        rootVars && rootVars.style && rootVars.style.setProperty('--height-of-ticket', '10vmin');
        rootVars && rootVars.style && rootVars.style.setProperty('--height-of-glass-ticket', '6vmin');
        rootVars && rootVars.style && rootVars.style.setProperty('--height-from-bottom-ticket', '2.5vmin');
        rootVars && rootVars.style && rootVars.style.setProperty('--height-of-text-ticket', '4vmin');
        rootVars && rootVars.style && rootVars.style.setProperty('--height-of-text-block-ticket', '5vmin');
        
        
    }
    else {
        rootVars && rootVars.style && rootVars.style.setProperty('--height-of-ticket', '8vmin');
        rootVars && rootVars.style && rootVars.style.setProperty('--height-of-glass-ticket', '4.5vmin');
        rootVars && rootVars.style && rootVars.style.setProperty('--height-from-bottom-ticket', '2vmin');
        rootVars && rootVars.style && rootVars.style.setProperty('--height-of-text-ticket', '3vmin');
        rootVars && rootVars.style && rootVars.style.setProperty('--height-of-text-block-ticket', '4vmin');
    }
    return (
        <div className="running-text-container">
            <img src={FrameImage} className='frame' alt="sticker"/>
            <img src={BrokenGlass} alt='glass' className='broken-glass'/>
            <div className="running-text-words"> {joke} </div>
            <div className="running-text-cover"></div>
        </div>
    );
};

export default Ticker;



const jokes: string[] = [
    "Встречаются двое сталкеров, ну и один говорит: — На днях к Долгу заходил… — Ну и? — Что и? И остался должен. Ха. А потом зашел к Свободе… — Ну и что? — И стал свободен!",
    //"Сталкер пришел к доктору и говорит: — Доктор, я совсем не могу спать… Мне снится, будто я заперт в саркофаге… с кучей монстров, и они медленно разрывают меня на кусочки. — Это Вас, уважаемый, контролёр предупреждает. Рецепт мой такой: в следующий раз пойдете вглубь зоны, обязательно бутылку ему проставьте. А то, неровен час, сон в явь превратится. — Ну, спасибо Вам большое, доктор.  — Да не за что! — говорит контролёр, — это тебе за доктора спасибо. Мелочь, а приятно…",
    //"Заблудился как-то долговец и кричит: — Люди, отзовитесь, кто-нибудь! Аууу! Тут его кто то догоняет и… хлоп! сзади по рюкзаку. Ну он оборачивается, а там стоит кровосос. Грустный такой. И хлюпает ему: — Чего орёшь, а? У долговца уже полные штаны ежиков… но он все-таки отвечает — Я того, запплутал. Кричу, вот может кто-нибудь услышит? Кровосос помолчал, помолчал и говорит ему: — Ну я вот услышал. И чего теперь делать будем?",
    "Бродит, говорят, по зоне ходячая аномалия — непьющий и некурящий сталкер. Приманивается на запах молочка или манной каши. Способ дистанционного обнаружения — на расстоянии 200 метров от объекта счетчик Гейгера зашкаливает.",
    //"У блок-поста прихватили новичка-сталкера и давай пытать: — С какой целью вы пытались проникнуть на территорию Зоны, имея при себе незарегистрированное охотничье ружье и патроны к нему. А тот… похмельный… голова как бочка. Короче, ну задолбало все. Отвечает: — Пьяный да. Пьяный! Да если б я трезвый был… Я бы за пять километров вас, уроды, обошел бы.",
    "Встречаются двое сталкеров: — Слышь, а ты про Васю, ну того, который еще в детстве хотел лётчиком стать, знаешь? — А че с ним? — Да он вчера в трамплин попал! — Опа! — Угу… Сбылась, можно сказать, у человека заветная мечта. Полетел!",
    "Сидят два сталкера на берегу озера. Один другому говорит: — Насчет радиации я тебе чего скажу. Гонят как не знаю кто! Я тут уже лет пять шарюсь безвылазно. Изменений никаких не заметил! Сам как думаешь? — Да фигня однозначно!. Хотя… С другой стороны, чешуя-то в последнее время чешется все чаще.",
    "Значит, поцеловались, конкретно, в Зоне две тачилы. Из одной сталкеры вывалили, из другой… Короче, пошли тут терки, разборки, махалово конкретное. А контролер на нычке сидит и лыбу давит: — Оооо, зашибись. Ща поляна накроется — не стыдно и братанов, чисто, на хату позвать.",
    "Один свободовец говорит другому: — Знаешь… Я больше никогда-никогда в жизни не буду есть грибы! — Это почему же? — Да я им вчера обещал…",
    "Сидят два свободовца. Покурили. Один другому: — Такую тему слышал… Трава в два раза жизнь уменьшает! — Вот тебе сколько лет? — Ну. Двадцать пять… — Ну во! А без травы — уже б полсотни было!",
    "Зона. Лес. Поляна. На пороге сторожки сидит кровосос. Из дома выбегает маленький кровососик. И к папе, тормошит его: — Паап, а, пап! Ну покажи сталкера! Тот зашел в сторожку. Выходит, на каждой руке по черепу. И как в кукольном театре. Левый череп тонко: — Семеныч, как думаешь. Тут кровососы есть? Правый басом: — Ну ты даешь, Петруха… Какие тут на фиг кровососы",
    "Блин, так не смешно же",
]