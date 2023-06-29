function warning() {
    alert('Welcome to my cat page!');
}

function catQuestion() {
    let cat = prompt('DO YOU LIKE CATS??! *you can only answer Y/N or y/n*');  
    while(!cat) {
        cat = prompt('Seriously, you gotta answer Y/N or y/n')
    }
    if (cat === 'Y') {
        document.write ("<p>AWESOME! Then you are welcome here!</p>")
    }if (cat === 'y') {
        document.write ("<p>AWESOME! Then you are welcome here!</p>")
    } else if (cat === 'N') {
        document.write ('<p>GO AWAY! Just kidding, I guess you can look around...</p>')
    } else if (cat === 'n') {
        document.write ('<p>GO AWAY! Just kidding, I guess you can look around...</p>')
    } else {
        document.write ('<p>YOU WILL GET THIS MESSAGE BECAUSE YOU DID NOT ANSWER Y/N.</p>')
    }
}

