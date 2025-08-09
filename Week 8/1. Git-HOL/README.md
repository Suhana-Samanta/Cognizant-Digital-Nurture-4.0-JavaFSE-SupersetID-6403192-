
# Familiar with Git Commands

## Objectives

This repository was created to practice and become familiar with core Git commands such as:
`git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.

During this hands-on lab, I:

* Set up Git configuration on my machine.
* Integrated `notepad++.exe` with Git and set it as the default editor.
* Added files to a version-controlled repository.

## Prerequisites

* Installed **Git Bash** on my machine.
* Installed **Notepad++** and configured it as my Git editor.

**Note:**

* Created a free account on GitLab (without using Cognizant credentials).
* The work in this repository is adapted from the *1. Git – Hands-On Lab* exercise.

---

## Steps Completed

### 1. Git Configuration

1. Checked Git installation:

   ```bash
   git --version
   ```
2. Configured username and email:

   ```bash
   git config --global user.name "Suhana Samanta"
   git config --global user.email "suhanasamanta2003@gmail.com"
   ```
3. Verified configuration:

   ```bash
   git config --list
   ```

### 2. Integrated Notepad++ as Default Editor

1. Verified Notepad++ runs from Git Bash:

   ```bash
   notepad++
   ```

   Added its path (`C:\Program Files\Notepad++`) to my environment variables.
2. Set Notepad++ as Git’s editor:

   ```bash
   git config --global core.editor "C:/Program Files/Notepad++/notepad++.exe -multiInst -nosession"
   ```
3. Verified the setting:

   ```bash
   git config --global -e
   ```

### 3. Created and Managed the Repository

1. Created the repository folder and initialized Git:

   ```bash
   mkdir MyProject
   cd MyProject
   git init
   ```
2. Created `welcome.txt` with content:

   ```bash
   echo "Welcome to version control" > welcome.txt
   ```
3. Staged the file:

   ```bash
   git add welcome.txt
   ```
4. Committed the file:

   ```bash
   git commit -m "Add welcome.txt"
   ```

### 4. Pushed to Remote Repository

1. Created a new empty repository on GitLab named `GitDemo`.
2. Linked it to my local repository:

   ```bash
   git remote add origin https://gitlab.com/your-username/gitdemo.git
   ```
3. Pushed my local work to the remote:

   ```bash
   git push origin master
   ```

---

This repository now contains the completed lab work for **1. Git – Hands-On Lab** and serves as a record of the steps I followed and executed successfully.

---
