import Settings from '../js/settings';

test('Creating of the "Settings" class', () => {
  const obj = new Settings();
  expect(obj).toBeInstanceOf(Settings);
});

test('Сhecking whether a class has properties', () => {
  const obj = new Settings();
  expect(obj.default).toBeDefined();
  expect(obj.user).toBeDefined();
  expect(obj.availableSettings).toBeDefined();
});

test('test for adding custom settings', () => {
  const obj = new Settings();
  obj.user.set('theme', 'light');
  obj.user.set('unkown key', 'pop');
  obj.user.set('difficulty', 'unkown value');

  expect(obj.user.get('theme')).toBe('light');
  expect(obj.user.get('unkown key')).not.toBeDefined();
  expect(obj.user.get('difficulty')).not.toBeDefined();
});

test('Checking the "finalSettings" method', () => {
  const obj = new Settings();
  obj.user.set('theme', 'gray');
  expect(obj.finalSettings).toEqual(new Map([
    ['theme', 'gray'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]));
});
