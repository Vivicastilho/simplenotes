import { Container } from './styles';

export function Tags({ title, tags }) {
  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {tags.map((e, index) => (
          <li key={index}>
            <a href={e}>{e}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
