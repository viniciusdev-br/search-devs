import { Container, Content } from "./styles";
import logoClickSoft from '../../assets/ClickSoftTest.svg';

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoClickSoft} alt="Logo ClickSoftTest" />
                <div>
                    <a href="https://github.com/viniciusdev-br/search-devs">Repository</a>
                    <a href="https://github.com/viniciusdev-br">viniciusdev-br</a>
                    <a href="#inputDev" className="search-now">Search Now</a>
                </div>
            </Content>
        </Container>
    );
}
