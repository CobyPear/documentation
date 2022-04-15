---
title: Migrate a Drupal 9 Site from Another Platform
subtitle: Introduction
description: 
categories: [develop]
tags: [code, launch, migrate, site, updates]
contributors: [wordsmither]
reviewed: "2021-03-31"
layout: guide
showtoc: true
permalink: docs/guides/drupal-9-unhosted
anchorid: drupal-9-unhosted
editpath: drupal-9/drupal-9-unhosted/01-introduction.md
---

This guide will show you how to migrate a site that meets the following criteria to Drupal 9:

|Criteria|Value
|---|---
|Pantheon Hosted| No
|Composer Managed| No

<Alert title="Note" type="info" >

The code samples in this document assume you are not using a [nested docroot](https://pantheon.io/docs/nested-docroot). If are, **you should prepend the paths in this document with "web" as needed**.

</Alert>

## Requirements

You must confirm that you meet the following requirements before continuing:

- Your site is based on the [drupal/legacy-project](https://github.com/drupal/legacy-project/blob/9.1.x/composer.json) template or a similar non-composer managed structure.

- You are able to run `drush` commands in the existing site.

- You are able to check out your existing site codebase into your local machine.

- The site does not use a nested docroot.

- The site does not use another package and library manager, like [Ludwig](https://www.drupal.org/project/ludwig).

- You have a brand new Drupal Pantheon site to host your project.

## Before You Begin

- Ensure the trusted host setting is up-to-date. Refer to the [Trusted Host Setting](/settings-php#trusted-host-setting) documentation for more information.

- Set the dev environment site mode to Git to be able to perform Git operations on this environment.

- Clone your site to your local environment using the `git clone` command from the dashboard.


<Alert title="Note"  type="info" >

Commit history: The steps in this process migrate a site, so the new site will no longer maintain its existing commit history.

</Alert>

## See Also

- [Composer Fundamentals and Workflows](/guides/composer)