var FroggiApp = window.FroggiApp || {};

FroggiApp.FroggiModel = Backbone.Model.extend({
    defaults: {
    	stitch_count: 0,
        title: 'Untitled',
        measurement: 0,
        technique: 'Straight',
        needle_type: '',
        needle_size: 0,
        yarn_weight: 0,
        stitch_type: ''
    }
});
