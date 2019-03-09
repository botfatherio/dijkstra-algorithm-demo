var graph = {
	north_adams: {
		greenfield: 38,
		pittsfield: 22
	},
	pittsfield: {
		north_adams: 22,
		lee: 12
	},
	lee: {
		pittsfield: 12,
		springfield: 41
	},
	springfield: {
		lee: 41,
		northampton: 19,
		worcester: 55
	},
	northampton: {
		springfield: 19,
		greenfield: 21
	},
	greenfield: {
		north_adams: 38,
		northampton: 21,
		fitchburg: 49,
		worcester: 61
	},
	fitchburg: {
		greenfield: 49,
		worcester: 27
	},
	worcester: {
		fitchburg: 27,
		greenfield: 61,
		springfield: 55
	}
};

var origin = Config.getValue("origin");
var destination = Config.getValue("destination");

var waypoints = Algorithm.dijkstra(graph, origin, destination);

Helper.log("The shortest path from", origin, "to", destination, "is:");
Helper.log(waypoints);