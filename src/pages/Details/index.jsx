import { Button } from '../../Components/Button';
import { ButtonText } from '../../Components/ButtonText';
import { Header } from '../../Components/Header';
import { Links } from '../../Components/Links';
import { Tags } from '../../Components/Tags';
import { Container, Content } from './styles';

export function Details() {
  const array = ['https://www.allura.com', 'https://www.origamid.com', ,];

  const marcadores = ['Design', 'UI/UX'];

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText className="buttonText" title="Excluir Nota" />
        <div>
          <h1>Anotações do Curso de Design</h1>
          <p>
            Enquanto o foco do UI design é a criação de uma interface amigável,
            o UX é voltado para a maneira como o usuário vive o uso de um
            produto. O UI trata dos elementos com os quais o usuário interage,
            ao passo que o UX procura entender os comportamentos e emoções
            dessas pessoas no uso do produto.
          </p>
        </div>
      </Content>
      <Links title="Links" array={array} />
      <Tags title="Tags" marcadores={marcadores} />
      <Button title="Enviar" />
    </Container>
  );
}
