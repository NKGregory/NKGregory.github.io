import { getJSON, getLocation } from 'utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100';

import QuakesController from './QuakesController.js';

const NewQuakesController = new QuakesController('#quakeList');
NewQuakesController.init();