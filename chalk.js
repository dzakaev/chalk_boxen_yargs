 const chalk = require('chalk')
 const boxen = require('boxen')

const under = chalk.bgGrey.yellow.bold

const box = boxen('Hello World',{borderColor: 'green',borderStyle: 'round'})


const yargs = require('yargs')

const argv = yargs(process.argv).argv

if (argv.login === 'admin' && argv.password === 'qwer') {
    console.log(chalk.green(boxen('вы авторизованы',{borderColor:"green"})))
} else {
    console.log(chalk.red(boxen('ошибка авторизации',{borderColor:"red"})))
}

function generateSongText(num) {
    num = argv.number
    for (let i = num; i >= 1; i--){
        if (i > 5  && i <= 20) {
            console.log(boxen(`${i} бутылок пива на стене, ${i} бутылок  пива!
       Возьму одну, пусти по кругу, ${i - 1} бутылок пива на стене`, {borderColor: "grey"}))
        }  else if ( i == 5 ){
            console.log(boxen(`${i} бутылок пива на стене, ${i} бутылок  пива!
            Возьму одну, пусти по кругу, ${i - 1} бутылки пива на стене`,{borderColor: "yellow"}))
        }
        else if (i % 10 === 3 || i % 10 === 4) {
            console.log(boxen(`${i} бутылки пива на стене, ${i} бутылки  пива!
            Возьму одну, пусти по кругу, ${i - 1} бутылки пива на стене`, {borderColor:"red"}))

        } else if (i % 10 === 2) {
            console.log(boxen(`${i} бутылки пива на стене, ${i} бутылки  пива! 
            Возьму одну, пусти по кругу, ${i - 1} бутылка пива на стене`, {borderColor: "white"}))

        }else if (i % 10 === 1) {
            console.log(boxen(`${i} бутылка пива на стене, ${i} бутылка пива!
            Возьму одну, пусти по кругу, ${i - 1} бутылок пива на стене`, {borderColor: "green"}))
        } else {
            console.log(boxen(`${i} бутылок пива на стене, ${i} бутылок пива!
            Возьму одну, пусти по кругу, ${i - 1} бутылок пива на стене`,{borderColor: "blue"}))
        }
    }
}
generateSongText(99)