---
title: What's Figgy?
author: Jordan Mance
date: 2019-08-11 00:34:00 +0800
categories: [Basics, Introduction]
tags: [basics, home]
toc: false
---

# What's Figgy?

Figgy is a _free_ and _opensource_ serverless application config framework designed to bring simplicity, security, and resilience to 
application config management. Figgy is built on top of AWS ParameterStore and leverages native AWS constructs such as AWS IAM,
KMS, among other services to ensure a simple and elegant integration with your AWS environment.

> **Never roll another application to production having forgotten to set that last pesky
config in production.**

Figgy makes it possible to **bind your code directly to configurations**. Easily break builds if configs 
are missing and application deployments are destined to fail.

> **Control user access like a champ**

Figgy makes it easy to set up and control access to across all of your AWS environments and configuration namespaces. Consider
your role types and use cases, map them up in a simle config file, and let Figgy do the rest. 

Here are _some_ of Figgy's features.

* Simple role base access control (RBAC) for configuration and AWS identity management. 
* Elegant CLI on top of AWS ParameterStore that addresses many ParameterStore limitations
* Varied SSO integration options with AWS, OKTA, or Google Admin Console
    * Abandon long-term access keys, Figgy ONLY uses temporary credentials.
    * Local AWS STS sessions can generated through SAML authentication
    * MFA supported and encouraged!
    * Abandon all long-term access keys for local or remote use. Do config management right.
* 


Sound to good to be true? Try our sandbox!

 
 
