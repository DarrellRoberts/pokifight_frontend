import Pokemon from "./pokemon/Pokemon"
import { NavLink } from "react-router-dom"


export default function Header() {
    return (
        <>
        <NavLink to="pokemon" element={Pokemon}>Pokemon</NavLink>
        </>
    )
}