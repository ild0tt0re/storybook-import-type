import { render } from '@testing-library/react';

import Three from './three';

describe('Three', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Three />);
    expect(baseElement).toBeTruthy();
  });
});
