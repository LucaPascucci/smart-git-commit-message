export enum CommitType {
  FEATURE = 'Feature',
  FIX = 'Fix',
  DOCUMENTATION = 'Documentation',
  STYLE = 'Style',
  REFACTOR = 'Refactor',
  TEST = 'Test',
  CHORE = 'Chore',
  BUILD = 'Build',
  PERFORMANCE = 'Performance',
  UNDEFINED = '',
}

export namespace CommitType {
  export function toCommitPrefix(type: CommitType): string {
    switch (type) {
      case CommitType.FEATURE:
        return 'feat:';
      case CommitType.FIX:
        return 'fix:';
      case CommitType.DOCUMENTATION:
        return 'docs:';
      case CommitType.STYLE:
        return 'style:';
      case CommitType.REFACTOR:
        return 'refactor:';
      case CommitType.TEST:
        return 'test:';
      case CommitType.CHORE:
        return 'chore:';
      case CommitType.BUILD:
        return 'build:';
      case CommitType.PERFORMANCE:
        return 'perf:';
      case CommitType.UNDEFINED:
        return '';
    }
  }

  export function getEmoji(type: CommitType): string {
    switch (type) {
      case CommitType.FEATURE:
        return '✨';
      case CommitType.FIX:
        return '🐛';
      case CommitType.DOCUMENTATION:
        return '📝';
      case CommitType.STYLE:
        return '💄';
      case CommitType.REFACTOR:
        return '♻️';
      case CommitType.TEST:
        return '🧪';
      case CommitType.CHORE:
        return '🔧';
      case CommitType.BUILD:
        return '👷';
      case CommitType.PERFORMANCE:
        return '⚡️';
      case CommitType.UNDEFINED:
        return '';
    }
  }

  export function getDescription(type: CommitType): string {
    switch (type) {
      case CommitType.FEATURE:
        return 'New feature for the user \nNot a new feature for build script';
      case CommitType.FIX:
        return 'Bug fix for the user \nNot a fix to a build script';
      case CommitType.DOCUMENTATION:
        return 'Changes to the documentation';
      case CommitType.STYLE:
        return 'Formatting, missing semi colons, etc; \nNo production code change';
      case CommitType.REFACTOR:
        return 'Refactoring production code \nEg. renaming a variable';
      case CommitType.TEST:
        return 'Adding missing tests, refactoring tests; \nNo production code change';
      case CommitType.CHORE:
        return 'Regular code maintenance and updating grunt tasks etc; \nNo production code change (eg: change to .gitignore file or .prettierrc file)';
      case CommitType.BUILD:
        return 'Build related changes, for updating build configuration, development tools or other changes irrelevant to the user. \nEg: npm related/ adding external dependencies/ podspec related';
      case CommitType.PERFORMANCE:
        return 'Code change that improves performance';
      case CommitType.UNDEFINED:
        return '';
    }
  }
}
