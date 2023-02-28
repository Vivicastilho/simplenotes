import { Container } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { ButtonText } from '../../Components/ButtonText';

export function Login() {
  return (
    <Container>
      <div className="signin">
        <h1>Simple Notes</h1>
        <h2>Gerenciando e planejando suas tarefas.</h2>
        <p>Login</p>
        <div className="boxInput">
          <Input className="user" placeholder="E-mail" icon="user" />
          <Input className="user" placeholder="Senha" icon="senha" />
        </div>
        <Button className="botao" title="Salvar" />
        <ButtonText className="botaoTexto" title="Criar Conta" />
      </div>
    </Container>
  );
}
