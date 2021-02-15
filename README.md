# How to install Google Tag Manager Blocker

## Step 1: Adding the meta tag

Add in the following meta tag into your HTML head:

```HTML
<meta name="GTM-Blocker" content="disabled" />
```

You can see how this would look here:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- ADD GTM-Blocker meta tag here just like this -->
  <meta name="GTM-Blocker" content="disabled" />
  <!-- ADD GTM-Blocker meta tag here just like this -->
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

## Step 2: Adding the JavaScript

Now wherever you connect to GTM in your codebase, simply add the following conditional logic. It will check whether GTM-Blocker is enabled, and hence determine whether to connect to Google Tag Manager.

- When you switch on GTM-Blocker, it will not connect to Google Tag Manager.
- By default, or when you switch off GTM-Blocker, it will connect to Google Tag Manager.

```JavaScript
const GTMBlocker = document.querySelector('meta[name="GTM-Blocker"]');
const GTMBlockerEnabled = GTMBlocker.content === 'enabled'

if (GTMBlockerEnabled) // DO NOT CONNECT TO GOOGLE TAG MANAGER
else // CONNECT TO GOOGLE TAG MANAGER
```
