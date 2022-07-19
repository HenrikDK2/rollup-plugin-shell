console.log("It's working")

const HeadingElm = document.querySelector("h1");
const colorList = ["#EB2E00", "#60E640", "#6922FF"];
let colorIndex = 0;

setInterval(()=>{
    HeadingElm.style.color = colorList[colorIndex % colorList.length];
    colorIndex++
}, 1000)