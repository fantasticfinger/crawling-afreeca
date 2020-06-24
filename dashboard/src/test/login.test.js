import React from 'react';
import { render } from '@testing-library/react';
import LoginComponent from 'components/auths/login';
import { BaseProvider } from 'contexts/BaseContext';

describe('<LoginComponent/>', () => {
  it('inputs render', () => {
    const { getByPlaceholderText } = render(
      <BaseProvider>
        <LoginComponent />
      </BaseProvider>,
    );
    getByPlaceholderText('아이디');
    getByPlaceholderText('비밀번호');
  });
});
