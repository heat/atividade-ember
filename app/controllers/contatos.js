import Ember from 'ember';

//Comentário para teste no git

export default Ember.Controller.extend({
 	isFiltered: false,

 	contatosFiltrado: Ember.computed('isFiltered',
 		function() {
 		let isFiltered = this.get('isFiltered');
 		if(isFiltered) {
 			return this.get('model').filter(
 				function(e) {
 					return e.nome === "joao";
 				});
 		}
 		return this.get('model');
 	}),
 	actions: {

 		toggleFilter() {

 			this.toggleProperty("isFiltered");
 		}
 	}
});
