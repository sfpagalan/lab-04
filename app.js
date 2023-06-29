function warning() {
    confirm('You sure about this?!');
}

function catBreed() {
    let cat = prompt('Give me a cat breed');
    while(!cat) {
        cat = prompt('Need more CAAAAATS')
    } 
    alert('Yay! Welcome to my cat page!');
    
}

function catQuestion() {
    let cat = prompt('DO YOU LIKE CATS Answer Y/N');  
    
    if (cat === 'Y') {
        document.write ("<p>AWESOME! Then you are welcome here!</p>")
    } else if (cat === 'N') {
        document.write ('<p>GO AWAY!</p>')
    } else {
        document.write ('<p>THAT IS UNFORTUNATE BUT I FORGIVE YOU</p>')
    }
}

