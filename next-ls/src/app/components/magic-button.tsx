'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Button, { ButtonProps } from './button';

export default function MagicButton(props: ButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected Error');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Magic button
    </Button>
  );
}
