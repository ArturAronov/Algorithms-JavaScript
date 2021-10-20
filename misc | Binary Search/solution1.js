const binarySearch=function(arr, search){
	let lowerBound=0;
	let upperBound=arr.length-1;
	while(lowerBound<=upperBound){
		const midpoint=parseInt((upperBound+lowerBound)/2);
		const valueAtMidpoint=arr[midpoint];
		if(search===valueAtMidpoint){
			return `Number ${search} is located in the index ${midpoint}.`;
		}else if(search<valueAtMidpoint){
			upperBound=Math.floor(midpoint-1);
		}else if(search>valueAtMidpoint){
			lowerBound=Math.floor(midpoint+1);
		};
	};
	return `Number ${search} is not found in the array.`;
};

console.log(binarySearch([2,33,56,79,88,103,200,666], 88));
