(function(){
    var app = angular.module('neoness', [ ]);
	
    /**
     * PlanningCours Controller
     */
    app.controller('PlanningCoursController', function($scope, $http) {
        $scope.field = 'debut';
        $scope.reverse = false;

        //RÃ©cupÃ©ration des cours
        $http.get('http://test.neoness-forme.com/cours_planning_json.php').success(function(response) {
            cours = response;
            //Conversion Json -> Array
            $scope.cours = [];
            angular.forEach(cours, function(element) {
                $scope.cours.push(element);
            });
        });
        

    });
    
    //Filtre pour afficher les char html
    app.filter('html',function($sce){
        return function(input){
            return $sce.trustAsHtml(input);
        };
    });
    
})();