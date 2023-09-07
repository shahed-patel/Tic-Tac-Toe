console.log('welcome to tic tac toe')

document.addEventListener('DOMContentLoaded', function () {

    let player = 'X';
    let condition = 0;

    //TOGGLE OF PLAYER
    const changePlayer = () => {
        return player === 'X' ? '0' : 'X';
    }

    //FUNCTION OF PLAYER
    let wholePlayers = document.querySelectorAll('.wholePlayers');

    wholePlayers.forEach(element => {
        let boxText = element.querySelector('.boxText');
        element.addEventListener('click', play);

        function play() {
            if (boxText.innerText === '') {
                boxText.innerText = player;
                player = changePlayer();
                checkWin();
                if (condition == 0) {
                    document.getElementsByClassName('turn')[0].innerText = 'Turn for  ' + player;
                    document.getElementsByClassName('turn')[0].style.color = 'red'
                }
            }
        }

    })

    //WIN LOGIC
    let boxText = document.getElementsByClassName('boxText');
    const checkWin = () => {
        win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        win.forEach(e => {
            if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')) {
                document.getElementsByClassName('turn')[0].innerText = boxText[e[0]].innerText + ' WON '
                condition = 1;
                document.getElementsByClassName('turn')[0].style.color = 'green'
            }
        })
    }

    //RESET
    document.getElementById('reset').addEventListener('click', () => {
        let boxText = document.querySelectorAll('.boxText');

        boxText.forEach(element => {
            element.innerText = "";
            condition = 0;
        })

    })
})