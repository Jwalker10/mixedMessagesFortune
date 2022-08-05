
/* arrays containing message components */
const luck = ['A dream you have will come true.', 'Good luck shrouds you from evil.', 'Bad luck haunts your steps.', 
'Your luck is behind a mysterious fog in your mind.', 'Terrible things are on the horizon.', 'Great fortune is within grasp.', 
'mediocre luck is like well made plain rice, better than bad rice'];

const action = ['The greatest risk is not taking one.', 'Fortune favors the brave.', 
'A journey of a thousand miles begins with a single step.', 'Ask yourself if what you are doing today is getting you closer to where you want to be tomorrow.', 
'An upward movement initiated in time can counteract fate.', 'If winter comes, can spring be far behind?', 'It is easier to resist at the beginning than at the end.'];


const constructFortune = (luckArr, actionArr) => {
    /* returns a number between 0 and inserted number (num) */
    const randomNumGenerator = (num) => {
        return Math.floor(Math.random() * num)
    };

    /* raw contents for fortune */
    let fortuneArr = [];

    /* generates and stores random index number using length from inserted arr */
    let luckIndex = randomNumGenerator(luckArr.length);
    let actionIndex = randomNumGenerator(actionArr.length);
    
    /* pushes element located at generated index to fortuneArr ready to be formatted */
    fortuneArr.push(luckArr[luckIndex]);
    fortuneArr.push(actionArr[actionIndex]);

    /* formats and logs fortune to console */
    const fortune = fortuneArr.join('\n');
    console.log(fortune);
};

constructFortune(luck, action);