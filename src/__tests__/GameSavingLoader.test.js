import GameSavingLoader from '../GameSavingLoader';

test('id', async () => {
  const saving = await GameSavingLoader.load();
  expect(saving.id).toBe(9);
});
