import { Component, React } from "react";
import CardNota from "./CardNota";

export class ListasDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudo").map(categorias => {
                    return (
                        <li>
                            <div>{categorias}</div>
                            <CardNota />
                        </li>

                    )
                })}

            </ul>
        )
    }

}