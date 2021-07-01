const { LoremIpsum } = require("lorem-ipsum");
const  generator = require('generate-password');
const randomEmail = require('random-email');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const bcrypt = require('bcryptjs')




// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const commentSeedDataArr = []

const commentSeedDataFunc = () => {
  for (let i = 0; i < 40; i++) {
    const commentUserId = Math.ceil(Math.random()* 22)

    const commentGameId = Math.ceil(Math.random() *11 )

    const randomNumWord = Math.floor(Math.random() * 20) + 20
    const comment = lorem.generateWords(randomNumWord);
    commentSeedDataArr.push({
      content: comment,
      userId: commentUserId,
      gameId: commentGameId,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
}
commentSeedDataFunc()
//int between 2-5


const passwordGenerator = () => {
  return generator.generate({
    length: 15,
    numbers: true,
    symbols: true,
  });
}

const userSeedDataArr = []

const userSeedDataFunc = () => {
  for (let i = 0; i < 20; i++) {
    const password = passwordGenerator()
    const hashedPassword = bcrypt.hashSync(password, 10);
    const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey

    userSeedDataArr.push({
      username: randomName,
      email: randomEmail({ domain: 'yeet.com'}),
      hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
}

userSeedDataFunc()

module.exports = {
  commentSeedDataArr,
  userSeedDataArr,
}


// unseed
// unmigrate
// migrate
// seed