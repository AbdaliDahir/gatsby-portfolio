---
title: How to switch between different java versions in Linux?
date: "2020-05-28T22:40:32.169Z"
image: './java-versions.webp'
imageCredit: java
time: 10
categories: ['java', 'linux', 'tricks']
description: "To switch between different Java versions on Linux, you can follow these steps:"
---


There are two ways to switch between different Java versions in Linux:

## Using the update-java-alternatives command

The update-java-alternatives command is a utility that is used to manage the default Java version on your system. 

1 - To check the Java versions installed on your system by opening a terminal and running the command:

```
update-java-alternatives --list
```
OR
```
sudo update-alternatives --config java
```

Executing this command will display a list of installed Java JDKs and JREs

```
  Selection    Path                                             Priority   Status
-----------------------------------------------------------------------------
* 0            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1101       auto mode
  1            /opt/java/jdk1.8.0_211/bin/java                  1          manual mode
  2            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1101       manual mode
```

2 - To switch to a different Java version, you can use the following command:

```
sudo update-java-alternatives --set <path-to-java-version>
```

Replace <u>path-to-java-version</u> with the name or path of the desired Java version.

For example, to switch to Java 11, you would use the following command:

```
sudo update-java-alternatives --set /usr/lib/jvm/java-11-openjdk-amd64
```


3 - Verify that the switch was successful by running the command:

``` java -version ```

This command will display the currently active Java version.



## Using SDKMan.

[https://github.com/sdkman/sdkman-cli](https://github.com/sdkman/sdkman-cli) SDKMan is a tool that can be used to install and manage multiple Java versions on your system. To switch to a different Java version using SDKMan, you can use the following command:

```
sdk use java <version>
```
For example, to switch to Java 11, you would use the following command:

```
sdk use java 11
```

I hope this helps!
