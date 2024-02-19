document.addEventListener('DOMContentLoaded', function() {
    const grid= document.querySelector('.grid')
    const flagsLeft = document.querySelector('#flagsLeft')
    const width = 10
    let bombAmount = 20
    let squares = []

    console.log(grid);

    function createBoard() {
        flagsLeft.innerHTML = bombAmount

        // Shuffles the board with random bombs
        const bombArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width * width - bombAmount).fill('valid')
        const gameArray = emptyArray.concat(bombArray)
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)


        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.id = i
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)

            // right click
            square.addEventListener('click', function() {
                click(square)
            })

            // ctrl/left click
            square.addEventListener('click', function() {
                // addFlag(square)
            })
        }

        // How many bombs around
        for (let i = 0; i < squares.length; i++) {
            let total = 0
            const isLeftEdge = (i % width === 0)
            const isRightEdge = (i % width === width - 1 )

            console.log(squares)
            if (squares[i].classList.contains('valid')) {
                if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total++
                if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total++
                if (i > 10 && squares[i - width].classList.contains('bomb')) total++
                if (i > 11 && !isLeftEdge && squares[i - width -1].classList.contains('bomb')) total++
                if (i < 99 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total++
                if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total++
                if (i < 88 && !isRightEdge && squares[i + 1 + width].classList.contains('bomb')) total++
                if (i < 89 && squares[i + width].classList.contains('bomb')) total++
                squares[i].setAttribute('data', total)

            }
        }

    }
    createBoard()

    function click(square) {
        console.log(square)
    }



})