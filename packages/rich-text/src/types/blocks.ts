import { BLOCKS as CONTENTFUL_BLOCKS } from '@contentful/rich-text-types';

export const BLOCKS = {
  ...CONTENTFUL_BLOCKS,
  MARKER: 'marker' as const,
} as const;

// 必要に応じて型定義を拡張
export type BLOCKS = typeof BLOCKS[keyof typeof BLOCKS];
