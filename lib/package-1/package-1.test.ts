import { package1 } from './package-1';

describe('package1', () => {
  it('should work', async () => {
    const result = await package1();
    expect(result).toBe('package-1');
  });
});
