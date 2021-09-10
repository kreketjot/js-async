export default class GameSaving {
  constructor({
    id,
    created,
    userInfo: {
      id: userId,
      name,
      level,
      points,
    },
  }) {
    this.data = {
      id,
      created,
      userInfo: {
        id: userId,
        name,
        level,
        points,
      },
    };
    return this.data;
  }
}
