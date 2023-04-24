import { Select, SelectProps } from '@chakra-ui/react';

interface SelectFilterProps {
  dataOption: {
    name: string;
    value: string | number;
  }[];
}
const SelectFilter = ({
  dataOption,
  ...rest
}: SelectFilterProps & SelectProps) => {
  return (
    <Select {...rest}>
      {dataOption.map((option, key) => (
        <option value={option.value} key={key}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectFilter;
