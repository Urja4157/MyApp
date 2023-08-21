﻿var dtable;
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
            {
                "data": "id",
                "render":function(data){
                    return `
                       
<a href="/Admin/Product/CreateUpdate?id=${data}"><i class="bi bi-pencil-square"></i></a>

                <a asp-action="Delete" asp-controller="category" asp-route-id="@item.Id"><i class="bi bi-trash"></i></a>
                    `
                            
                    
                }
            }
        ]
    });
});