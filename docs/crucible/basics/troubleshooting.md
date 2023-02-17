---
sidebar_position: 2
---

# Troubleshooting

When running Crucible for the first time you almost certainly will encounter a crash, while we can't list every possible
reason it may have crashed, here you can learn how to do some basic troubleshooting and teach you how to properly ask 
for help.


## Reading the Logs

The best (and sometimes only) way to figure out why your server crashed is your logs file, your server latest log can 
be found in `<server dir>/logs/latest.log`, while it can be overwhelming at first there should have all essential 
information to figure out why something is not working.

In most cases when the server crashes it will produce a stacktrace telling what went wrong. However, it's common
for a normal server to have a bunch of harmless and unrelated errors in the console, to help you tell apart what may be
the issue consider the following types of crashes:

* Crash while the server is preparing to go through the startup process (download libraries and check if everything is in place)
  will produce something similar to `Exception in thread "main"` within your logs then the reason for the crash. Here 
  any issue will mostly likely be something with your environment, java installation, bad internet connection or a Crucible bug.

* Crashes during the early stages of startup will produce something similar to `[main/ERROR]: Unable to launch` within your logs then the reason
  for the crash. Early stage crashes may not show anything in the console, with the log file being the oly source of information.
  
* Crashes during mod initialization and while the server is running will result in a crash report, in your logs you can
  see where the crash report was saved, alongside the logs they will give some useful information about your server.

Stacktrace will tell exactly what crashed the server, but not why, yu will mostly likely have to figure out by educated
guesses.

In the case of a mod caused crash, you may see hints to the mod in the stacktrace, once identified you may look
into [Plugin and Mod Compatibility](/docs/crucible/basics/plugin-mod-compat), if the mod is incompatible
and there's no replacement for it the only solution will be removing it entirely.

## Common Issues

Here we will go through possibly common issues you may find that was not directly caused by a mod.

* Server crashed with `Exception in thread "main" java.lang.IncompatibleClassChangeError: Inconsistent constant pool data in classfile for class java/util/stream/Stream. Method 'java.util.stream.Stream of(java.lang.Object[])' at index 226 is CONSTANT_MethodRef and should be CONSTANT_InterfaceMethodRef`
  * You are using an incompatible java version, make sure you are using java 8.

* Server crashed with `The following errors happened while trying to download x.jar`
  * The server failed to download an essential library, from the many reasons it may have failed to download it the main 
    ones will be bad/slow internet connection or missing permission to write to the current directory. We recommend 
    trying to boot the server from somewhere else with a better connection and transfer over the files.
    
* Server crashed with `java.lang.VerifyError`
  * This issue should not occur on newer versions of Crucible (v5.4+), please make sure you are running the latest version.
  * In the case you absolutely need an older version, this issue is caused by coremods generating invalid bytecode,
    classes compiled by java 8 (which we use for Crucible) has a more strict verification check, failing when those
    coremods applies their patch, you can disable the verification check adding `-noverify` in your jvm arguments.



## Asking for Help

In the case you are not able to identify the issue yourself you may have some luck asking in our Discord or opening a 
GitHub issue. Our discord can be found in the navigation bar in this page.

When asking for help, make sure to provide your log file and crash report (if present). 

<!---TODO: Explain how to describe their issues and how to provide information -->

