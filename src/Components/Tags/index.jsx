import { Container } from './styles';

export function Tags({ title, marcadores }) {
  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {marcadores.map((e) => (
          <li key="{tag}">
            <a href={e}>{e}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
  return;
}
