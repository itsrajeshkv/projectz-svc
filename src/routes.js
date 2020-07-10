const express 	= require( 'express' )
const appRouter = express.Router()

const projects = require( './data' )

appRouter.get( '/services/projects', function( req, res ) {
  res.json({ code: 'successful', payload: projects })
})

appRouter.get( '/services/projects/:id', function( req, res ) {
  const project = projects.find( p => p.projectId === parseInt( req.params.id ) )
  res.json({ code: 'successful', payload: project })
})

appRouter.get( '/services/hello', function( req, res ) {
  res.json({ code: 'successful', payload: 'World' })
})

module.exports = appRouter
