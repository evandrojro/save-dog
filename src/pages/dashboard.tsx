import { Container, Header, Main, SectionPrincipal } from "./styles";

export const Dashboard: React.FC = () => {
    return (
        <Container>
            <Header>
                <img src="assets/logo.svg" alt="logo" />
                <h1 className="header-title">Help Dog - Evandro Junior</h1>
            </Header>
            <Main>
                <SectionPrincipal>
                    <h1>    Ajude quem 
                        precisa de ajuda</h1>
                </SectionPrincipal>
            </Main>
        </Container>
    );
}