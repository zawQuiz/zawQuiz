import oauthPlugin from 'fastify-oauth2'
import jwtPlugin from 'fastify-jwt'

export default async (fastify: any) => {

  fastify.register(jwtPlugin, {
    secret: process.env.APP_KEY
  })

  fastify.register(oauthPlugin,{
    name: 'googleOAuth2',
    scope: ['profile','email'],
    credentials: {
      client: {
        id: process.env.GOOGLE_CLIENT_ID,
        secret: process.env.GOOGLE_CLIENT_SECRET
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION
    },
    startRedirectPath: '/api/v1/auth/login/google',
    callbackUri: process.env.APP_URL+'/api/v1/auth/login/google/callback'
  })

  fastify.register(oauthPlugin, {
    name: 'facebookOAuth2',
    credentials: {
      client: {    
        id: process.env.FACEBOOK_CLIENT_ID,
        secret: process.env.FACEBOOK_CLIENT_SECRET
      },
      auth: oauthPlugin.FACEBOOK_CONFIGURATION
    },
    startRedirectPath: '/api/v1/auth/login/facebook',
    callbackUri:  process.env.APP_URL+'/api/v1/auth/login/facebook/callback'
  })

};
