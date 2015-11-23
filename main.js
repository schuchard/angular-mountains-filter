angular.module('mountains', [])

  .controller('demoCtrl', demoCtrl)
  .factory('MountainList', MountainList);

//-- Controller
function demoCtrl($scope, MountainList) {

  // promise from service
  MountainList.query()
    .then(function (results) {
      $scope.mountains = results;
    }, function(err) {
      console.log('err');
    });

  $scope.orderProp = 'key';

  $scope.sort = function () {
    $scope.reverse = !$scope.reverse;
  };
}

//-- MounatinList Service
function MountainList($q) {
  return {
    query: query
  };
  function query() {
    return $q.when([
      { "key": "Grays Peak", "val": "14,270’", "location": "Front Range" },
      { "key": "Torreys Peak", "val": "14,267’", "location": "Front Range" },
      { "key": "Mt. Evans", "val": "14,264’", "location": "Front Range" },
      { "key": "Longs Peak", "val": "14,255’", "location": "Front Range" },
      { "key": "Pikes Peak", "val": "14,110’", "location": "Front Range" },
      { "key": "Mt. Bierstadt", "val": "14,060’", "location": "Front Range" },
      { "key": "Quandary Peak", "val": "14,265’", "location": "Tenmile Range" },
      { "key": "Mt. Lincoln", "val": "14,286’", "location": "Mosquito Range" },
      { "key": "Mt. Cameron", "val": "14,238’", "location": "Mosquito Range" },
      { "key": "Mt. Bross", "val": "14,172’", "location": "Mosquito Range" },
      { "key": "Mt. Democrat", "val": "14,148’", "location": "Mosquito Range" },
      { "key": "Mt. Sherman", "val": "14,036’", "location": "Mosquito Range" },
      { "key": "Mt. Elbert", "val": "14,433’", "location": "Sawatch Range" },
      { "key": "Mt. Massive", "val": "14,421’", "location": "Sawatch Range" },
      { "key": "Mt. Harvard", "val": "14,420’", "location": "Sawatch Range" },
      { "key": "La Plata Peak", "val": "14,336’", "location": "Sawatch Range" },
      { "key": "Mt. Antero", "val": "14,269’", "location": "Sawatch Range" },
      { "key": "Mt. Shavano", "val": "14,229’", "location": "Sawatch Range" },
      { "key": "Mt. Princeton", "val": "14,197’", "location": "Sawatch Range" },
      { "key": "Mt. Belford", "val": "14,197’", "location": "Sawatch Range" },
      { "key": "Mt. Yale", "val": "14,196’", "location": "Sawatch Range" },
      { "key": "Tabeguache Peak", "val": "14,155’", "location": "Sawatch Range" },
      { "key": "Mt. Oxford", "val": "14,153’", "location": "Sawatch Range" },
      { "key": "Mt. Columbia", "val": "14,073’", "location": "Sawatch Range" },
      { "key": "Missouri Mountain", "val": "14,067’", "location": "Sawatch Range" },
      { "key": "Mt. of the Holy Cross", "val": "14,005’", "location": "Sawatch Range" },
      { "key": "Huron Peak", "val": "14,003’", "location": "Sawatch Range" },
      { "key": "Castle Peak", "val": "14,265’", "location": "Elk Mountains" },
      { "key": "Maroon Peak", "val": "14,156’", "location": "Elk Mountains" },
      { "key": "Capitol Peak", "val": "14,130’", "location": "Elk Mountains" },
      { "key": "Snowmass Mountain", "val": "14,092’", "location": "Elk Mountains" },
      { "key": "Conundrum Peak", "val": "14,060’", "location": "Elk Mountains" },
      { "key": "Pyramid Peak", "val": "14,018’", "location": "Elk Mountains" },
      { "key": "North Maroon Peak", "val": "14,014’", "location": "Elk Mountains" },
      { "key": "Uncompahgre Peak", "val": "14,309’", "location": "San Juans" },
      { "key": "Mt. Wilson", "val": "14,246’", "location": "San Juans" },
      { "key": "El Diente Peak", "val": "14,159’", "location": "San Juans" },
      { "key": "Mt. Sneffels", "val": "14,150’", "location": "San Juans" },
      { "key": "Mt. Eolus", "val": "14,083’", "location": "San Juans" },
      { "key": "Windom Peak", "val": "14,082’", "location": "San Juans" },
      { "key": "Sunlight Peak", "val": "14,059’", "location": "San Juans" },
      { "key": "Handies Peak", "val": "14,048’", "location": "San Juans" },
      { "key": "North Eolus", "val": "14,039’", "location": "San Juans" },
      { "key": "Redcloud Peak", "val": "14,034’", "location": "San Juans" },
      { "key": "Wilson Peak", "val": "14,017’", "location": "San Juans" },
      { "key": "Wetterhorn Peak", "val": "14,015’", "location": "San Juans" },
      { "key": "San Luis Peak", "val": "14,014’", "location": "San Juans" },
      { "key": "Sunshine Peak", "val": "14,001’", "location": "San Juans" },
      { "key": "Blanca Peak", "val": "14,345’", "location": "Sangre de Cristo Range" },
      { "key": "Crestone Peak", "val": "14,294’", "location": "Sangre de Cristo Range" },
      { "key": "Crestone Needle", "val": "14,197’", "location": "Sangre de Cristo Range" },
      { "key": "Kit Carson Peak", "val": "14,165’", "location": "Sangre de Cristo Range" },
      { "key": "Challenger Point", "val": "14,081’", "location": "Sangre de Cristo Range" },
      { "key": "Humboldt Peak", "val": "14,064’", "location": "Sangre de Cristo Range" },
      { "key": "Culebra Peak", "val": "14,047’", "location": "Sangre de Cristo Range" },
      { "key": "Ellingwood Point", "val": "14,042’", "location": "Sangre de Cristo Range" },
      { "key": "Mt. Lindsey", "val": "14,042’", "location": "Sangre de Cristo Range" },
      { "key": "Little Bear Peak", "val": "14,037’", "location": "Sangre de Cristo Range" }
    ]);
  }
}