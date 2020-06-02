---
title: Sandbox

# The Sandbox page
# v2.0
# https://github.com/cotes2020/jekyll-theme-chirpy
# © 2017-2019 Cotes Chung
# MIT License
---

# Figgy Sandbox

The Figgy sandbox is the perfect place to "have a fling" with Figgy without the "long-term" commitment so many tools
require ;). The sandbox consists of 5 AWS accounts with Figgy deployed in its `bastion` account configuration. 

The accounts are wiped every day and have been pre-populated some `Fig Trees` (configuration trees, or configuration heirarchies). 

Want to give *figgy* a try? It's easy!

## Step 1: Install Figgy

   - **Mac:**  `brew install figgy`

   - **Windows & Linux:** `pip install figgy`

## Step 2: Login to the Sandbox

> ```figgy login sandbox```

**Follow the prompts:**

* Choose a user name! 
* Choose your role. (Role dicates access level).
    * `devops` = Most access
    * `dev` = Least access
* Choose the default account. All actions will go against this account if you don't provide the optional `--env {env}` parameter.
             
**Figgy is driven by live events. To demonstrate it, your Sandbox actions will 
be broadcast to everyone on `figgy.dev`, so have some fun!** 


