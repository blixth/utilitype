import { remodel } from '../../src/objects/remodel';
import { expect } from '../expect-helper';

describe('remodel', () => {
  context('when given a string key', () => {
    it('sets from that key', () => {
      const source = { food: 'Pineapple Pizza' };

      const result = remodel(source, {
        trash: { from: 'food' },
      });

      expect(result.trash).to.eql('Pineapple Pizza');
    });
  });

  context('when given a getter function', () => {
    it('sets from that function', () => {
      const source = { food: 'Pineapple Pizza' };

      const result = remodel(source, {
        trash: { from: (o) => o.food },
      });

      expect(result.trash).to.eql('Pineapple Pizza');
    });

    it('throws a descriptive error if it fails', () => {
      const source = { food: 'Pineapple Pizza' };

      const action = () => remodel(source, {
        trash: {
          from: () => {
            throw new Error('You done goofed up!');
          },
        },
      });

      expect(action).to.throwException((error: { message: unknown; }) => {
        const expectedMessage = "Transform of property 'trash' threw error: You done goofed up!";
        expect(error.message).to.eql(expectedMessage);
      });
    });
  });
});
