import { wait } from '#utils';

const package2 = async () => {
  await wait(1_000);
  return 'package-2';
};

export { package2 };
