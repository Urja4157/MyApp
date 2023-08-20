var dtable;
/*let dtable = new DataTable('#myTable');*/
$(document).ready(function () {
    dtable = $('#myTable').DataTable({
        "ajax": {
            "url": "/Admin/Product/AllProducts"
        },
        "columns": [
            { "data": "name" },
            { "data": 'description' },
            { "data": "price" },
            //{"data": "imageUrl"},
            {"data": "category.name"},
        ]
    });
});