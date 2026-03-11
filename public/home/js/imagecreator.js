const allData = [
    {
    title: 'Renders',
    type: 'img',
    bodyText: 'A collection of my renders made in Blender, including hard-surface modeling, composition, shader work, and various experiments.',
    items: [
        {fileName: "AlpineStylized_tex", type: "video", size: "column2",
            fullView: { 
                fileName: "AlpineStylized_tex", title: "Alpine A310 Stylized", desc: "This is the cullmination of a long project. I had been recreating the previous Alpine A310 and finalized the stylized look I was going for.", 
                date: "15. August 2025", otherImages: [{file: "AlpineStylized_tex", type: 'webm'}, "Renault_Alpine_A310_StylizedV2", "Renault_Alpine_A310_Stylized"]
        },},
        {fileName: "CreationOfPino", type: "img", size: "column2",
            fullView: {
                fileName: "CreationOfPino", title: "Creation Of Pino", desc: "Just finnished Lies of P and felt like making something that represented Pino's style and grace.", 
                date: "10. August 2025", otherImages: ["CreationOfPino"] 
        },},
        {fileName: "AlpineA310_2", type: "img", size: "column2",
            fullView: {
                fileName: "AlpineA310_2", title: "Alpine A310", desc: "Final version of an Alpine A310 with decent topology. Learned alot from this project.", 
                date: "26. July 2025", otherImages: ["AlpineA310_2", "AlpineA310_1", "AlpineA310_3", "AlpineA310_1_wireframe"] 
        },},
        {fileName: "Metropolis1927", type: "img", size: "onexone",
            fullView: {
                fileName: "Metropolis1927", title: "Metropolis 1927", desc: "I was going through insteresting movie shots and stumbled apon Metropolis 1927 and wanted to try recreating the title card.", 
                date: "12. September 2024", otherImages: ["Metropolis1927", "Metropolis1927_wireframe"] 
        },},
        {fileName: "KimKitsuragi_2", type: "img", size: "row2",
            fullView: {
                fileName: "KimKitsuragi_2", title: "KimKitsuragi", desc: "This is my second attempt at what started out as a sculpting project. I modeled and textured the jacket and face of my favorite character from Disco Elysium.", 
                date: "17. August 2024", otherImages: ["KimKitsuragi_2"] 
        },},
        {fileName: "SanjiLighter_Lit", type: "img", size: "row2",
            fullView: {
                fileName: "SanjiLighter_Lit", title: "SanjiLighter", desc: "Recreated Sanji's iconic lighter from One Piece from reference images from the show.", 
                date: "31. July 2024", otherImages: ["SanjiLighter_Lit", "SanjiLighter", "SanjiLighter_closeup", "SanjiLighter_wireframe"] 
        },},
        {fileName: "BladerunnerPoolRoom", type: "img", size: "column2",
            fullView: {
                fileName: "BladerunnerPoolRoom", title: "Bladerunner Pool Room", desc: "Had fun playing with fake caustics recreating a scene from Blade Runner 2049", 
                date: "30. July 2024", otherImages: ["BladerunnerPoolRoom"] 
        },},
        {fileName: "BassGuitar", type: "img", size: "column2",
            fullView: {
                fileName: "BassGuitar", title: "Bass Guitar", desc: "Animation practice inspired by a scene from FLCL.", 
                date: "6. February 2024", otherImages: ["BassGuitar", "Guitar_Painterly"] 
        },},
        {fileName: "Speaker_01", type: "img", size: "column2",
            fullView: {
                fileName: "Speaker_01", title: "Speaker", desc: "Gave myself prompts of things to reimagine in a futuristic style.", 
                date: "17. January 2024", otherImages: ["Speaker_01", "Speaker_02"] 
        },},
        {fileName: "RibbonBackground_4k", type: "img", size: "column2",
            fullView: {
                fileName: "RibbonBackground_4k", title: "Ribbon Background", desc: "Tired of the default Windows 11 wallpapers, I created my own.", 
                date: "27. December 2023", otherImages: ["RibbonBackground_4k"] 
        },},
        {fileName: "Sci-Fi_Futurism_Art", type: "img", size: "row2",
            fullView: {
                fileName: "Sci-Fi_Futurism_Art", title: "Sci-Fi Futurism Art", desc: "", date: "", otherImages: ["Sci-Fi_Futurism_Art"] 
        },},
        {fileName: "PhoneLightStreaksASUS", type: "img", size: "column2",
            fullView: {
                fileName: "PhoneLightStreaksASUS", title: "Phone Light-streaks", desc: "", date: "", otherImages: ["PhoneLightStreaksASUS"] 
        },},
        {fileName: "Renault_Alpine_A310_StylizedV2", type: "img", size: "column2",
            fullView: {
                fileName: "Renault_Alpine_A310_StylizedV2", title: "Alpine A310 Stylized", desc: "", date: "", otherImages: ["Renault_Alpine_A310_StylizedV2", "Renault_Alpine_A310_Stylized", "Renault_Alpine_A310_03"] 
        },},
        {fileName: "Robots_BaW", type: "img", size: "column2", class: "pixelated",
            fullView: {
                fileName: "Robots_BaW", title: "Robots B&W", desc: "", date: "", otherImages: ["Robots_BaW"] 
        },},
        {fileName: "OppenheimerRender", type: "video", size: "column2",
            fullView: {
                fileName: "OppenheimerRender", title: "Oppenheimer Visuals", desc: "", date: "18. August 2023", otherImages: [{file: "OppenheimerRender", type: 'webm'}, "OppenheimerThumbnail02", "OppenheimerThumbnail01", "OppenheimerThumbnail04", "OppenheimerThumbnail03"] 
        },},
        {fileName: "Liminal_01COMPOSITE", type: "img", size: "column2",
            fullView: {
                fileName: "Liminal_01COMPOSITE", title: "Liminal", desc: "", date: "", otherImages: ["Liminal_01COMPOSITE"] 
        },},
        {fileName: "Pikuniku", type: "img", size: "column2",
            fullView: {
                fileName: "Pikuniku", title: "Pikuniku", desc: "", date: "", otherImages: ["Pikuniku"] 
        },},
        {fileName: "Pancakes_03", type: "img", size: "column2",
            fullView: {
                fileName: "Pancakes_03", title: "Pancakes", desc: "", date: "", otherImages: ["Pancakes_03"] 
        },},
        {fileName: "DRGWeapons", type: "img", size: "column2",
            fullView: {
                fileName: "DRGWeapons", title: "DRG Weapons", desc: "", date: "", otherImages: ["DRGWeapons"] 
        },},
        {fileName: "DesertScene_1", type: "img", size: "column2",
            fullView: {
                fileName: "DesertScene_1", title: "Desert Scene", desc: "", date: "", otherImages: ["DesertScene_1"] 
        },},
        {fileName: "BuildingsInFog_PAINTED-_Small_", type: "img", size: "column2",
            fullView: {
                fileName: "BuildingsInFog_PAINTED-_Small_", title: "Buildings in Fog", desc: "", date: "", otherImages: ["BuildingsInFog_PAINTED-_Small_"] 
        },},
        {fileName: "CasseteTape", type: "video", size: "onexone",
            fullView: {
                fileName: "CasseteTape", title: "Cassete Tape", desc: "", date: "", otherImages: [{file: "CasseteTape", type: 'webm'},] 
        },},
        {fileName: "Typewriter_2", type: "img", size: "onexone",
            fullView: {
                fileName: "Typewriter_2", title: "Typewriter", desc: "", date: "", otherImages: ["Typewriter_2"] 
        },},
        {fileName: "InsideJob", type: "video", size: "onexone",
            fullView: {
                fileName: "InsideJob", title: "Inside-Job", desc: "", date: "", otherImages: [{file: "InsideJob", type: 'webm'},] 
        },},
        {fileName: "LilRobotVideo", type: "video", size: "onexone",
            fullView: {
                fileName: "LilRobotVideo", title: "LilRobot", desc: "", date: "", otherImages: [{file: "LilRobotVideo", type: 'webm'},] 
        },},
        {fileName: "Triangle", type: "video", size: "onexone",
            fullView: {
                fileName: "Triangle", title: "Triangle", desc: "", date: "", otherImages: [{file: "Triangle", type: 'webm'}] 
        },},
        {fileName: "Alien_1", type: "img", size: "row2",
            fullView: {
                fileName: "Alien_1", title: "Alien", desc: "", date: "", otherImages: ["Alien_1"] 
        },},
        {fileName: "WavesCompressed", type: "video", size: "column2",
            fullView: {
                fileName: "WavesCompressed", title: "Waves", desc: "", date: "", otherImages: [{file: "Waves", type: 'webm'}] 
        },},
        {fileName: "CircuitPuzzleThing_02", type: "img", size: "onexone",
            fullView: {
                fileName: "CircuitPuzzleThing_02", title: "Circuit Puzzle", desc: "", date: "", otherImages: ["CircuitPuzzleThing_02"] 
        },},
        {fileName: "Astronomy", type: "img", size: "column2",
            fullView: {
                fileName: "Astronomy", title: "Astronomy", desc: "", date: "", otherImages: ["Astronomy"] 
        },},
        {fileName: "GoatSkull", type: "img", size: "onexone", class: "pixelated",
            fullView: {
                fileName: "GoatSkull", title: "Goat Skull", desc: "", date: "", otherImages: ["GoatSkull"] 
        },},
        {fileName: "ColosseumPixel_2", type: "img", size: "onexone", class: "pixelated",
            fullView: {
                fileName: "ColosseumPixel_2", title: "ColosseumPixel", desc: "", date: "", otherImages: ["ColosseumPixel_2"] 
        },},
        {fileName: "City_01.4", type: "img", size: "onexone", class: "pixelated",
            fullView: {
                fileName: "City_01.4", title: "City", desc: "", date: "", otherImages: ["City_01.4"] 
        },},
        {fileName: "City_02.1", type: "img", size: "onexone", class: "pixelated",
            fullView: {
                fileName: "City_02.1", title: "City", desc: "", date: "", otherImages: ["City_02.1"] 
        },},
        {fileName: "CultOfTheLamb", type: "img", size: "onexone",
            fullView: {
                fileName: "CultOfTheLamb", title: "Cult of the Lamb", desc: "", date: "", otherImages: ["CultOfTheLamb"] 
        },},
        {fileName: "FloatingIslands", type: "img", size: "onexone",
            fullView: {
                fileName: "FloatingIslands", title: "Floating Islands", desc: "", date: "", otherImages: ["FloatingIslands"] 
        },},
        {fileName: "Blueprint", type: "img", size: "onexone",
            fullView: {
                fileName: "Blueprint", title: "Blueprint", desc: "", date: "", otherImages: ["Blueprint"] 
        },},
        {fileName: "CatFlame_All", type: "img", size: "onexone",
            fullView: {
                fileName: "CatFlame_All", title: "Cat collection", desc: "", date: "18. October 2023", otherImages: ["CatFlame_All", "CatLavaLamp_Sketch", "CatFlame_Sketch", "CatPlanet"] 
        },},
        {fileName: "TreasureGlare", type: "img", size: "column2",
            fullView: {
                fileName: "TreasureGlare", title: "Treasure", desc: "", date: "", otherImages: ["TreasureGlare"] 
        },},
        {fileName: "bridgething", type: "img", size: "column2",
            fullView: {
                fileName: "bridgething", title: "Bridge", desc: "", date: "", otherImages: ["bridgething"] 
        },},
        {fileName: "DavidPaint2", type: "img", size: "row2",
            fullView: {
                fileName: "DavidPaint2", title: "David Paint", desc: "", date: "", otherImages: ["DavidPaint2"] 
        },},
        {fileName: "glasstest", type: "img", size: "column2",
            fullView: {
                fileName: "glasstest", title: "Glass test", desc: "", date: "", otherImages: ["glasstest"] 
        },},
        {fileName: "Ship_lines_crop", type: "img", size: "column2",
            fullView: {
                fileName: "Ship_lines_crop", title: "Ship lines", desc: "", date: "", otherImages: ["Ship_lines_crop"] 
        },},
        {fileName: "viking_scene_snow_cycles", type: "img", size: "column2",
            fullView: {
                fileName: "viking_scene_snow_cycles", title: "Viking scene(Snow)", desc: "", date: "", otherImages: ["viking_scene_snow_cycles"] 
        },},
    ]
    },
    {
        title: 'Geometry Nodes',
        type: 'img',
        bodyText: 'Geometry Nodes is a system in Blender for creating procedural geometry using node trees. All of these projects were built entirely with Geo-nodes.',
        items: [
            {fileName: "SweaterThreadsTop", type: "img", size: "onexone",
                fullView: {
                    fileName: "SweaterThreadsTop", title: "Sweater Threads Display", desc: `Geometry-nodes project where I created an array of weaving patterns and set them to display a image based pattern in addition to creating individual threads and twisting them into "yarn".`,
                    date: "23. november 2025", otherImages: ["SweaterThreadsTop", "SweaterThreadsCloseUp", "Sweater_Threads_Display_geonodes"]
            },},

            {fileName: "ZipperBounce", type: "video", size: "onexone",
                fullView: {
                    fileName: "ZipperBounce", title: "Zipper Bounce", desc: "", date: "19. November 2025", otherImages: [{ file: "ZipperBounce", type: 'webm' }, "ZipperBounce_wireframe", "ZipperBounce_geonodes",]
            },},

            {fileName: "LED", type: "img", size: "onexone",
                fullView: {
                    fileName: "LED", title: "LED", desc: "", date: "20. November 2025", otherImages: ["LED", "LED_wireframe", "LED_geonodes"]
            },},

            {fileName: "Resistor", type: "img", size: "onexone",
                fullView: {
                    fileName: "Resistor", title: "Resistor", desc: "", date: "11. November 2025", otherImages: ["Resistor", "Resistor_screenshot", "Resistor_geonodes"]
            },},

            {fileName: "Sunflower", type: "img", size: "onexone",
                fullView: {
                    fileName: "Sunflower", title: "Sunflower", desc: "", date: "4. November 2025", otherImages: ["Sunflower", "Sunflower_wireframe", "Sunflower_geonodes"]
            },},

            {fileName: "7Segment", type: "video", size: "onexone",
                fullView: {
                    fileName: "7Segment", title: "7 Segment", desc: "I had just leared about Boolean algebra and logic gates and I implemented that into making a 7 segment display in Blender Geometry-nodes.", date: "25. august 2025", otherImages: [{ file: "7Segment", type: 'webm' }, "7Segment_geonodes"]
            },},

            {fileName: "Mushroom_03", type: "img", size: "onexone",
                fullView: {
                    fileName: "Mushroom_03", title: "Mushroom", desc: "", date: "4. November 2024", otherImages: ["Mushroom_03"]
            },},

            {fileName: "SnapParticleSim", type: "video", size: "onexone",
                fullView: {
                    fileName: "SnapParticleSim", title: "Snap Particle Simulation", desc: "", date: "2. November 2024", otherImages: [{ file: "SnapParticleSim", type: 'webm' },]
            },},

            {fileName: "Cordyceps", type: "img", size: "onexone",
                fullView: {
                    fileName: "Cordyceps", title: "Cordyceps", desc: "", date: "16. February 2024", otherImages: ["Cordyceps"]
            },},

            {fileName: "FractalsDisplay", type: "video", size: "onexone",
                fullView: {
                    fileName: "FractalsDisplay", title: "Geometry-node Fractals", desc: "", date: "18. October 2023", otherImages: [{file: "FractalsDisplay", type: 'webm'}, "FractalsDisplay_geonodes"]
            },},

        ]
    },
    {
        title: 'Monogram',
        type: 'svg',
        bodyText: 'These are personal monograms I designed for a school project.',
        items: [
            { fileName: "Monogram_2", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_3", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_4", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_5", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_6", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_7", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_8", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_9", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_10", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_11", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_12", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_13", type: "svg", size: "", direction: "up", },
            { fileName: "Monogram_24", type: "svg", size: "", direction: "up", },
        ]
    },
    {
        title: 'Others',
        type: 'img',
        bodyText: 'Here are some of my other projects that don’t fit into the other categories. I modeled the EP-133 and OP-Field meshes from reference photos in Plasticity and rendered them in Blender.',
        items: [
            {fileName: "EP-133 K.O. II_All", type: "img", size: "fullWidth",
                fullView: { 
                    fileName: "EP-133 K.O. II_All", title: "EP-133 K.O. II", desc: "I modeled the EP-133 and OP-Field meshes from reference photos in Plasticity and rendered them in Blender.", 
                    date: "13. January 2024", otherImages: ["EP-133 K.O. II_Collection01", "EP-133 K.O. II_Collection03", "EP-133 K.O. II_Collection04", "EP-133 K.O. II_Collection05"] 
            },},
            {fileName: "OP-1_field_All", type: "img", size: "fullWidth",
                fullView: { 
                    fileName: "OP-1_field_All", title: "OP-1 field", desc: "I modeled the EP-133 and OP-Field meshes from reference photos in Plasticity and rendered them in Blender.", 
                    date: "28. December 2023", otherImages: ["OP-1_field_Collection04", "OP-1_field_Collection03", "OP-1_field_Collection02", "OP-1_field_Collection01"] 
            },},
            { fileName: "FinalMockupsCollage", type: "img", size: "column2", direction: "up", },
            { fileName: "Yeah01", type: "img", size: "onexone", direction: "up", },
            { fileName: "Dunes", type: "img", size: "onexone", direction: "up", },
            { fileName: "Neon_Nikolai", type: "img", size: "onexone", direction: "up", },
            { fileName: "EyesStuff", type: "img", size: "onexone", direction: "up", },
            { fileName: "cube", type: "gif", size: "onexone", direction: "up", },
            { fileName: "BEEFREE", type: "img", size: "onexone", direction: "up", },
        ]
    },

]

const filePath = {
    thumbnail: "/home/img/GraphicsDesign/ThumbnailRes/", 
    fullRes: "/home/img/GraphicsDesign/FullRes/"
}

const body = document.getElementById('mainbodyforcards')
const tabcont = document.getElementById('tab-cont')
allData.forEach(element => {
    const tabbutton = createEl('button', 'tab-button')
    tabbutton.append(document.createTextNode(element.title))
    tabcont.append(tabbutton)
})

const createVideoElement = (PrimarySrc, BackupSrc, className = "") => {
    const video = createEl("video", className);
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controlsList = "nofullscreen nodownload noremoteplayback noplaybackrate";

    const webm = document.createElement("source");
    webm.src = `${PrimarySrc}.webm`;
    webm.type = "video/webm";
    webm.onerror = () => {
        webm.onerror = null;
        webm.src = `${BackupSrc}.webm`;
        video.load();
    };

    const mp4 = document.createElement("source");
    mp4.src = `${PrimarySrc}.mp4`;
    mp4.type = "video/mp4";
    mp4.onerror = () => {
        mp4.onerror = null;
        mp4.src = `${BackupSrc}.mp4`;
        video.load();
    };

    video.append(webm, mp4);
    return video;
};

const addImageGroups = (index) => {
    const element = allData[index]
    const title = createEl('div', "title")
    title.append(document.createTextNode(element.title))
    body.append(title)

    if(element.bodyText){
        const bodyText = createEl('div', "bodyText")
        bodyText.append(document.createTextNode(element.bodyText))
        body.append(bodyText)
    }
    
    let cont
    switch (element.type) {
        case 'svg':
            cont = createEl('div', 'svg-cont')
            break;
        case 'img':
            cont = createEl('div', 'img-cont')
            break;
        default:
            console.log('You done messed up: Type')
            break;
    }
    body.append(cont)

    element.items.forEach(element => {
        const anim = createEl('div', 'anim')
        if(element?.fullView?.otherImages?.length > 1){
            const multipleImagesTag = createEl('div', "multipleImagesTag");
            multipleImagesTag.innerText = "⮻";
            anim.append(multipleImagesTag)
        }
        
        if(element.size){anim.classList.add(element.size)}
        if(element.class){anim.classList.add(element.class)}

        const full = filePath.fullRes + element.fileName
        const thumb = filePath.thumbnail + element.fileName

        let image
        switch (element.type) {
            case 'svg':
                anim.innerHTML = `<img src="${thumb}.svg" onload="SVGInject(this,{makeIdsUnique:false,useCache:false})">`
                break;
            case 'img':
                image = createImageElement(thumb + '.png', full + '.png')
                anim.append(image)
                break;
            case 'gif':
                image = createImageElement(thumb + '.gif', full + '.gif')
                anim.append(image)
                break;
            case 'video':
                anim.append(createVideoElement(thumb, full))
                break;
            default:
                break;
        }
        cont.append(anim)
        let direction = "left";
        if (anim.getBoundingClientRect().left > document.body.clientWidth/2){
            direction = "right";
        }
        if (anim.getBoundingClientRect().left < document.body.clientWidth/2 && anim.getBoundingClientRect().right > document.body.clientWidth/2){
            direction = "up";
        }
        anim.classList.add('anim-' + direction)
        if (anim.getBoundingClientRect().left > document.body.clientWidth/1.9 || anim.getBoundingClientRect().right < document.body.clientWidth/2.1){
            anim.classList.add('anim-delay')
        }
        anim.addEventListener("click", () => {
            openFullRes(element)
        })      
    })

}

const openFullRes = (iO) => {   
    const fullView = iO.fullView
    const fullviewBody = createEl('div', 'modalBody')
    const descElem = createEl('div', 'modalDesc')

    const descDate = createEl('p','descDate');
    descDate.append(fullView.date);

    const descText = createEl('p','descText');
    descText.append(fullView.desc);
    
    descElem.append(descDate, descText)
    
    fullviewBody.append(descElem, modalCarousel(fullView.otherImages))    
    openModal(fullView.title,fullviewBody, null, null, true)
}

const modalCarousel = (imgArr) => {
    const leftBut = createEl('button', ("carouselButton left"));
    leftBut.innerText = 'ᐊ';

    const rightBut = createEl('button', ("carouselButton right"));
    rightBut.innerText = 'ᐅ';

    const imgCont = createEl('div', 'modalCarouselImgCont')
    imgArr.forEach(e => {
        const imageDiv = createEl('div', 'imageDivMod');
        
        if(!e.type){           
            const full = `${filePath.fullRes}${e}.png`;
            const thumb = `${filePath.thumbnail}${e}.png`;

            imageDiv.append(createImageElement(full, thumb, "modalImage"));
        }        
        if (e.type === 'webm') {
            const full = filePath.fullRes + e.file
            const thumb = filePath.thumbnail + e.file

            imageDiv.append(createVideoElement(full, thumb));
        }
        else if (e.type === 'gif') {
            const full = `${filePath.fullRes}${e.file}.gif`;
            const thumb = `${filePath.thumbnail}${e.file}.gif`;

            imageDiv.append(createImageElement(full, thumb, "modalImage"));
        }

        imgCont.append(imageDiv);
    });
    
    let index = 0;
    const clampIndex = (i) => {
        const max = imgArr.length - 1;
        return Math.max(0, Math.min(max, i));
    };
    const updateButtons = () => {
        leftBut.disabled = index === 0;
        rightBut.disabled = index === imgArr.length - 1;
    };

    const movePos = (n) => {
        index = clampIndex(n);
        imgCont.style.transform = `translateX(-${index * 100}%)`;

        updateButtons();
    };

    imgCont.style.transition = "transform 250ms ease";
    imgCont.style.willChange = "transform";

    leftBut.addEventListener("click", () => movePos(index - 1));
    rightBut.addEventListener("click", () => movePos(index + 1));

    const onKeyDown = (ev) => {
        if (!document.body.contains(carousel)) {
            window.removeEventListener("keydown", onKeyDown);
            return;
        }
        if (ev.key === "ArrowLeft") movePos(index - 1);
        if (ev.key === "ArrowRight") movePos(index + 1);
    }

    movePos(0);

    const carousel = createEl('div', "modalCarousel");
    carousel.append(imgCont, leftBut, rightBut)

    return carousel
}

const buttons = document.querySelectorAll(".tab-button")
let latestPage = localStorage.getItem('graphicsdesignTab') ?? 0

const buttonClick = (index, target) => { 
    buttons.forEach(element =>{
        element.classList.remove('active')
    })
    target.classList.add('active')
    if(latestPage != index){
        while(body.hasChildNodes()){
        body.removeChild(body.firstChild)
        };
        addImageGroups(index) 
    }
    latestPage = index
    localStorage.setItem('graphicsdesignTab', index)
}

buttons.forEach((element, index) => {
    element.addEventListener('click', ()  => {
        buttonClick(index, event.target)
        animate()
    })
})
buttons[latestPage].classList.add('active')
