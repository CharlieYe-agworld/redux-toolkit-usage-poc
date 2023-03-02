export const pause = (duration: number) => {
  return new Promise<void>((resolve: (value: any) => void) => {
    setTimeout(resolve, duration);
  });
};