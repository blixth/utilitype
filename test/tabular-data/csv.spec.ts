import { Csv } from '../../src/tabular-data/csv';
import { expect } from '../expect-helper';

describe('Csv', () => {
  describe('#toString', () => {
    it('constructs a csv string with the given delimeter', () => {
      const result = Csv.toString([
        { name: 'Luke', planet: 'Tatooine' },
        { name: 'Leia', planet: 'Alderaan' },
      ]);

      expect(result).to.eql('name;planet\nLuke;Tatooine\nLeia;Alderaan');
    });

    context('when different amounts of fields', () => {
      it('defaults missing fields', () => {
        const result = Csv.toString([
          { name: 'Luke', planet: 'Tatooine' },
          { name: 'Leia' },
        ]);

        expect(result).to.eql('name;planet\nLuke;Tatooine\nLeia;');
      });
    });
  });

  describe('#fromString', () => {
    it('constructs an array of type T', () => {
      type Pizza = { name: string, number: number };

      const result = Csv.fromString<Pizza>('PIZZANAME;PRICE;NUMBER;\r\nHawaii;69;1\r\nCalzone;69;2', [{
        header: 'PIZZANAME',
        key: 'name',
      },
      {
        header: 'NUMBER',
        key: 'number',
      }]);

      const [hawaii] = result;

      expect(result.length).to.eql(2);
      expect(hawaii.name).to.eql('Hawaii');
      expect(hawaii.number).to.eql(1);
    });
  });
});
