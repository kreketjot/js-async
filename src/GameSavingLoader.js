import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const str = await json(data);
    const obj = await JSON.parse(str);
    return new GameSaving(obj);
  }
}
