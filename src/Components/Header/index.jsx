import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/Vivicastilho.png" alt="" />

        <div>
          <span>Bem vindo(a)</span>
          <strong>Viviane Castilho</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
