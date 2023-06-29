function warning() {
    confirm('You sure about this?!');
}

function catQuestion() {
    let cat = prompt('DO YOU LIKE CATS?');         
        
    if (cat === 'yes') {
        document.write ("<p>AWESOME! Then you are welcome here!</p>")
    } else if (cat === 'no') {
        document.write ('<p>GO AWAY!</p>')
    } else {
        document.write ('<p>THAT IS UNFORTUNATE BUT I FORGIVE YOU</p>')
    }
}
