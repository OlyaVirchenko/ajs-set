export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(heroe) {
    if (this.members.has(heroe)) {
      throw new Error('Такой персонаж уже существует');
    } else {
      this.members.add(heroe);
    }
  }

  addAll(...heroe) {
    heroe.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }
}
