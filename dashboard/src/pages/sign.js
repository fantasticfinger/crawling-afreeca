/* eslint-disable import/no-unresolved */
import React from 'react';
import AuthTemp from 'components/auths/commons/authTem';
import SignComponent from 'components/auths/sign';

export default function loginPage() {
  return (
    <AuthTemp>
      <SignComponent />
    </AuthTemp>
  );
}
