import passport from 'passport';
import TwitterStrategy from 'passport-twitter';
import FacebookStrategy from 'passport-facebook';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
    'twitter',
    new TwitterStrategy(
        {
            consumerKey: process.env.TWITTER_APP_ID,
            consumerSecret: process.env.TWITTER_APP_SECRET,
            callbackURL: 'https://ah-kgl-wakanda-staging.herokuapp.com/api/auth/twitter/callback'
        },
        async (token, tokenSecret, profile, done) => {
            done(null, profile);
        }
    )
);