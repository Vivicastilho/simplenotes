import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { ButtonText } from '../../Components/ButtonText';
import { Button } from '../../Components/Button';
import { Tags } from '../../Components/Tags';
import { Container, Content, Listas } from './styles';

export function Home() {
  const marcadores = ['Design', 'UI/UX'];
  const gastos = ['Compras', 'Dinheiro', 'Débito'];
  const livros = ['Compras', 'Dinheiro', 'Débito'];
  return (
    <Container>
      <Content>
        <nav>
          <h1>Simple Notes</h1>
          <ButtonText className="navigation" title="Início" />
          <ButtonText className="navigation" title="Minhas Notas" />
          <ButtonText className="navigation" title="Tasks" />
          <ButtonText className="navigation" title="Compras" />
          <Button title="Criar Nota" />
        </nav>
        <main>
          <Header />
          <Input className="text" title="Pesquisar" />

          <h1>Minhas Notas</h1>
          <Listas>
            <Tags title="Anotações do curso de Design" tags={marcadores} />
          </Listas>
          <Listas>
            <Tags title="Gastos da Semana" tags={gastos} />
          </Listas>
          <Listas>
            <Tags title="Lista de Livros" tags={livros} />
          </Listas>
        </main>
      </Content>
    </Container>
  );
}