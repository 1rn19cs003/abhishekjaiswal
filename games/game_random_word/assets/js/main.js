const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let ranWords = "";
let sWord = ['java','adyatha','python','c++','simran-chaudhary','yashi-garg','aman','shagun','bhupendra','avnish-anand','suraj-chaudhary','kumar-shanu','c#','visual-basic','rashika','javascript', 'php', 'sql', 'assembly-language', 'groovy', 'react-js', 'swift', 'android', 'mysql', 'angular', 'react-native', 'html', 'css', 'bootstrap', 'mongodb'];

const creatNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWord.length);
    let newTempSwords = sWord[ranNum];
    return newTempSwords;
}

const scramblewords = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
        // console.log(temp);
        // console.log(i);
        // console.log(j);

    }
    return arr;
}




btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = creatNewWords();
        ranWords = scramblewords(newWords.split("")).join("");
        // console.log(ranWords.join(""));
        msg.innerHTML = `Guess the word: ${ranWords}`;
    }
    else {
        let tempWord = guess.value;
        if (tempWord === newWords) {
            play = false;
            msg.innerHTML = `Good Job . It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";

        }
        else {
            msg.innerHTML = `Oops . It is Incorrect ${ranWords}`;

        }
    }
})


