const randomkey = () => {
    var random_string = ''
    var char = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var i
    
    for(i = 0; i < 30; i++){
        random_string = random_string + char.charAt(Math.floor(Math.random()* char.length))
    }
    return random_string
}

export default randomkey;