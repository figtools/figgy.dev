---
title: Get your Figgy on!
author: Jordan Mance
date: 2020-05-28 20:00:00 +0500
categories: [Figgy, Basics]
tags: [favicon]
toc: false
---

# What's Figgy?

Figgy is a _free_ and _opensource_ application config framework designed to bring simplicity, security, and resilience to 
application config management. Never roll another application to production having forgotten to set that last pesky
config in production. 

Figgy makes it possible to bind your code directly to config versions, thereby enabling you to break builds if configs 
are missing and application deployments are destined to fail.

Figgy makes it easy to set up and control access to across all of your AWS environments and configuration namespaces.
Sound to good to be try? Try our sandbox!

## Why Figgy?

*Out of the box, Figgy comes with all of these features:*

- SSO Integrations with Google Admin Console, OKTA, and AWS
    - MFA is supported and encouraged
    - Figgy ONLY uses temporary credentials. Abandon all AWS access keys!

- An elegant CLI on top of AWS ParameterStore that addresses many ParameterStore limitations:
    - Add / Update / Delete / Edit configurations and more
    - Promote configs from lower to higher environments
    - Share secrets directly to the code that needs them. No more handing DB credentials to some middle man so they can go put them "somewhere".
    - Browse a log that tracks all config changes over time, even for deleted configs.
    - Roll back any configuration, or hierarchy of configurations to *any point in time* (to the second) in the past!
    - Combat config sprawl. Figgy will tell you if you have a config in ParameterStore that you aren't using anymore!

- *Security*
    - Create figgy 'roles' that allow different user types access to different sections of your ParameterStore tree.
    - Easily control access between different configuration trees.
    - Securely share secrets between config trees

- Binding application configs to your code!
    - Easily integrate your CICD process with figgy
    - *BREAK THE BUILD* if the application you're deploying is missing a required config in the environment you're
        deploying to. 
    - Give Developers confidence their code bootstrap properly if Figgy gives the thumbs-up! 

- The Figgy Vault
    - Figgy _only_ generates temporary sessions to AWS, encrypts them, and stores them in the "Figgy Vault"
    - These temporary credentials can be used for local development by decrypting & pulling them from the "Figgy Vault"

- Slack integration
    - Get automated notifications to slack when secrets are changed or updated, and know how made them.


and honestly, a lot more!