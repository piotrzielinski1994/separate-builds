import { wait } from '#utils';

const package1 = async () => {
  await wait(3_000);
  return 'package-1';
};

export { package1 };
