import { Container } from './styles';
import { RiSearchLine } from 'react-icons/ri';

export function Input({ title, ...rest }) {
  return (
    <Container>
      <RiSearchLine />
      <input {...rest} />
    </Container>
  );
}
