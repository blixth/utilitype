import { megaBytes } from '../../../src/units/filesize/mega-bytes';
import { expect } from '../../expect-helper';

describe('megaBytes', () => {
  context('when given 1 kB', () => {
    it('returns 0.001 MB', () => {
      expect(megaBytes({ kB: 1 })).to.eql(0.001);
    });
  });

  context('when given 2 MB', () => {
    it('returns 2 MB', () => {
      expect(megaBytes({ MB: 2 })).to.eql(2);
    });
  });

  context('when given 3 GB', () => {
    it('returns 3000 MB', () => {
      expect(megaBytes({ GB: 3 })).to.eql(3000);
    });
  });

  context('when given 4 TB', () => {
    it('returns 4000000 MB', () => {
      expect(megaBytes({ TB: 4 })).to.eql(4000000);
    });
  });
});
