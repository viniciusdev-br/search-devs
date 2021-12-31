import { Container } from "./styles";
import lupaSearch from '../../assets/lupa-search.svg'

 export function SearchDevs() {
    return (
        <Container>
            <div>
                <input type="text" placeholder="Enter a nickname here..."/>
                <button>
                    <img src={ lupaSearch } alt="Pesquisar" />
                </button>
            </div>
        </Container>
    );
 }