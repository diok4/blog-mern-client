// src/components/ui/provider.tsx
"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

// ОТКЛЮЧАЕМ глобальный reset/preflight у Chakra
export const system = createSystem(defaultConfig, {
  preflight: false,
});

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
