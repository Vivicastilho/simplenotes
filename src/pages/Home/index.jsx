import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { ButtonText } from '../../Components/ButtonText';
import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <div>
        <h1>Simple Notes</h1>
        <Header />
      </div>
      <Content>
        <nav>
          <ButtonText className="navigation" title="Início" />
          <ButtonText className="navigation" title="Minhas Notas" />
          <ButtonText className="navigation" title="Tasks" />
          <ButtonText className="navigation" title="Compras" />
        </nav>
        <main>
          <Input className="text" title="Pesquisar" />
        </main>
      </Content>
    </Container>
  );
}
