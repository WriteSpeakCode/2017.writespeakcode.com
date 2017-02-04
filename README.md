# 2017.writespeakcode.com
2017 Conference Website

## Contributing

Please take a look at our [contributing](CONTRIBUTE.md) guidelines (coming soon!).

We have volunteers who work on our website to make sure it is up-to-date for all of our events. You are welcome to work on it too!

## Installation

1. `git clone https://github.com/WriteSpeakCode/2017_conf.git`
1. Open `index.html` in your favorite browser
1. Profit!

## Create a pull request

- Create changes on a feature branch
- Submit a pull request to the `master` branch
- Ping `@jarmstrng` in a comment

## Publish

Coming soon!

<!-- Our site is deployed to Heroku. If you have rights, you can publish
the site there.

1. Ensure that your remote names match this guide. `upstream` = the official repository
    and if you have a fork, it should be named `origin`.

    ```
    $ git remote -vv

    origin  git@github.com:<yourname>/2016.writespeakcode.com.git (fetch)
    origin  git@github.com:<yourname>/2016.writespeakcode.com.git (push)
    upstream  git@github.com:WriteSpeakCode/2016.writespeakcode.com.git (fetch)
    upstream  git@github.com:WriteSpeakCode/2016.writespeakcode.com.git (push)
    ```

    If yours don't match above, use `git remote rename <oldname> <newname>` to fix it.

2. Add the Heroku staging and production apps as remotes to your localhost
    git repository:

    ```
    git remote add staging https://git.heroku.com/writespeakcode2016-staging.git
    git remote add production https://git.heroku.com/writespeakcode2016-production.git
    ```

3. Ensure that your master branch is in sync with the upstream GitHub repository,
    and not your fork. If you run into trouble with this, ask on Slack for help.

    You should see that master is tracking `[upstream/master]`.

    ```
    $ git checkout master
    $ git branch -vv

    * master        5194208 [upstream/master]
    ```

4. Ensure that what you are about to push to Heroku is already synchronized to GitHub.

    You should see that your branch is up to date with `upstream/master`.
    ```
    $ git checkout master
    $ git status

    Your branch is up-to-date with 'upstream/master'
    ```

5. Push to the Heroku staging:

    ```
    git push staging master
    ```

6. Verify that the staging site looks right: https://writespeakcode2016-staging.herokuapp.com/

7. Push to Heroku production:

    ```
    git push production master
    ```

8. View the production website at: http://2016.writespeakcode.com/ -->

## License

The code is available under the [MIT license](MIT-LICENSE).

## Tips

[Eventicka II theme documentation](https://github.com/WriteSpeakCode/2017-raw-template/blob/master/documentation/index.html)

To hide or unhide an element, use `.hidden`.

Make updates to styling in `custom.css`.


