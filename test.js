class network {
	constructor(num_elements, start) { 
		document.write("So far");
		this.num_elements = num_elements;
		this.cost;
		for (var i = 0; i < num_elements; i++) this.cost.push([]);

		var costs_committed = false;
		var commit_costs = document.createElement("button");
		commit_costs.innerHTML = "Commit costs";
		var append_to = document.getElementById("costs_question");
		append_to.appendChild(commit_costs);
		commit_costs.onclick = function() {
			var inputs;
			var costs_index = -1;
			inputs = document.getElementById("costs_question").getElementsByTagName("input");
			for (var i = 0; i < inputs.length; i++) {
				if (i % num === 0) costs_index++;
				costs[costs_index].push(inputs[i].value);
			}
			costs_committed = true;
			}
		}

//		var change_it = document.getElementById("submit");
//		change_it.onclick = function() {
//			if (costs_committed) {
//				n.calculate_shortest_path();
//				n.print_shortest_paths();
//			}
//		}
//		for (var i = 0; i < num_elements; i++) {
//			this.cost.push([]);
//printed in html	console.log("Enter the cost from the one point to the other. If there is no direct connection, enter 'x'");
//			for (var j = 0; j < this.num_elemnts; j++) {
//				const output = document.createElement('p');
//				output.innerHTML = "Cost from " + (i + 1) + " to " + (j + 1) + ":";
//				const input = document.createElement('input');
				
//printed in html		console.log("Cost from " + i + " to " + j + ":");
//				var response = require('readline');
//				var response = document.getElementById("Response").value;
//				if (response === 'x' || response === 'X') response = 99999;
//				this.cost[i].push(response);
			}
		}

//		this.cost[0][0] = 99999;
//		this.cost[0][1] = 10;
//		this.cost[0][2] = 99999;
//		this.cost[0][3] = 50;
//		this.cost[1][0] = 10;
//		this.cost[1][1] = 99999;
//		this.cost[1][2] = 30;
//		this.cost[1][3] = 20;
//		this.cost[2][0] = 99999;
//		this.cost[2][1] = 30;
//		this.cost[2][2] = 99999;
//		this.cost[2][3] = 40;
//		this.cost[3][0] = 50;
//		this.cost[3][1] = 20;
//		this.cost[3][2] = 40;
//		this.cost[3][3] = 99999;

//		var okay_input = false;
//		while (!okay_input) {
////printed in html	console.log("Starting-Node: ");
//			document.getElementById("Call").innerHTML = "Starting-Node: ";
//			var response = await document.getElementById("Response").value;
////in html		var response = require('readline');
//			if (response < this.num_elements) okay_input = true;
//			else /*printed in html console.log("Please enter a valid input.")*/
//				document.getElementById("Call").innerHTML = "Please enter a valid input.";
//		}
		this.start_node = start;
		this.dist = [];
		for (var i = 0; i < num_elements; i++)
			this.dist.push(this.cost[this.start_node - 1][i]);
		this.visited = [];
		for (var i = 0; i < this.num_elements; i++) this.visited.push(false);
		this.visited[this.start_node - 1] = true;
	}

	calculate_shortest_path() {
		for (var i = 0; i < this.num_elements; i++) {
			var min = 99999;
			var v = 0;
			for (var j = 0; j < this.num_elements; j++) 
				if (this.dist[j] < min && this.visited[j] === false) {
					min = this.dist[j];
					v = j;
				}

			this.visited[v] = true;

			for (var j = 0; j < this.num_elements; j++) 
				if (this.cost[v][j] + this.dist[v] < this.dist[j])
					this.dist[j] = this.cost[v][j] + this.dist[v];
		}
	}

	print_shortest_paths() {
		for (var i = 0; i < this.num_elements; i++) {
			if (i !== this.start_node - 1) {
				var output = document.createElement("p");
				output.innerHTML = "Shortest path from " + this.start_node + " --> " + (i + 1) + ":  " + this.dist[i];
				document.body.appendChild(output);
			}
				
					//"Shortest path from " + this.start_node + " --> " + (i + 1) + ":  " + thisdist[i];
				//printed in html console.log("Shortest path from " + this.start_node + " --> " + (i + 1) + ":  " + this.dist[i]);
		}
	}
}
