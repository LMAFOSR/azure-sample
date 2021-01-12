const footer = (currentPage, pageCount) => {
    return {
        "stack": [
        {
            "text": 
            "Report content is based on current data version referenced.  Any performance claculations are offered soley as guidelines.  Actual unit performance will depend on your operating conditions.",
            "fontSize": 7
        },
        {
            "columns": [
                {
                    "text": (new Date()).toLocaleString('en-US', {month: "long", day: "2-digit", year: "numeric"}),
                    "fontSize": 7
                },
                {
                    "text": "Page " + currentPage,
                    "fontSize": 7,
                    "alignment": "right"
                }
            ],
            "margin": [0,4,0,0]
        }],
        "margin": [30,10,30,0],	
    };
}

export default () => {
    return { footer }
}