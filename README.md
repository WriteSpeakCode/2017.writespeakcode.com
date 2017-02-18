# 2017.writespeakcode.com
[2017 Conference Website](2017.writespeakcode.com)

## Contributing

Please take a look at our [contributing](CONTRIBUTE.md) guidelines (coming soon!).

We have volunteers who work on our website to make sure it is up-to-date for all of our events. You are welcome to work on it too!

### Installation

1. `git clone https://github.com/WriteSpeakCode/2017_conf.git`
1. Open `index.html` in your favorite browser
1. Profit!

### Create a pull request

- Create changes on a feature branch
- Submit a pull request to the `master` branch
 - `master` branch must always be deployable, do not merge your branch until accepted by Jessica or team
- Ping the [website team on Slack](https://writespeakcode.slack.com/messages/2017_conf_website/) for comments

### Publish

Our site is deployed to Heroku. If you have rights, you can publish
the site there (ping Jessica if you don't). The workflow is as follows:

#### Deploy to staging:

- `git pull origin master` to get latest update
- `git rebase master` to prevent regression!
- Navigate to [staging deployment page](https://dashboard.heroku.com/apps/writespeakcode2017-staging/deploy/github)
- Scroll to `Manual deploy` & select your branch from `Deploy a GitHub branch`
- Click the `Deploy Branch` button
- Verify that [staging looks & works right](https://writespeakcode2017-staging.herokuapp.com/index.html)
- Ping Jessica [on Slack](https://writespeakcode.slack.com/messages/@jarmstrong/) for acceptance
- Move Trello card to QA column

#### Once your work is verified & accepted:

1. Merge your branch to master on GitHub & delete your branch

1. Push to Heroku production:

 - Navigate to Heroku [pipeline](https://dashboard.heroku.com/pipelines/ebe10265-7105-40ec-b2b0-9b554da09992)
 - Click the `Promote to production...` button
 - Verify the [production website](http://2017.writespeakcode.com/)

1. Move Trello card to Done

1. Celebrate!

### Development Tips

[Eventicka II theme documentation](https://github.com/WriteSpeakCode/2017-raw-template/blob/master/documentation/index.html)

To hide or unhide an element, use `.hidden`.

Make updates to styling in `custom.css` (not `style.css`).

## License

The code is available under the [MIT license](MIT-LICENSE).
