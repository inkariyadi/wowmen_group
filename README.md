# Wowmen Group Project

## How to Run Application

Run the development server:
```
yarn dev
```

Build package:
```
yarn build
```

Run production build:
```
yarn start
```

## Stack & Library used
1. Next.js & React.js
2. Eslint

## Git Flow - Feature
1. Base branch : `develop`
3. Create new branch for every pages. There is no naming format but `page/page-name` is a recommended format.
4. If the page is too big, please divide the page into sub-page, each with different branch.
5. After finishing a page, create a pull request and assign other teammate to review the code. 
6. PR Format : `[Page] <name of page>` for page and `[Feature] <name of feature>`.
7. After PR approved, merge to : `develop` using `git merge squash`.

## Git Flow - Release
1. If the commits in develop are ready for production, 
2. Create pull request. The master branch is protected, so you have to create pull request & get reviewed first
3. After request approved, merge to : `master` using `git merge commit`.

## Git Flow - Hotfix
1. If the production code has bug, create new branch. There is no naming format but `hotfix/issue-name` is a recommended format.
2. Base branch : `master`
3. Create pull request. The master branch is protected, so you have to create pull request & get reviewed first
4. After request approved, merge to : `master` using `git merge commit`.

