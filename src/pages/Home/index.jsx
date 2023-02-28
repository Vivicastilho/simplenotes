import { Header } from '../../Components/Header';

import { HiOutlinePlus } from 'react-icons/hi';
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
          <div className="menu">
            <ButtonText className="navigation" title="Início" />
            <ButtonText className="navigation" title="Minhas Notas" />
            <ButtonText className="navigation" title="Tasks" />
            <ButtonText className="navigation" title="Compras" />
          </div>
          <Button className="criarNota" title="Criar Nota" />
        </nav>
        <main>
          <Header />
          <div className="listaNota">
            <Input className="text" placeholder="Pesquisar" />
            <h3>Minhas Notas</h3>
            <Listas className="tag">
              <Tags title="Anotações do curso de Design" tags={marcadores} />
            </Listas>
            <Listas className="tag">
              <Tags title="Gastos da Semana" tags={gastos} />
            </Listas>
            <Listas className="tag">
              <Tags title="Lista de Livros" tags={livros} />
            </Listas>
          </div>
        </main>
      </Content>
    </Container>
  );
}
