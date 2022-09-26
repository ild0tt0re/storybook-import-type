import { render } from '@testing-library/react';

import Four from './four';

describe('Four', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Four />);
    expect(baseElement).toBeTruthy();
  });
});
