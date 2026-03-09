import { package2 } from './package-2';

describe('package2', () => {
  it('should work', async () => {
    const result = await package2();
    expect(result).toBe('package-2');
  });
});
