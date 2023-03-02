const HTMLprojects = { 
    title: 'HTML Projects', 
    group: 'HTMLprojects',
    cards: [
        { name: 'Notflix', image: 'NotflixThumbnail.png', link: 'notflix', datecreated: '04.11.23', tags: ['JS', 'API'],},
        { name: 'Weather App', image: 'WeatherAppThumbnail.png', link: 'weather', datecreated: '29.11.22', tags: ['JS', 'API'],},
        { name: 'Julekalander', image: 'JulekalanderThumbnail.png', link: 'julekalander', datecreated: '06.12.22', tags: ['JS', 'SCHOOL'],},
        { name: 'Product Site', image: 'ProductSiteThumbnail.png', link: 'productsite', datecreated: '26.11.22', tags: ['JS']},
        { name: 'Kino Site', image: 'KinoThumbnail.png', link: 'kinoprojekt/kinohome', datecreated: '20.10.22', tags: ['HTML', 'CSS', 'SCHOOL'],},
        { name: 'Chess App', image: 'ChessThumbnail.png', link: 'chessjs', datecreated: '07.02.23', tags: ['JS', 'LIBRARY'],},
    ]
}


const HTMLexamples = { 
    title: 'HTML Examples', 
    group: 'HTMLexamples',
    cards: [
        { name: 'Example Parrallax', image: 'Practice1.png', link: 'exampleparallax', datecreated: '25.11.22', tags: ['JS', 'EXAMPLE'],},
        { name: 'Radial Array', image: 'RadialArray.png', link: 'radialarray', datecreated: '25.11.22', tags: ['JS', 'EXAMPLE'],},
        { name: 'Kalkulator', image: 'kalkulator.png', link: 'kalkulator', datecreated: '15.01.23', tags: ['JS', 'LIBRARY', 'SCHOOL'],},
        { name: 'Sparing', image: 'Sparing.png', link: 'sparing', datecreated: '20.12.22', tags: ['JS', 'LIBRARY', 'SCHOOL'],},
        { name: 'Quiz', image: 'quiz.png', link: 'quiz', datecreated: '10.01.23', tags: ['JS', 'SCHOOL'],},
        { name: 'Animation Test', image: 'animationtest.png', link: 'animationtest', datecreated: '19.01.23', tags: ['JS', 'LIBRARY'],},
        { name: 'Array Oppgave', image: 'Array_Oppgave.png', link: 'arrayoppgave', datecreated: '24.01.23', tags: ['JS', 'SCHOOL'],},
        { name: 'Carousel', image: 'Carousel.png', link: 'carousel', datecreated: '27.01.23', tags: ['JS', 'TEST'],},
        { name: 'Blocks', image: 'blocks.png', link: 'blocks', datecreated: '01.02.23', tags: ['JS', 'TEST'],},
        { name: 'Text Effect', image: 'TextEffect.png', link: 'texteffect', datecreated: '21.02.23', tags: ['JS', 'EXAMPLE']},
    ]
}

let mainbodyforcards = document.getElementById('mainbodyforcards')
const createCards = (cardgroup) => {
    const title = document.createElement('div')
    title.classList.add('title')
    title.innerText = cardgroup.title
    mainbodyforcards.appendChild(title)

    const cardcont = document.createElement('div')
    cardcont.classList.add('card-cont')
    cardcont.setAttribute('id', 'card-cont')
    mainbodyforcards.appendChild(cardcont)

    cardgroup.cards.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('card')
        const link = document.createElement('a')
        link.setAttribute('href', '/' + cardgroup.group + '/' + element.link + '.html')
        link.setAttribute('target', '_blank')
        const image = document.createElement('img')
        image.classList.add('cardimg')
        image.setAttribute('src', '/home/img/' + element.image)
        const tagsCont = document.createElement('div')
        tagsCont.classList.add('tags-cont') 
        const cardtitle = document.createElement('div')
        cardtitle.classList.add('cardtitle')
        cardtitle.appendChild(document.createTextNode(element.name))
        const carddate = document.createElement('div')
        carddate.classList.add('carddate')
        carddate.appendChild(document.createTextNode(element.datecreated))
        element.tags.forEach(x => {
            const tag = document.createElement('div')
            tag.classList.add('tag')
            let svg
            switch(x){
                case 'JS':
                case 'HTML':
                case 'CSS':
                    svg = document.createElement('img')
                    svg.setAttribute('onload', 'SVGInject(this,{makeIdsUnique:false,useCache:false})')
                    tag.appendChild(svg)
                    switch(x){
                        case 'JS':
                            svg.setAttribute('src', '/home/img/logo-javascript.svg')
                            break
                        case 'HTML':
                            svg.setAttribute('src', '/home/img/logo-html5.svg')
                            break
                        case 'CSS':
                            svg.setAttribute('src', '/home/img/logo-css3.svg')
                            break
                    }
                    break
                default: 
                    tag.classList.add('tag-non')
                    tag.appendChild(document.createTextNode(x))
            }
            tagsCont.appendChild(tag)
        });
        if(element.class){
        element.class.forEach(x =>{
            card.classList.add(x)
        })}
        link.appendChild(image)
        card.appendChild(link)
        card.appendChild(cardtitle)
        card.appendChild(tagsCont)
        card.appendChild(carddate)
        cardcont.appendChild(card)
    });
}