import express from 'express';
import passport from 'passport';


const router = express.Router();

router.get(
    '/auth/twitter',
    passport.authenticate('twitter')
  );
  
//   router.get(
//     '/auth/twitter/callback',
//     passport.authenticate('twitter', { session: false }), Users.socialLogin
//   );

export default router;