import * as React from 'react';
import "./styles.css"

export default function Sociales(props) {
    return (
        <>
        <img className='icon-social' src={props.facebook} /><a> {props.facebookUser}</a><br/>
        <img className='icon-social' src={props.github} /><a> {props.githubUser}</a><br/>
        <img className='icon-social' src={props.instagram} /><a> {props.instagramUser}</a><br/>
        <img className='icon-social' src={props.linkedin} /><a> {props.linkedinUser}</a><br/>
        <img className='icon-social' src={props.twitter} /><a> {props.twitterUser}</a><br/>
        </>
    )
}
