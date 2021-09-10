import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const { userInfo } = await GameSavingLoader.load();
    const entries = Object.entries(userInfo);
    entries.forEach(([key, value]) => {
      const p = document.createElement('p');
      p.innerText = `${key}: ${value}`;
      document.body.append(p);
    });
  } catch (error) {
    console.error(error);
  }
})();
