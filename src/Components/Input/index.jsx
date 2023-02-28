import { Container } from './styles';
import { RiSearchLine, RiUserLine, RiLock2Line } from 'react-icons/ri';

export function Input({ title, icon = 'search', ...rest }) {
  return (
    <Container>
      {icon === 'search' && <RiSearchLine />}
      {icon === 'user' && <RiUserLine />}
      {icon === 'senha' && <RiLock2Line />}
      <input {...rest} />
    </Container>
  );
}
