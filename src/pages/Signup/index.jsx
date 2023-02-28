import { Container, Imagem } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { ButtonText } from '../../Components/ButtonText';

export function Signup() {
  return (
    <Container>
      <div className="signup">
        <h1>Simple Notes</h1>
        <h2>Gerenciando e planejando suas tarefas.</h2>
        <p>Criar Conta</p>
        <div className="boxInput">
          <Input className="user" placeholder="Nome" icon="user" />
          <Input className="user" placeholder="E-mail" icon="email" />
          <Input className="user" placeholder="Senha" icon="senha" />
        </div>
        <Button className="botao" title="Cadastrar" />
        <ButtonText className="botaoTexto" title="Voltar" />
      </div>
      <Imagem />
    </Container>
  );
}
