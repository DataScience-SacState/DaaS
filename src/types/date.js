var date = function(params) {
    var minSplit = params.min.split("-"); // 2016-07-01 -> ["2016", "07", "01"]
    var maxSplit = params.max.split("-");
    
    var minDate = new Date();
    minDate.setYear(~~minSplit[0]);
    minDate.setMonth(~~minSplit[1]);
    minDate.setDate(~~minSplit[2]);
    
    var maxDate = new Date();
    maxDate.setYear(~~maxSplit[0]);
    maxDate.setMonth(~~maxSplit[1]);
    maxDate.setDate(~~maxSplit[2]);
    
    var randomTimestamp = Math.ceil(Math.random() * (maxDate.getTime() - minDate.getTime()))+minDate.getTime();
    
    var resultDate = new Date(randomTimestamp);
    
    return resultDate.toISOString().split("T")[0];
};

module.exports = date;