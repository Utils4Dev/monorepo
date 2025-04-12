/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * Utils4Dev
 * OpenAPI spec version: 1.0
 */
import type { CodeLanguage } from './codeLanguage';
import type { CodeWithReactionsDtoReactions } from './codeWithReactionsDtoReactions';
import type { UserDto } from './userDto';

export interface CodeWithReactionsDto {
  language: CodeLanguage;
  reactions: CodeWithReactionsDtoReactions;
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  content: string;
  private: boolean;
  author: UserDto;
}
