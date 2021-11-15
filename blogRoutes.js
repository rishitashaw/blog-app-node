const express = require( "express" )
const router = express.Router()
const Blog = require( "./models/blogs" )

router.get( "/blogs", ( req, res ) => {
    const header = {
        img: "home-bg",
        title: "Before & After",
        subtitle: "Hello Mf",
    };

    Blog.find().sort( { createdAt: -1 } )
        .then( result => {
            res.render( "index", { title: "All Blogs", blogs: result, header } );
        } )
        .catch( err => {
            console.log( err )
        } )


} );

router.post( "/blogs", ( req, res ) => {

    const blog = new Blog( req.body );
    blog.save()
        .then( result => {
            res.redirect( "/blogs" )
        } ).catch( err => {
            console.log( err )
        } )
} )


router.get( "/blogs/create", ( req, res ) => {
    const header = {
        img: "post-sample-image",
        title: "Create Post",
        subtitle: "Tell Us Something.",
    };
    res.render( "create", { title: "create blog", header } );
} );


router.get( '/blogs/:id', ( req, res ) => {
    Blog.findById( req.params.id )
        .then( result => {
            res.render( "post", { blog: result, title: result.title } )
        } )
        .catch( err => {
            console.log( err )
        } )
} )

router.delete( '/blogs/:id', ( req, res ) => {
    const id = req.params.id

    Blog.findByIdAndDelete( id )
        .then( result => {
            res.json( { redirect: '/blogs' } )
        } )
        .catch( err => {
            console.log( err )
        } )
} )


module.exports = router;