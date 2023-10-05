import Pokemon from "./pokemon/Pokemon"
import { NavLink } from "react-router-dom"
import SoundPlayer from "./SoundPlayer.jsx"
import Soundtrack from "../assets/soundtrack.mp3";


export default function Header() {
    return (
        <>
        <NavLink to="pokemon" element={Pokemon}>Pokemon</NavLink>
        <SoundPlayer soundtrackSrc={Soundtrack} />
        </>
    )
}