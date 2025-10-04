/*
===========================
UNIT CONVERTER PROJECT (Scrimba Solo Project)
===========================

Approach:
- This project converts between meters/feet, liters/gallons, and kilos/pounds.
- I chose the **explicit method** (without a for loop) so that I could fully control
  each conversion and clearly see how values move from input → calculation → DOM.
- Each conversion result is sent to its own <p> element in the HTML.

Why not a for loop?
- A for loop works well if all results go into a single container.
- But since I have 3 separate <p> tags (length, volume, mass), I’d either need
  an array of DOM nodes or to map indexes, which is more complex than I’ve learned so far.
- For now, the explicit method keeps it **clear, simple, and easy to debug**.

Future Note:
- See the commented-out code at the bottom for a loop-based version.
- Later, when loops + arrays feel more natural, I can refactor to use them.
- That would make the code shorter and easier to scale if I add more conversions.

Key Lesson:
- Use the simplest approach with the tools I know.
- Build confidence first, then refactor later when ready.
*/


const inputEL = document.getElementById("input-el");
const btnEL = document.getElementById("convert-btn-el");
const lengthEL = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");


btnEL.addEventListener("click", function(){
    const inputValue = inputEL.value;
    const numberValue = Number(inputValue);

    if (isNaN(numberValue)) {
        lengthEL.textContent = "Please enter valid number";
        return
    }

    const mToF = (numberValue * 3.281).toFixed(3);
    const fToM = (numberValue / 3.281).toFixed(3);

    lengthEL.innerHTML = `
        <strong>${numberValue} m</strong> = ${mToF} <strong>ft</strong><br>
        <strong>${numberValue} ft</strong> = ${fToM} <strong>m</strong>
    `;

    const lToG = (numberValue * 0.264).toFixed(3);
    const gToL = (numberValue / 0.264).toFixed(3);

    volumeEl.innerHTML = `
        <strong>${numberValue} L</strong> = ${lToG} <strong>Gal</strong> <br>
        <strong>${numberValue} Gal</strong> = ${gToL} <strong>L</strong>
    `;

    const kToP = (numberValue * 2.204).toFixed(3);
    const pToK = (numberValue / 2.204).toFixed(3);

    massEl.innerHTML = `
        <strong>${numberValue} kg</strong> = ${kToP} <strong>lbs</strong> <br>
        <strong>${numberValue} lbs</strong> = ${pToK} <strong>kg</strong>
    `;

})






/*

     ////THE ARRAY USED////

        const conversionArray = [
                { from: "meters", to: "feet", factor: 3.281 },
                { from: "liters", to: "gallons", factor: 0.264 },
                { from: "kilos",  to: "pounds", factor: 2.204 }
        ]


     ////THIS GOES INSIDE THE BTN FUNCTION////

         for (let i = 0; i < conversionArray.length; i++){

         let forward = (numberValue * conversionArray[i].factor).toFixed(3);
         let reverse = (numberValue / conversionArray[i].factor).toFixed(3);

         conversion = `
         ${numberValue} ${conversionArray[i].from} = ${forward} ${conversionArray[i].to} |
         ${numberValue} ${conversionArray[i].to} = ${reverse} ${conversionArray[i].from}
         `;

                    console.log(conversion)
    };

    */
