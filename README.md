# How to install Google Tag Manager Blocker

## Step 1: Adding the head tag

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

```JavaScript
const GTMBlocker = document.querySelector('meta[name="GTM-Blocker"]');
const GTMBlockerEnabled = GTMBlocker.content === 'enabled'

if (GTMBlockerEnabled) // DO NOT CONNECT TO GOOGLE TAG MANAGER
else // CONNECT TO GOOGLE TAG MANAGER
```
