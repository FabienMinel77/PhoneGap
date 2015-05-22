(function(){
    var app = angular.module('neoness', [ ]);
	
    /**
     * PlanningCours Controller
     */
    app.controller('PlanningCoursController', function($scope, $http) {
        $scope.field = 'debut';
        $scope.reverse = false;
        
        $scope.club;
        
        $scope.horaire = '7h00';
        $scope.cardio = 'cardio';
        $scope.bienetre = 'bien-etre';
        $scope.muscu = 'muscu';
		
		
        
        //RÃ©cupÃ©ration des cours
        $http.get('http://test.neoness-forme.com/cours_planning_json.php').success(function(response) {
            cours = response;
            //Conversion Json -> Array
            $scope.cours = [];
            angular.forEach(cours, function(element) {
                $scope.cours.push(element);
            });
        });
        
        $scope.filterByDominante = function(cours){
            return (
                cours.dominante === $scope.cardio 
                || cours.dominante === $scope.bienetre 
                || cours.dominante === $scope.muscu
            )
            ;
        };
        
        $scope.filterByHoraire = function(cours) {
            var arr = cours.horaire.split("h");
            var minutes = 60 * parseInt(arr[0]) + parseInt(arr[1]);
            var sarr = $scope.horaire.split("h");
            var sminutes = 60 * parseInt(sarr[0]) + parseInt(sarr[1]);
            
            return minutes >= sminutes;
        };
        
        
        //OrderBy fonctions
    });
    
    
    
    
    //Filtre pour afficher les char html
    app.filter('html',function($sce){
        return function(input){
            return $sce.trustAsHtml(input);
        };
    });
    
})();