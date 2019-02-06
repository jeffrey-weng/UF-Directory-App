angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get(window.location.origin+'/api/listings');
    },
	
	create: function(listing) {
	  return $http.post(window.location.origin+'/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
	   
	   return $http.delete(window.location.origin+'/api/listings/'+id);

    },
	
	
	 put: function(id) {
	  
	   
	   return $http.put(window.location.origin+'/api/listings/'+id);

    }
	

  };

  return methods;
});
