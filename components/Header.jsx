import trollFace from "../images/pinas.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Pinas Party Meme Generator</h1>
        </header>
    )
}