export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name === 'number') {
      throw new Error('Ошибка! Имя должно быть строкой');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! Имя слишком короткое/длинное');
    }
    if (!types.includes(type)) {
      throw new Error('Ошибка! Такого персонажа не существует');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
