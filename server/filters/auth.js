const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: "47938244453-0s2sk4c2o2n0ogu484jud3ohpor4ivpd.apps.googleusercontent.com",
        clientSecret: "yBQ_OS0Hq1N6EBKxPG9te6b8",
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};