import { bytes } from '../../src/units/filesize/bytes';
import { expect } from '../expect-helper';

describe('bytes', () => {
  context('when given 1 kB', () => {
    it('returns 1000 bytes', () => {
      expect(bytes({ kB: 1 })).to.eql(1000);
    });
  });

  context('when given 2 MB', () => {
    it('returns 2000000 bytes', () => {
      expect(bytes({ MB: 2 })).to.eql(2000000);
    });
  });

  context('when given 3 GB', () => {
    it('returns 3000000000 bytes', () => {
      expect(bytes({ GB: 3 })).to.eql(3000000000);
    });
  });

  context('when given 4 TB', () => {
    it('returns 4000000000000 bytes', () => {
      expect(bytes({ TB: 4 })).to.eql(4000000000000);
    });
  });
});
