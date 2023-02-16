# ✨ Contributing to this project

First of all, thanks for taking the time to contribute! 🎉👍

## 📝 Cloning the project & creating PR

### Fork the repository

Click on the fork button on the top of the page. This will create a copy of this repository in your account.

### Clone the forked repository

```bash
 git clone https://github.com/<your-username>/frontend-resources.git
```

or if use the github cli

```bash
gh repo clone <your-username>/frontend-resources.git
```

### Navigate to the project directory

```bash
cd frontend-resources
```

### Create a new branch (naming convention: type-description-issueNo)

Kindly give your branch a more descriptive name like `docs-contributing-guide-2` instead of `patch-1`.

You could follow this convention. Some ideas to get you started:

- Feature Updates: `feat-<brief 2-3 words-Description>-<ISSUE_NO>`

- Bug Fixes: `fix-<brief 2-3 words-Description>-<ISSUE_NO>`

- Documentation: `docs-<brief 2-3 words-Description>-<ISSUE_NO>`

- And so on...

To create a new branch, use the following command:

```bash
git checkout -b your-branch-name
```

### Make the necessary changes

### Stage your changes and commit

```bash
git add . # Stages all the changes
git commit -m "<your_commit_message>"
```

Your commit message should be something which gives concise idea of the issue you are solving.

We implement the Conventional Commits specification for commit messages. This specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```bash
<type>(optional scope): <description>
```

If you are not sure about how to structure your commit message, you can use the following command:

```bash
npm run commit
```

### Push your local commits to the remote repository

```bash
git push origin your-branch-name
```

**8.** Create a new [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from `your-branch-name`

🎉 Congratulations! You've made your first pull request! Now, you should just wait until the maintainers review your pull request.
