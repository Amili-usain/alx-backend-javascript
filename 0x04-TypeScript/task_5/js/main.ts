/**
 * An interface representing major credits.
 */
export interface MajorCredits {
  /**
   * The number of credits for a major subject.
   */
  credits: number & { __brand: 'MajorCredits.credits' };
}

/**
 * An interface representing minor credits.
 */
export interface MinorCredits {
  /**
   * The number of credits for a minor subject.
   */
  credits: number & { __brand: 'MinorCredits.credits' };
}

/**
 * A function that sums the credits of two major subjects.
 *
 * @param subject1 - The first major subject.
 * @param subject2 - The second major subject.
 * @returns An object representing the sum of the two major credits.
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

/**
 * A function that sums the credits of two minor subjects.
 *
 * @param subject1 - The first minor subject.
 * @param subject2 - The second minor subject.
 * @returns An object representing the sum of the two minor credits.
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
