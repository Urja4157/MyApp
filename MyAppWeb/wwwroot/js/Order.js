var dtable;
/*let dtable = new DataTable('#myTable');*/
$(document).ready(function () {
    var url = window.location.search;
    //var orderType = "all"; // Default value
    //console.log("URL:", url); // Log the URL for debugging
    //if (url.includes("pending")) {
    //    orderType = "pending";
    //} else if (url.includes("approved")) {
    //    orderType = "approved";
    //} else if (url.includes("shipped")) {
    //    orderType = "shipped";
    //} else if (url.includes("underprocess")) {
    //    orderType = "underprocess";
    //}
    //console.log("Order Type:", orderType); // Log the detected order type for debugging
    //OrderTable(orderType);


    if (url.includes("pending")) {
        OrderTable("pending");
    }
    else {
        if (url.includes("approved")) {
            OrderTable("approved");
        }
        else {
            if (url.includes("shipped")) {
                OrderTable("shipped");
            }
            else {
                if (url.includes("underprocess")) {
                    OrderTable("underprocess");
                }
                else {
                    OrderTable("all");
                }
            }
        }
    }
});
function OrderTable(status) {
    dtable = $('#myTable').DataTable({
        "ajax": {
            "url": "/Admin/Order/AllOrders?status=" + status
        },
        "columns": [
            { "data": "name" },
            { "data": 'phone' },
            { "data": "orderStatus" },
            //{"data": "imageUrl"},
            { "data": "orderTotal" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                       
<a href="/Admin/Order/OrderDetails?id=${data}"><i class="bi bi-pencil-square"></i></a>

               
                    `


                }
            }
        ]
    });
}