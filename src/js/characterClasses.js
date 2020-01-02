/* eslint-disable max-classes-per-file */
export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}

export class Bowerman extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
