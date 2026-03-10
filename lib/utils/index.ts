const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms + 1));

export { wait };
