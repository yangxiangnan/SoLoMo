DocHead.setTitle('SoLoMo')

DocHead.addMeta({
  name: 'viewport',
  content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
})

Meteor.startup(function () {
  Meteor.subscribe('users:all')
})
