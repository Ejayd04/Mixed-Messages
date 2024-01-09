function generateRand(num) {
    return Math.floor(Math.random() * num)
}

//console.log(generateRand(10))

let message = [];

let mixedMessages = {
    firstQuarter: ['You have to believe in yourself when no one else does', 'When you have a dream, you\'ve got to grab it and never let go', 'Be yourself; everyone else is already taken'],
    secondQuarter: ['The only thing we have to fear is fear itself', 'You\'ve got to be in it to win it', 'Find out who you are and do it on purpose'],
    thirdQuarter: ['Do one thing every day that scares you', 'It is never too late to be what you might have been', 'Always do your best. What you plant now, you will harvest later'],
    fourthQuarter: ['Don\'t let yesterday take up too much of today', 'Be persistent and never give up hope', 'Believe and act as if it were impossible to fail']
}

for (const prop in mixedMessages) {
    let newIndex = generateRand(mixedMessages[prop].length)
    //console.log(newIndex);

switch(prop) {
    case 'firstQuarter':
        message.push(`This first quarter, ${mixedMessages[prop][newIndex]}.`)
        break;
    case 'secondQuarter':
        message.push(`This second quarter, ${mixedMessages[prop][newIndex]}.`)
        break;
    case 'thirdQuarter':
        message.push(`This third quarter, ${mixedMessages[prop][newIndex]}.`)
        break;
    case 'fourthQuarter':
        message.push(`This final quarter, ${mixedMessages[prop][newIndex]}.`)
        break;
    default:
        message.push('More information needed')
        break;
}
}

const finalMessage = final => {
    let finalMerge = message.join('\n')
    console.log(finalMerge)
}

finalMessage(message);

