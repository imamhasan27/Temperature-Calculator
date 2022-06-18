let celsius = document.querySelector('#Celsius');
let fahrenheit = document.querySelector('#Fahrenheit');
let kelvin = document.querySelector('#Kelvin');
let button = document.querySelector('#button');
let weather_image = document.querySelector('#img')


const conditionImage = {
    superCold: 'https://images.unsplash.com/photo-1549472579-e133f59d8b23?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    extraCold: "https://images.unsplash.com/photo-1551701113-60eec9564876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1323&q=80",
    cold: "https://images.unsplash.com/photo-1593435713463-e8bf5bea9786?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
    normalCold: 'https://images.unsplash.com/photo-1603739421258-4aa79ad860df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1383&q=80',
    normal: "https://images.unsplash.com/photo-1557764459-ec0f03edcfca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
    sunny: "https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    desert: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    muri: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    lava: "https://images.unsplash.com/photo-1554232682-b9ef9c92f8de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
}

let lastEdit = 'celcius'

const updateLastEdit = () => {
    celsius.addEventListener('keyup', (e) => {
        lastEdit = 'celcius'
    })

    fahrenheit.addEventListener('keyup', (e) => {
        lastEdit = 'fahrenheit'
    })

    kelvin.addEventListener('keyup', (e) => {
        lastEdit = 'kelvin'
    })
}
updateLastEdit()

const updateImage = (temp) => {
    if (temp < -10) {
        weather_image.setAttribute('src', conditionImage.superCold)
    } else if (temp >= -10 && temp <= 0) {
        weather_image.setAttribute('src', conditionImage.extraCold)
    } else if (temp > -10 && temp <= 0) {
        weather_image.setAttribute('src', conditionImage.cold)
    } else if (temp > 0 && temp <= 15) {
        weather_image.setAttribute('src', conditionImage.normalCold)
    } else if (temp > 15 && temp <= 25) {
        weather_image.setAttribute('src', conditionImage.normal)
    } else if (temp > 25 && temp <= 35) {
        weather_image.setAttribute('src', conditionImage.sunny)
    } else if (temp > 35 && temp < 1000) {
        weather_image.setAttribute('src', conditionImage.desert)
    } else if (temp >= 1000) {
        weather_image.setAttribute('src', conditionImage.lava)
    }
};

const convert = (lastEdited) => {
    if (lastEdited === 'celcius') {
        const fVlue = (parseFloat(celsius.value) * 9 / 5) + 32
        const kVlue = parseFloat(celsius.value) + 273

        fahrenheit.value = fVlue
        kelvin.value = kVlue

    } else if (lastEdited === 'fahrenheit') {
        const cVlue = (parseFloat(fahrenheit.value) - 32) * 5 / 9
        const kVlue = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273

        celsius.value = cVlue
        kelvin.value = kVlue
    } else if (lastEdited === 'kelvin') {
        const cVlue = parseFloat(kelvin.value) - 273
        const fVlue = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32

        celsius.value = cVlue
        fahrenheit.value = fVlue
    }
};

button.addEventListener('click', () => {
    convert(lastEdit)
    let temp = 0
    if (lastEdit === 'celcius') {
        temp = celsius.value
    } else if (lastEdit === 'fahrenheit') {
        temp = (parseFloat(fahrenheit.value) - 32) * 5 / 9
    } else if (lastEdit === 'kelvin') {
        temp = parseFloat(kelvin.value) - 273
    }
    updateImage(temp)
});

// button.addEventListener('click',() =>{
//     tmpCl(fucTemp);

//     let temp = 0
//     if (fucTemp === 'celcius') {
//         temp = celcius.value;
//     } else if (fucTemp === 'fahrenheit') {
//         temp = parseFloat((fahrenheit.value - 32)) * 5 / 9;
//     } else if (fucTemp === 'kelvin') {
//         temp = parseFloat(kelvin.value) - 273.15;
//     }
//     updateImage(temp);

// });

// let image = {
//     extraCold: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     cold: "https://images.unsplash.com/photo-1484991122354-76f3546aefe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//     normal: "https://images.unsplash.com/photo-1500646023265-d32fe230bb88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//     suny: "https://images.unsplash.com/photo-1611406686532-0df7e54ea334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//     hot: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
// }


// var fucTemp = '';
// (function () {
//     celsius.addEventListener('keyup', function (e) {
//         fucTemp = 'celsius'
//     });
//     fahrenheit.addEventListener('keyup', function (e) {
//         fucTemp = 'fahrenheit'
//     });
//     kelvin.addEventListener('keyup', function (e) {
//         fucTemp = 'kelvin'
//     });
// })();

// const updateImage = (dataTm) => {
//     if (dataTm = 10) {
//         wather_img.setAttribute("src", image.extraCold)

//     } else if (dataTm =20) {
//         wather_img.setAttribute("src", image.cold)

//     } else if (dataTm =30) {
//         wather_img.setAttribute("src", image.normal)

//     } else if (dataTm =40) {
//         wather_img.setAttribute("src", image.suny)

//     } else if (dataTm =50) {
//         wather_img.setAttribute("src", image.hot)

//     }

// };

// function tmpCl(x) {
//     if (x === 'celsius') {
//         let fvlue = parseFloat((celsius.value * 9 / 5)) + 32;
//         let kvlue = parseFloat((celsius.value)) + 273.15;
//         fahrenheit.value = fvlue;
//         kelvin.value = kvlue
//     } else if (x === 'fahrenheit') {
//         let cvlue = parseFloat((fahrenheit.value - 32)) * 5 / 9;
//         let kvlue = parseFloat((fahrenheit.value - 32)) * 5 / 9 + 273.15;
//         celsius.value = cvlue
//         kelvin.value = kvlue
//     } else if (x === 'kelvin') {
//         let cvlue = parseFloat(kelvin.value) - 273.15;
//         let fvlue = parseFloat((kelvin.value - 273.15)) * 9 / 5 + 32;
//         celsius.value = cvlue;
//         fahrenheit.value = fvlue;
//     }
// };


