import { Loader } from "@mantine/core";

export const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-gray-950/70 backdrop-blur-sm flex items-center justify-center z-50">
      <Loader color="indigo" size="xl" type="dots" />
    </div>
  );
};
