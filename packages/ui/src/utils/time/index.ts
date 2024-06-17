/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

/**
 * util to conver nano to seconds
 * @param nano
 * @returns seconds
 */
export const nanoToSeconds = (nano: number) => nano / 1000000000;

/**
 * Util to convert seconds to days
 * @param seconds
 * @returns days
 */
export const secondsToDays = (seconds: number) => seconds / (3600 * 24);
