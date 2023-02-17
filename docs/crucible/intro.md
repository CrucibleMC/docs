---
sidebar_position: 1
---

# Introduction

Crucible is a Thermos fork with several improvements. Where Thermos is a Forge+Bukkit hybrid, 
aiming to bring the Bukkit API for forge servers.

We aim to close the gaps left by Thermos and extend the support for those still on 1.7.10 by adding support for 
long broken mods and plugins and fix serious bugs as they appear.
Developed by server owners for server owners, with experience from our personal servers to deliver an (almost*) stable software
capable of handling populated servers.

\* due to the nature of Bukkit API and how forge works, true stability is virtually impossible, see [Things That May Concern You](#things-that-may-concern-you)

## Getting Started
Crucible is a forge jar **replacement** and not a mod, its installation and execution method is similar to standalone
Bukkit jars, see [Server Setup and Configuration](/docs/crucible/basics/server-setup) for detailed instructions on 
setting up your Crucible server. 

[Crucible - Basics](/docs/category/crucible---basics) should cover all your needs for your first time using Crucible, 
if you still need help we recommend you joining our Discord server (you can find a link on the navigation bar).

## Things That May Concern You

Hybrids have a bad reputation due to the required amount of internal forge changes to add Bukkit support, those changes 
may and **will** break certain mods and plugins, while some may be fixed by forks it's always a trial and error to get something working.

Crucible, therefore Thermos and Cauldron are **not** a fully compliant bukkit implementation, most simple plugins that
relies only on the Bukkit API may work fine however there are no guarantees a plugin using internal craftbukkit/minecraft
classes will work, and they may need explicit Crucible support

Bukkit API is not flexible, and a lot of plugins are designed to handle modded content and may behave unexpectedly.

For a list of mod compatibility status, you can click [here](/docs/crucible/basics/plugin-mod-compat).