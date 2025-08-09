

# Git-HOL 2 — Using .gitignore to Ignore Unwanted Files

## Objectives

This repository update was made to demonstrate how to:

* Explain the purpose of `.gitignore`.
* Configure `.gitignore` to ignore unwanted files and folders in a Git repository.

In this hands-on lab, I:

* Implemented a `.gitignore` file to exclude `.log` files and a `log` folder from version control.
* Verified that these files and folders were ignored in the working directory and not staged for commits.

---

## Prerequisites

Before starting this lab, I had:

* A working Git environment set up.
* Notepad++ integrated as the default Git editor.
* An existing Git repository in my local system linked to a remote repository in GitLab.

---

## Steps Completed

### 1. Created Test Files to Ignore

Inside my Git repository (`GitDemo`), I created:

```bash
echo "This is a log file" > debug.log
mkdir log
echo "This is inside the log folder" > log/test.txt
```

This gave me one `.log` file and a `log` directory with a sample text file.

---

### 2. Created and Configured `.gitignore`

I created the `.gitignore` file:

```bash
touch .gitignore
```

Then opened it in Notepad++ and added:

```
*.log
log/
```

This configuration ignores:

* Any file ending in `.log`.
* The entire `log` directory and its contents.

---

### 3. Verified `.gitignore` Behavior

After saving `.gitignore`, I ran:

```bash
git status
```

The `.log` file and `log/` folder were not listed as untracked files, confirming they were ignored.

---

### 4. Committed `.gitignore` to the Repository

I staged and committed `.gitignore`:

```bash
git add .gitignore
git commit -m "Add .gitignore to ignore .log files and log folder"
```

---

### 5. Pushed to Remote Repository

Finally, I pushed the change to GitLab:

```bash
git push origin master
```

The `.gitignore` file is now in the remote repository, ensuring `.log` files and the `log` folder are excluded from future commits.

---

## Outcome

By completing this lab, I successfully configured Git to ignore specific file types and directories, ensuring cleaner version control and preventing unwanted files from being tracked.

---
