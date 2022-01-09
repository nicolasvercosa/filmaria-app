import { Link } from "react-router-dom";
import './error.css' 

export default function Error() {
    return (
        <div>
            <p>404</p>
            <h1>Oops, página não encontrada...</h1>
            <h2>
                <Link to="/">Voltar para o início</Link>
            </h2>
        </div>

    )
}