const header = document.getElementById("header")
const headericon = document.getElementById("headericon")
const compass = document.getElementById("compass")
const settings = document.getElementById("settings")
const notifs = document.getElementById("notifs")
const mainpage = document.getElementById("mainpage")
const calendar = document.getElementById("calendar")
const maincont = document.getElementById("maincont")

const removeInner = (element) => {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

const compassrotate = (deg, fov) => {
    removeInner(compass);

    const startBracket = document.createElement('span');
    startBracket.textContent = "[";
    compass.appendChild(startBracket);

    const text = "W · · | · · N · · | · · E · · | · · S · · | · · W";
    const chars = text.split(' ');

    const displayLength = fov * 2 + 1;
    const totalLength = chars.length;

    const pos = Math.floor((totalLength * (deg / 360)) % totalLength);

    let rotatedChars = chars.slice(pos).concat(chars.slice(0, pos));

    if (displayLength > rotatedChars.length) {
        rotatedChars = rotatedChars.concat(rotatedChars);
    }

    rotatedChars = rotatedChars.slice(0, displayLength);

    rotatedChars.unshift('·');
    rotatedChars.push('·');

    rotatedChars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        compass.appendChild(span);
    });

    const endBracket = document.createElement('span');
    endBracket.textContent = "]";
    compass.appendChild(endBracket);
}
compassrotate(0, 6)

// window.addEventListener("devicemotion", compassrotate(event.rotationRate.alpha, 6), true);

const events = [
    {
      "title": "Potluck Dinner",
      "day": "05",
      "date": "Tuesday, November 5th",
      "location": "Willow Park Community Center",
      "description": "Bring your favorite dish to share and enjoy an evening of food, fun, and conversation with neighbors."
    },
    {
      "title": "Photography Walk",
      "day": "07",
      "date": "Thursday, November 7th",
      "location": "Pine Ridge Nature Reserve",
      "description": "Join fellow photography enthusiasts for a guided walk through scenic trails. Bring your camera!"
    },
    {
      "title": "Art Exhibit Opening",
      "day": "11",
      "date": "Monday, November 11th",
      "location": "Downtown Art Gallery",
      "description": "Attend the opening night of a local artist's exhibit showcasing landscape paintings and mixed media."
    },
    {
      "title": "Book Club",
      "day": "14",
      "date": "Thursday, November 14th",
      "location": "Anna's Café",
      "description": "Discuss themes and characters over coffee. New members are welcome!"
    },
    {
      "title": "Gardening Workshop",
      "day": "16",
      "date": "Saturday, November 16th",
      "location": "City Botanical Garden",
      "description": "Learn tips for starting your spring garden. Tools and materials provided for hands-on practice."
    },
    {
      "title": "Stargazing Night",
      "day": "20",
      "date": "Wednesday, November 20th",
      "location": "Northview Park Hilltop",
      "description": "Bring a blanket and telescope for a night under the stars with amateur astronomers."
    }
  ]
 


const calendarCalc = () => {
    const date = new Date();
    let nowDate = date.getDate();

    const dateElem = document.createElement("div");
    dateElem.classList.add("date");
    calendar.append(dateElem);
    dateElem.innerHTML = '<img src="/HTMLprojects/cyberinterface/img/square.svg" onload="SVGInject(this,{makeIdsUnique:false,useCache:false})">'
    const numElem = document.createElement("div");
    numElem.append(nowDate);
    dateElem.append(numElem);

    let nextEvent = events.find(x => x.day > nowDate);

    const eventElem = document.createElement("div");
    eventElem.classList.add("event");
    eventElem.append(nextEvent.title);
    calendar.append(eventElem);

    const eventdate = document.createElement("div");
    eventdate.classList.add("eventday");
    eventdate.append(nextEvent.date);
    calendar.append(eventdate);
};

calendarCalc();