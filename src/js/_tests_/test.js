import Character from '../character';
import Team from '../team';

test.each([
  ['символы имя цифры', 'Ошибка! Имя должно быть строкой', 123, 'Bowman'],
  ['один символ', 'Ошибка! Имя слишком короткое/длинное', 'a', 'Bowman'],
  ['больше 10 символов', 'Ошибка! Имя слишком короткое/длинное', 'aaaaaaaaaaa', 'Bowman'],
  ['не соответствует тип', 'Ошибка! Такого персонажа не существует', 'aaaaaa', 'AAA'],
])('Проверка создания класса %s', (_, expected, paramName, paramType) => {
  expect(() => {
    const result = new Character(paramName, paramType);
    return result;
  }).toThrow(expected);
});

test('Проверка метода add', () => {
  const heroe1 = new Character('Bombom', 'Zombie');
  const heroe2 = new Character('Bumbum', 'Bowman');
  const team = new Team();
  team.add(heroe1);
  team.add(heroe2);
  expect(team.members).toContain(heroe1, heroe2);
});

test('Проверка ошибки метода add', () => {
  expect(() => {
    const heroe1 = new Character('Bombom', 'Zombie');
    const team = new Team();
    team.add(heroe1);
    team.add(heroe1);
  }).toThrow('Такой персонаж уже существует');
});

test('Проверка работы метода addAll', () => {
  const heroe1 = new Character('Bombom', 'Bowman');
  const heroe2 = new Character('Bumbum', 'Zombie');
  const heroe3 = new Character('Bumbum', 'Zombie');
  const team = new Team();
  team.addAll(heroe1, heroe2, heroe3);
  expect(team.members).toContain(heroe1, heroe2);
});

test('Проверка метода toArray', () => {
  const heroe1 = new Character('Bombom', 'Bowman');
  const heroe2 = new Character('Bumbum', 'Zombie');
  const team = new Team();
  team.addAll(heroe1, heroe2);
  expect(team.toArray()).toEqual([heroe1, heroe2]);
});
