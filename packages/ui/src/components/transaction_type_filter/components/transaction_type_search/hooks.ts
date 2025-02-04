/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';

export const useTxTypeSearch = (callback: (value: string, clear?: () => void) => void) => {
  const [value, setValue] = useState('');
  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e?.target?.value ?? '';
    setValue(newValue);
    callback(newValue, clear);
  };

  const handleOnSubmit = () => {
    callback(value, clear);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const shift = e?.shiftKey;
    const isEnter = e?.keyCode === 13 || e?.key === 'Enter';
    if (isEnter && !shift) {
      e.preventDefault();
      callback(value, clear);
    }
  };

  const clear = () => {
    setValue('');
  };

  return {
    handleOnChange,
    handleOnSubmit,
    value,
    handleKeyDown,
  };
};
