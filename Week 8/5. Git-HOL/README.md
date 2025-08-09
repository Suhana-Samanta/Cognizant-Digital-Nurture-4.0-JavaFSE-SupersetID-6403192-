

# 5.Git-HOL — Clean Up and Push to Remote Git

## Objectives

This lab demonstrated:

* How to ensure the master branch is clean before pushing.
* How to synchronize with the remote repository.
* How to push pending changes to the remote.

In this hands-on lab, I:

* Verified the state of the master branch.
* Pulled the latest changes from the remote repository.
* Pushed pending local commits to GitLab.
* Confirmed the changes were reflected remotely.

---

## Prerequisites

Before starting this lab, I had:

* A working Git environment.
* An existing local repository linked to a remote GitLab repository.
* Completed previous Git hands-on labs, including Git-T03-HOL\_002.

---

## Steps Completed

### 1. Verified Master Was in Clean State

```bash
git checkout master
git status
```

### 2. Listed All Available Branches

```bash
git branch -a
```

### 3. Pulled Latest Changes from Remote Master

```bash
git pull origin master
```

### 4. Pushed Pending Changes to Remote

```bash
git push origin master
```

### 5. Verified Changes on GitLab

I opened the GitLab repository in my browser, refreshed the page, and confirmed that the latest commits were visible in the repository's commit history.

---

## Outcome

By completing this lab, I successfully synchronized my local repository with the remote GitLab repository, ensuring that all changes from Git-T03-HOL\_002 were committed and pushed. The remote repository now reflects the latest updates from my local master branch.

---

