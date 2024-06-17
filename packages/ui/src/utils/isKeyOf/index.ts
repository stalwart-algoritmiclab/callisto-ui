/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

function isKeyOf<T extends object>(key: string, obj: T): key is keyof T & string {
  return key in obj;
}

export default isKeyOf;
