const express = require( "express" );
const morgan = require( "morgan" );
const mongoose = require( "mongoose" )
const blogRoutes = require( "./blogRoutes" )
const app = express();

const dbURI = "mongodb+srv://theseregrets:Harvard123@blog-app.4kesn.mongodb.net/nodetuts?retryWrites=true&w=majority"

// connecting to db
mongoose.connect( dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } )
  .then( ( res ) => {
    // listen to requests
    app.listen( 3000 );
    console.log( "Connected to database" )
  } )
  .catch( ( err ) => {
    console.log( err )
  } );

//register view engine configurations
app.set( "view engine", "ejs" );
app.set( "views", "views" );

app.use( express.static( "public" ) );
app.use( express.urlencoded( { extended: true } ) );
app.use( morgan( "dev" ) );
app.use( blogRoutes )

app.get( '/', ( req, res ) => {
  res.redirect( '/blogs' );
} )

app.get( "/about", ( req, res ) => {
  const header = {
    img: "about-bg",
    title: "About Me",
    subtitle: "This is what I do.",
  };
  res.render( "about", { title: "about", header } );
} );

app.get( "/contact", ( req, res ) => {
  const header = {
    img: "contact-bg",
    title: "Contact Me",
    subtitle: "Have questions? I have answers.",
  };
  res.render( "contact", { title: "contact", header } );
} );

app.use( ( req, res ) => {
  const header = {
    img: "notfound-bg",
    title: "404",
    subtitle: "Are you lost?.",
  };

  res.status( 404 ).render( "not-found", { title: "404", header } );
} );
