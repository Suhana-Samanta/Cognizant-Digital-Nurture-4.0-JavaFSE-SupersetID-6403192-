

# 3.Git-HOL — Branching, Merging, deleting branch

## Objectives

This lab demonstrated:

* How to create and work with branches in Git.
* How to merge a branch into the master branch.
* How to view differences between branches both in the command line and using the P4Merge tool.

In this hands-on lab, I:

* Constructed a new branch, made changes in it, and merged it into the master branch.
* Used P4Merge to visualize the differences between branches.
* Deleted the branch after the merge to maintain a clean repository.

---

## Prerequisites

Before starting this lab, I had:

* A working Git environment.
* P4Merge installed and configured as the default diff tool in Git.
* An existing Git repository linked to a remote repository in GitLab.

---

## Steps Completed

### 1. Created and Checked Out a New Branch

I created a new branch named `GitNewBranch` and switched to it:

```bash
git branch GitNewBranch
git checkout GitNewBranch
```

### 2. Made Changes in the Branch

I created a new file and committed it to the branch:

```bash
echo "This is a file in the new branch" > branchfile.txt
git add branchfile.txt
git commit -m "Add branchfile.txt in GitNewBranch"
```

### 3. Switched Back to Master

I switched to the master branch:

```bash
git checkout master
```

### 4. Compared Differences (Command Line)

I viewed the differences between the master branch and the new branch:

```bash
git diff master GitNewBranch
```

### 5. Compared Differences (Visual with P4Merge)

I configured Git to use P4Merge and ran:

```bash
git config --global diff.tool p4merge
git config --global difftool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
git config --global difftool.prompt false
git difftool master GitNewBranch
```

This opened a graphical window showing the changes side-by-side.

### 6. Merged the Branch into Master

I merged the changes from `GitNewBranch` into `master`:

```bash
git merge GitNewBranch
```

### 7. Viewed the Merge History

I used:

```bash
git log --oneline --graph --decorate
```

to see the branch and merge history in a visual graph format.

### 8. Deleted the Branch

After confirming the merge was successful, I deleted the branch:

```bash
git branch -d GitNewBranch
```

---

## Outcome

By completing this lab, I successfully demonstrated branching and merging in Git, both via command line and using the P4Merge visual tool. The master branch now contains the changes from `GitNewBranch`, and the branch was deleted to keep the repository tidy.

