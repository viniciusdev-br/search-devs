import { Container, Content } from "./styles";
import logoClickSoft from '../../assets/ClickSoftTest.svg';

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoClickSoft} alt="Logo ClickSoftTest" />
                <div>
                    <a href="https://www.clicksoft.com.br/">ClickSoft</a>
                    <a href="https://github.com/viniciusdev-br">viniciusdev-br</a>
                    <a href="#" className="search-now">Search Now</a>
                </div>
            </Content>
        </Container>
    );
}