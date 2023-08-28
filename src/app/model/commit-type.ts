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
        return 'new feature for the user, not a new feature for build script';
      case CommitType.FIX:
        return 'bug fix for the user, not a fix to a build script';
      case CommitType.DOCUMENTATION:
        return 'changes to the documentation';
      case CommitType.STYLE:
        return 'formatting, missing semi colons, etc; no production code change';
      case CommitType.REFACTOR:
        return 'refactoring production code, eg. renaming a variable';
      case CommitType.TEST:
        return 'adding missing tests, refactoring tests; no production code change';
      case CommitType.CHORE:
        return 'regular code maintenance and updating grunt tasks etc; no production code change (eg: change to .gitignore file or .prettierrc file)';
      case CommitType.BUILD:
        return 'build related changes, for updating build configuration, development tools or other changes irrelevant to the user (eg: npm related/ adding external dependencies/ podspec related)';
      case CommitType.PERFORMANCE:
        return 'code change that improves performance';
      case CommitType.UNDEFINED:
        return '';
    }
  }
}
