export enum Step {
    TASK = "Task",
    MESSAGE = "Message",
    EMOJI = "Emoji",
    COMMIT_TYPE = "CommitType",
}

export namespace Step {
  export function getTitle(type: Step): string {
    switch (type) {
        case Step.TASK:
            return 'Write your task ID';
        case Step.MESSAGE:
            return 'Write your message';
        case Step.EMOJI:
            return 'Do you want emoji? 🤔';
        case Step.COMMIT_TYPE:
            return 'Choose your commit type';
    }
  }
  export function getNumber(type: Step): number {
    switch (type) {
        case Step.COMMIT_TYPE:
            return 1;
        case Step.MESSAGE:
            return 2;
        case Step.TASK:
            return 3;
        case Step.EMOJI:
            return 4;
    }
  }
  export function getPlaceholder(type: Step): string {
    switch (type) {
        case Step.COMMIT_TYPE:
            return '';
        case Step.MESSAGE:
            return '...message';
        case Step.TASK:
            return '...like -> ABC-1234';
        case Step.EMOJI:
            return '';
    }
  }
}
