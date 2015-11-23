# Angular Mountains

#### [LIVE DEMO](http://schuchard.github.io/angular-mountains-filter/)

This presentation covers the usage of `filter` with a text input, dropdown and `orderBy` with a toggle button.

This works through the `index.html`. The complete code can be found in the `_index.html` file.

Helpful information about [filter](https://docs.angularjs.org/api/ng/filter/filter) and [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)

## Step 1
Pass in the module name defined on line 1 in the `main.js`.

```
<!-- define the module -->
<html lang="en" ng-app="mountains">
```

Here we'll pass in `mountains` in the `ng-app=""`

## Step 2
Define the controller that will contain the properties we'll place on the `$scope`. This app has a controller called `demoCtrl`. Within this `div` we'll have access to anything placed on `$scope` inside the `demoCtrl`.

```
<div class='container' ng-controller='demoCtrl'>
```

## Step 3
Display each mountain in our mountains array. Use `ng-repeat` passing in a name to represent each single instance in our `mountains` array. In this case `mountain` will represent each object in the array of `mountains`.

The value for `query` will be set in the `input` on line 20 and `orderProp` will be set on line 23. The value for `reverse` will be toggled on line 29.

```
<li ng-repeat="mountain in mountains | filter:query | orderBy:orderProp:reverse">
```

Now that a value has been set to represent each mountain in our array of `mountains` we'll access the properties on the object.

```
<p>{{mountain.key}} - {{mountain.val}} - {{mountain.location}}</p>
```

## Step 4
Define the model to be used for filtering when typing. `ng-model` sets a property on `$scope` represented by the name passed to it, in this case `query`. It's value will update in real time as the input box is used.

```
<input ng-model="query">
```

# Step 5
Define the model to be used for ordering from the dropdown. Again `ng-model ` will create property on `$scope` called `orderProp`. It's value will come from the `value` attribute on the `option` elements.

```
<select ng-model="orderProp">
  <option value="key">Peak</option>
  <option value="val">Height</option>
  <option value="location">Location</option>
</select>
```

## Step 6
Add a counter to display the matched results from filter. Access the length of the matched objects in the array with the `legnth` property. We're using Angular's data binding with the `{{}}` passing in our collection of `mountains`, using a `filter` on it with the value from `query`. Then we access the `length` property to determine how many matches were returned.

```
<p class="filtered-total">{{(mountains|filter:query).length}}</p>
```

## Step 7
Add the reverse button functionality for toggling the order of results on the page. In our `demoCtrl` controller we have a method `sort` that inverses the value of `reverse`.

```
$scope.sort = function () {
  $scope.reverse = !$scope.reverse;
};
```

Using the `ng-click` directive on our `button` we can pass in `sort()`. This will call the `sort` method any time the `button` is clicked. By toggling `true` or `false` as the second parameter with an `orderBy`, Angular will inverse the order of the items that are being repeated.  

```
<button class="pure-button pure-button-primary" ng-click="sort()">Reverse</button>
```



