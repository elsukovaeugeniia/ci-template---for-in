import { orderByProps } from '../orderByProps.js';

describe('orderByProps', () => {
  test('сортирует по заданному порядку, остальное — по алфавиту', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40
    };
    const order = ['name', 'level'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]);
  });

  test('если порядок пуст — сортирует всё по алфавиту', () => {
    const obj = { z: 1, a: 2, b: 3 };
    const order = [];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'a', value: 2 },
      { key: 'b', value: 3 },
      { key: 'z', value: 1 }
    ]);
  });

  test('если объект пуст — возвращает пустой массив', () => {
    const obj = {};
    const order = ['name'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([]);
  });

  test('если порядок содержит несуществующие ключи — игнорирует их', () => {
    const obj = { a: 1, b: 2 };
    const order = ['x', 'y', 'a'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 }
    ]);
  });

  test('если все ключи указаны в порядке — возвращает в этом порядке', () => {
    const obj = { x: 10, y: 20 };
    const order = ['y', 'x'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'y', value: 20 },
      { key: 'x', value: 10 }
    ]);
  });

  test('работает с числовыми ключами', () => {
    const obj = { 1: 'one', 2: 'two', 3: 'three' };
    const order = ['2', '1'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: '2', value: 'two' },
      { key: '1', value: 'one' },
      { key: '3', value: 'three' }
    ]);
  });

  test('корректно обрабатывает строки с пробелами в ключах', () => {
    const obj = { 'first name': 'Иван', 'last name': 'Иванов' };
    const order = ['last name'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'last name', value: 'Иванов' },
      { key: 'first name', value: 'Иван' }
    ]);
  });
});
