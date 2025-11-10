import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import {
  ActionIcon,
  TextInput,
  type TextInputProps,
  useMantineTheme,
} from "@mantine/core";

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      styles={(theme) => ({
        input: {
          backgroundColor: "#0B1220",
          color: "#E5E7EB",
          border: "1px solid #1F2937",
        },
      })}
      radius="xl"
      size="md"
      placeholder="Search questions"
      rightSectionWidth={42}
      leftSection={<IconSearch size={18} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl">
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
  );
}
