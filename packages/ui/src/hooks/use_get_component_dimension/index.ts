/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { useEffect, useRef, useState } from 'react';

/**
 * Nav hook helper to get the component height
 */
export const useGetComponentDimension = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref?.current?.clientHeight) {
      setHeight(ref.current.clientHeight);
    }
    if (ref?.current?.clientWidth) {
      setWidth(ref.current.clientWidth);
    }
  }, [ref?.current?.clientHeight]);

  return {
    width,
    height,
    ref,
  };
};
