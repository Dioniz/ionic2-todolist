# Todo List

A to-do list application that will run on our Android or IOS device.

* Use local storage locally store information for our applications.
* Use of the ionic framework 2.
* Use of services that affect local storage.
* Control styles using Angular.
* Handling information through services (update, delete, insert and select) to local storage.
* Use of impure pipes to make filters.
* Among other interesting things.

## Ionic view

For use the ionic view to deploy our application:

1. Login into apps.ionic.io/login and go to your dashboard. Create the app and copy the app id
2. In ionic.config.json change the app_id param
3. Run `ionic upload`
    in the app folder
4. Download ionic view app in your mobile device.

## Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

## Platforms

Run `cordova platform add ios` or `cordova platform add android` to add the platforms
Run `cordova platform ls` to check your current set of platforms.

## Build

Run `cordova build` to build the project for all platforms. You can optionally limit the scope of each build to specific platforms: `cordova build ios` / `cordova build android`.

## Run

Run `cordova emulate android`  to rebuild the app and view it within a specific platform's emulator.
Alternately, you can plug the handset into your computer and test the app directly running `cordova run android`.