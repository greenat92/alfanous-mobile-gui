# Contributing to alfanous-mobile-gui

Hi! Thanks for your interest in contributing to [Alfanous](http://www.alfanous.org/).
In this document we'll try to summarize everything that you need to know to
do a good job.

## Git and our Branching model

### Git

We use [Git](http://git-scm.com/) as our [version control
system](http://en.wikipedia.org/wiki/Revision_control), so the best way to
contribute is to learn how to use it and put your changes on a Git repository.
There's a plenty of documentation about Git -- you can start with the [Pro Git
book](http://git-scm.com/book/).

### Forks + GitHub Pull requests

We use the famous
[gitflow](http://nvie.com/posts/a-successful-git-branching-model/) to manage our
branches.

Summary of our git branching model:
- Fork the desired repository on GitHub to your account;
- Clone your forked repository locally
  (`git clone git@github.com:your-username:repository-name.git`);
- Create a new branch off of `develop` with a descriptive name (for example:
  `feature/search-bar-android`, `hotfix/bug-on-android-app`). You can
  do it switching to `develop` branch (`git checkout develop`) and then
  creating a new branch (`git checkout -b name-of-the-new-branch`);
- Do many small commits on that branch locally (`git add files-changed`,
  `git commit -m "Add some change"`);
- Add your name to the `AUTHORS.md` file as a contributor;
- Push to your fork on GitHub (with the name as your local branch:
  `git push origin branch-name`);
- Create a pull request using the GitHub Web interface (asking us to pull the
  changes from your new branch and add to our `develop` branch);
- Wait for comments.


### Tips

- Write [helpful commit
  messages](http://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message).
- Anything in the `develop` branch should be deployable (no failing tests).
- Never use `git add .`: it can add unwanted files;
- Avoid using `git commit -a` unless you know what you're doing;
- Check every change with `git diff` before adding them to the index (stage
  area) and with `git diff --cached` before commiting;
- Make sure you add your name to our list of contributors;
- If you have push access to the main repository, please do not commit directly
  to `develop`: your access should be used only to accept pull requests; if you
  want to make a new feature, you should use the same process as other
  developers so you code will be reviewed.

## Code Guidelines

- follow [Airbnb JavaScript Style Guide() {};](https://github.com/airbnb/javascript);
- We're using [Jest](https://facebook.github.io/jest/) to write our javascript code.
- Write tests for your new features (please see "Tests" topic below);
- Always remember that [commented code is dead
  code](http://www.codinghorror.com/blog/2008/07/coding-without-comments.html);
- All `#TODO` comments should be turned into issues (use our
  [GitHub issue system]());
- Run all tests before pushing (just execute `npm test`) so you will know if your
  changes broke something;

## Tests

- You should write tests for every feature you add or bug you solve in the code.
- For a better design of your code, we recommend using a technique called
[test-driven development](https://en.wikipedia.org/wiki/Test-driven_development),
where you write your tests **before** writing the actual code that implements
the desired feature.

# Discussion

[Our Channel](https://gitter.im/Alfanous-team/alfanous)

Please feel free to contact us through the [alfanous-mobile-gui maintainer](https://github.com/LBenzahia/alfanous-mobile-gui/blob/develop/AUTHORS.md#original-authors) mail list if
you have any questions or suggestions. Every contribution is very welcome!

**Happy hacking! (;**
