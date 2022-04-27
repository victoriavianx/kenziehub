import { Container, SelectContainer } from "./styles";

function Select({ label, register, options, name, error, ...rest }) {
  return (
    <Container>
      <div>
        {label} {!!error && <span>{error}</span>}
      </div>
      <SelectContainer isErrored={!!error} {...register(name)} {...rest}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectContainer>
    </Container>
  );
}

export default Select;
