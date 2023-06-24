import type { Heading } from 'nextra';
import React from 'react';
import config from '../../theme.config';
export default function Header() {
  return (
    <div>
      <p>{config.siteName}</p>
    </div>
  );
}
