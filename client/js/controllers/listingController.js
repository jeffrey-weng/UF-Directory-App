angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function(listing) {
	  /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
	 
	 Listings.create(listing).then(function(response){
	 },function(error){console.log('Unable to add listing:', error);
    });
	
	
			$scope.listings.push({
				code: listing.code,
				name: listing.name,
				address: listing.address
			});
			$scope.listingForm.$setPristine();
			$scope.listingForm.$setUntouched();

			alert("Listing successfully added.");

			$scope.newListing = {};

	
	
	
    };

    $scope.deleteListing = function(id) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
	   
	   Listings.delete(id).then(function(response){ 
	 
	 
	   },function(error){
		   console.log('Unable to delete listing:',error);
		   console.log(id);
    });
	
	var index = 0;

			while ($scope.listings[index]._id != id)
				index++;

			$scope.listings.splice(index, 1);

	
	
	};

    $scope.showDetails = function(code) {
	
			var index = 0;

			while ($scope.listings[index].code != code)
				index++;

	$scope.detailedInfo = $scope.listings[index];

	  
	  
	  
    };
  }
]);