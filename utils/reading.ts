export const READING_LENGTH_THRESHOLDS = {
  briefMaxChars: 3000,
  moderateMaxChars: 5500,
} as const;

export type ReadingLength = 'brief' | 'moderate' | 'long';

const readingLengthLabels: Record<ReadingLength, string> = {
  brief: 'Leitura breve',
  moderate: 'Leitura moderada',
  long: 'Leitura longa',
};

export function getCharacterCount(text: string) {
  return text.replace(/\s+/g, ' ').trim().length;
}

export function getReadingLength(text: string) {
  const characterCount = getCharacterCount(text);

  if (characterCount <= READING_LENGTH_THRESHOLDS.briefMaxChars) {
    return {
      characterCount,
      key: 'brief' as const,
      label: readingLengthLabels.brief,
    };
  }

  if (characterCount <= READING_LENGTH_THRESHOLDS.moderateMaxChars) {
    return {
      characterCount,
      key: 'moderate' as const,
      label: readingLengthLabels.moderate,
    };
  }

  return {
    characterCount,
    key: 'long' as const,
    label: readingLengthLabels.long,
  };
}
