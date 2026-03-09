const package2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1_000));
  return 'package-2';
};

export { package2 };
