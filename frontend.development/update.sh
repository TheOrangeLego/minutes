#!/bin/bash

# extract dirtyness conveying messages from local repo status
GIT_STATUS_DIRTYNESS=$(git status | grep -E 'Untracked|not staged')
# determine whether the directory is dirty or not
if [[ -n $GIT_STATUS_DIRTYNESS ]]; then
  DIRTY_DIR=true
  # notify the user
  echo 'Detected dirty directory. Storing local changes to temp commit...'
  # create commit with all local changes
  git add . && git commit -m '[tmp] - local changes'
else
  DIRTY_DIR=false
fi

# pull and rebase from the latest commits
git pull origin master --rebase
# status of repo after rebasing
GIT_STATUS_REBASE=$(git status | grep -E 'nothing to commit')
# determine if rebase was successful
if [[ -n $GIT_STATUS_REBASE ]]; then
  echo 'Rebase complete.'
else
  echo 'There were some issues when rebasing. Undoing new updates. Might want to manually update this.'
  # abort the rebase process
  git rebase --abort
fi

# uncommit any temporary changes committed before the rebase
if $DIRTY_DIR; then
  git reset HEAD^
fi
# exit message
echo "You are good to go!!"
