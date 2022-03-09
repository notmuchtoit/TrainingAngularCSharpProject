# Getting Started

This is a sample project. The general CRUD operation works, it requires you to have a local SQL Server DB. To run (once you make sure you have a local MSSQL instance) simply click the Green "PLAY" button on VS to run both the angular and api code at once.

There are various things that work currently:

-   The app lets you add/update/delete a run.
-   The app persists this data into the database.
-   The app uses Angular on the front end.
-   The app uses the angular forms module.
-   The app uses C# for the API layer to talk to the database.

Things that we can improve:

-   Look and feel, maybe use bootstrap or Kendo UI to improve the look/layout of the app.
-   Possibly change to Angular Reactive Forms (we use these in some of our apps.)
-   Prevent saving erroneous data, front end forms validation would work wonders.
-   Extra points, server side validation to prevent any external actors from adding data via the API.
-   Add some form of reporting so that you can query a list of dates to return your runs.
-   Validate all calculations that currently exist.
-   Add any features you wish to improve the app.
-   Add user accounts to allow for multiple users in the app. Would recommend using OATH2 to utitlize an existing provider, such as Active Directory to authenicate. Then use mechanisms in the app to authorize the user to see specific data.
