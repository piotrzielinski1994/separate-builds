import { wait } from '#utils';

const package1 = async () => {
  await wait(1_000);
  return 'package-1';
};

export { package1 };
