var FroggiApp = window.FroggiApp || {};

FroggiApp.FroggiView = Backbone.View.extend({
    tagName: 'li',
    className: 'fav',
    template: _.template($('#fav-template').html()),

    events: {
         'click .delete': 'delete_fav',
         'click .see-more': 'show_fav'
    },


    //delete favorite
    //this.$el is jquery representation of new <li>
    delete_fav: function(e) {
        e.preventDefault();

        //confirm if actually want to delete
        if (confirm('Are you sure you want to delete this project?')) {
            this.model.destroy();
            //then delete
            this.$el.slideUp('fast', function() {
                this.remove();
            });
        }
    },
    //show more of favorite
    show_fav: function(e){
        e.preventDefault();

        //find hidden elements and show/hide again
        this.$el.find('.hide').slideToggle();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
