import * as React from 'react';
import "./styles.css"

export default function Sociales(props) {
    return (
        <>
        <a href='https://www.facebook.com/?locale=es_LA' target="_blank"><img className='icon-social' src={props.facebook} /><a> {props.facebookUser}</a><br/></a>
        <a href='https://github.com/monocoto3000' target="_blank"><img className='icon-social' src={props.github} /><a> {props.githubUser}</a><br/></a>
        <a href='https://www.instagram.com/' target="_blank"><img className='icon-social' src={props.instagram} /><a> {props.instagramUser}</a><br/></a>
        <a href='https://mx.linkedin.com/' target="_blank"><img className='icon-social' src={props.linkedin} /><a> {props.linkedinUser}</a><br/></a>
        <a href='https://twitter.com/?lang=es' target="_blank"><img className='icon-social' src={props.twitter} /><a> {props.twitterUser}</a><br/></a>
        <a href='https://www.google.com/intl/es-419/gmail/about/' target="_blank">{props.correo}<br/></a>
        </>
    )
}
