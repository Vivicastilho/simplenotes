import { Container } from './styles';

export function Links({ title, array }) {
  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {array.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </Container>
  );
}
