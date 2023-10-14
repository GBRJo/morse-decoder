const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {

    const zeroAndOne = [];
    for (let i = 0; i < expr.length; i += 10) {
        zeroAndOne.push(expr.substring(i, i + 10));
    }
    
    const dotAndSlash = [];
    for (let i = 0; i < zeroAndOne.length; i++) {
        dotAndSlash.push(zeroAndOne[i].replace(/10/g, '.').replace(/11/g, '-'));
    }

    const dotAndSlashPure = [];
    for (let i = 0; i < dotAndSlash.length; i++) {
        dotAndSlashPure.push(dotAndSlash[i].replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ').replace(/00/g, ''));
    }

    for (let i = 0; i < dotAndSlashPure.length; i++) {
        const key = dotAndSlashPure[i];
        if (MORSE_TABLE.hasOwnProperty(key)) {
            dotAndSlashPure[i] = MORSE_TABLE[key];
    }
}


    const dotAndSlashString = dotAndSlashPure.join('');

   

    
   
    return dotAndSlashString

    }

    module.exports = {
        decode
      };
   
    

  
console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));