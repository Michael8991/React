import { Fragment } from 'react'
import './App.css'
import { TwitterFallowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFallowCard isFollowing={true} formatUserName={format} userName="midudev" name="Miguel Angel Duran"></TwitterFallowCard>
            <TwitterFallowCard isFollowing formatUserName={format} userName="gorillaz" name="Gorillaz"></TwitterFallowCard>
            <TwitterFallowCard isFollowing={false} formatUserName={format} userName="__Michael98__" name="MłϾHΛΞŁ 🇦🇷"></TwitterFallowCard>
        </section>
    )
}

//Children <div><span></span></div> children => span 