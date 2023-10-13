export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.availableSettings = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);

    this.user = new Map();
    this.user.set = (key, value) => {
      if (this.availableSettings.has(key)) {
        const availableValues = this.availableSettings.get(key);
        if (availableValues.includes(value)) {
          Map.prototype.set.call(this.user, key, value);
        }
      }
    };
  }

  get finalSettings() {
    const merged = new Map([...this.default, ...this.user]);
    return merged;
  }
}
