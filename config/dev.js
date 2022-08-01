module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // mongoURI: 'mongodb://localhost/blog_everyone',
  mongoURI: process.env.MONGO_URI,
  cookieKey: '123123123',
};

// console.log(process.env.GOOGLE_CLIENT_ID, '\n', process.env.GOOGLE_CLIENT_SECRET)
