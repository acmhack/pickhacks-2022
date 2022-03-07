# Hack
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[View Live](https://mstacm.org) |


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contributing](#contributing)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
+ [Git](https://git-scm.com/download/)

### Installation
 
1. Clone the mstacm.org repository using Git Bash:
    ```bash
    git clone 
    ```




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to
be learn, inspire, and create. Any contributions you make are **greatly
appreciated**.

We use a pattern known as [Github Flow](https://guides.github.com/introduction/flow/). Click that link to learn more.

### ACM Hack Dev
**One-time set up:**

2. Clone the mstacm.org repository
    ```bash
    git clone https://github.com/sigdotcom/mstacm.org.git
    ```
**Every feature:**
1. Update your local master branch 
    ```bash
    git switch master # "git checkout master" if git < 2.23
    git pull master
    ```
2. Create your branch
    ```bash
    git switch -c feature/<feature-name>
    ```
    > where `<feature-name>` is replaced with a short description of
    your feature (ex. `admin-permission-tool` for a feature adding a new tool to admin-web)

    Name your commits with `feature/` or `hotfix/` at the beginning depending on the content of the branch. (ex. `feature/new-icons`, `hotfix/icon-render-glitch`)
  
3. Add and commit your Changes 
    ```bash
    git add file1 file2 ... # only add relevant files
    git commit -m 'Add some great specific and well described features' # After the "-m" goes the commit message
    ```
    > Read [this article about good commit messages] to maintain good quality commits
4. Push to the remote branch
    ```bash
    git push origin feature/<feature-name>
    ```
5. [Open a Pull Request on Github]
6. Grab a new issue to work on and start from the top!

<!-- Branch Rules --> 
## Editing Branch Rules
A branch rule must have the same name as a branch in order for it to work correctly.


<!-- LICENSE -->
## License

Distributed under the MPL-2.0 License. See `LICENSE` for more information.


