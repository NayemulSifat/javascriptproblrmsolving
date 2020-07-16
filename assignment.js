
// assignment 01: Converting Feet To Mile.

function feetToMile(feet) {
	if (feet > 0) {
		result = (feet*0.000189393939);
	} 
	return result;
}




// assignment 02: woodcalculator.


function woodCalculator(chair, table, bed){

	var result = (chair*1)+(table*3)+(bed*5);

	return result;

}




// assignment 03: brickCalculator.


function brickCalculator(floor){
	var firstTenFloor  = 150000;
	var middleTenFloor = 120000;
	if( floor <=10 ){
		result = floor*15000;

	}
	else if( floor <=20 ){
		result = firstTenFloor+((floor-10)*12000);

	}
	else{
		result = firstTenFloor+middleTenFloor+((floor-20)*10000);
	}
	return result;
}





// assignment 04: find the smallest string/name.

function tinyFriend(name){

	var smallest = name[0];

	for (var i = 0; i < name.length; i++) {
		var currentsmallestname = name[i];
		if ( currentsmallestname.length < smallest.length ){
			smallest = currentsmallestname;
		}

	}
	return smallest;
}
