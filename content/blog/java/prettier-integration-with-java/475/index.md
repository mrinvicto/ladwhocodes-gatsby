---
title: How to auto format your Java codebase before commit
date: "2022-01-06T22:12:03.284Z"
excerpt: When you are working with a big team where everyone has their own code formatting preferences, it becomes very difficult to have consistent formatting across your codebase. This is very common with Java projects as there are tons of options for IDEs too. So, let's get our hands dirty and try to implement provision for auto code format for Java using prettier and git hooks.
meta_title: How to use prettier to format your Java codebase?
meta_description: Prettier is a code formatter that can be used to format your code. Learn to integrate it to your Java codebase via hooks and format your code everytime before pushing it to github.
meta_keywords: "How to fix flutter SDK not found error, Flutter SDK not found, Flutter SDK error Android Studio"
---

When you are working with a big team where everyone has their own code formatting preferences, it becomes very difficult to have consistent formatting across your codebase. This is very common with Java projects as there are tons of options for IDEs too and each one has its own formatting engine.

Without having consistent code fomatting across codebase, your team can run into one major issue - Increased modified lines of code in PRs as others' code is getting formatted as per your formatting preference. This make reviewing PRs very difficult and bugs might slip through as reviewer got overwhelmed by seeing so many lines of changes and skipped to review the new changes made.

Today, let try to solve this problem by implementing auto code formatting using **Google Java Format** and git pre commit hooks. Before we move forward, if you are unaware of what Git Pre-Commit Hooks are, spend sometime reading about them here: Git Pre-Commit Hooks De-Mystified.

To simplify our lives we will be using a maven plugin called [Git Code Format Maven Plugin](https://github.com/Cosium/git-code-format-maven-plugin) by Cosium which provided both Google Java Format & Git Hooks in-built. All you have to is add the plugin to your pom.xml file and you are done.

```xml
<build>
  <plugins>
    <plugin>
      <groupId>com.cosium.code</groupId>
      <artifactId>git-code-format-maven-plugin</artifactId>
      <!-- Specify the version you want in your project -->
      <version>3</version>
      <executions>
        <!-- On commit, format the modified java files -->
        <execution>
          <id>install-formatter-hook</id>
          <goals>
            <goal>install-hooks</goal>
          </goals>
        </execution>
        <!-- On Maven verify phase, fail if any file
        (including unmodified) is badly formatted -->
        <execution>
          <id>validate-code-format</id>
          <goals>
            <goal>validate-code-format</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```

Once, you have added this plugin. Go to the Maven menu and run the `git-code-format:install-hooks` hook which will install the git pre-commit hook.

And this is all you had to do. Now, make some formatting changes to your code and commit it. Its will get formatted before its committed and you will have a clean codebase.
