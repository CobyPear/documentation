---
title: Creating a New Project
description: Create a new WordPress project
contributors: [abhisekmazumdar, backlineint]
permalink: decoupled-kit/wordpress/creating-a-new-project
---
# Creating a New Project

## Prerequisites

- Composer (required for CMS backends): [Install Globally](https://getcomposer.org/download/)
- [Generate machine token](https://pantheon.io/docs/machine-tokens#create-a-machine-token) & [Authenticate into Terminus](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus)
- [Install Terminus](https://pantheon.io/docs/terminus/install) (3.0.0 above required)
- Also install the following plugins:
  - `terminus self:plugin:install terminus-build-tools-plugin`
  - `terminus self:plugin:install terminus-power-tools`
  - `terminus self:plugin:install terminus-secrets-plugin`
  - Reload the terminus plugins: `terminus self:plugin:reload`
  - Clear cache for composer: `composer clear-cache`
  - Validate that the required plugins are installed: `terminus self:plugin:list`
- Create [Github Personal access tokens](https://github.com/settings/tokens)
- Create [CircleCI Personal API Tokens](https://app.circleci.com/settings/user/tokens)

## Installation

- Run the `terminus build:project:create` as follows:

  ```
  terminus build:project:create --team='{My Team Name}' --template-repository="git@github.com:pantheon-systems/decoupled-wordpress.git" pantheon-systems/decoupled-wordpress --ci-template='git@github.com:pantheon-systems/advanced-ci-templates' --visibility private {PROJECT_NAME} --stability=dev
  ```

  Replace {PROJECT_NAME} with a Project name for example `decoupled-wordpress`.

  Replace {My Team Name} with your team name - for example `My Agency`. This can also be omitted.

**Note:** This will result in a Github repository being created for this new codebase, a site being created on Pantheon and a CircleCI project being created for automated deployments.

**Note:** This will result in a Github repository being created for this new codebase, a site being created on Pantheon and a CircleCI project being created for automated deployments with the `{PROJECT_NAME}`.
