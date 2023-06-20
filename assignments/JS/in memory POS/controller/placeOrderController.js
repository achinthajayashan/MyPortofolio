$('#selectCusId').change(function(){ //the event here is change

    for (let i=0; i<customerdb.length; i++){
        if ($(this).val() == customerdb[i].id){
            $('#SelectedCusName').val(customerdb[i].name)
            break;
        }
    }
});

$('#selectItemId').change(function(){ //the event here is change

    for (let i=0; i<itemdb.length; i++){
        if ($(this).val() == itemdb[i].code){
            $('#selectedItemName').val(itemdb[i].description);
            $('#UnitPriceP').val(itemdb[i].unitPrice);
            $('#QtyOnHndP').val(itemdb[i].qtyOnHand)
            break;
        }
    }
});

var cartItemsDB=[];

$('#btnAddToCart').click(function () {
    let oItemID = $("#selectItemId").val();
    let oDesc = $("#selectedItemName").val();
    let oUnitPrice = $("#UnitPriceP").val();
    let oQty = $("#QtyP").val();
    let oTotal = oUnitPrice*oQty;

    let cartOb = {
        IID: oItemID,
        IName: oDesc,
        IUnitPrice: oUnitPrice,
        IQty: oQty,
        ITotal:oTotal
    }

    //add customer record to the customer array
    cartItemsDB.push(cartOb);


    //create row and add text field values
    let row=`<tr>
                    <td>${cartOb.IID}</td>
                    <td>${cartOb.IName}</td>
                    <td>${cartOb.IUnitPrice}</td>
                    <td>${cartOb.IQty}</td>
                    <td>${cartOb.ITotal}</td>
                   </tr>`;
    //and then append the row to tableBody
    $("#tblCartBody").append(row);
});
function loadCusIds() {
    var optionCus = '';
    for (var i = 0; i < customerdb.length; i++) {
        optionCus += '<option value="' + customerdb[i].id + '">' + customerdb[i].id + '</option>';
    }
    $('#selectCusId').append(optionCus);
}

function loadItemIds() {
    var optionItem = '';
    for (var i = 0; i < itemdb.length; i++) {
        optionItem += '<option value="' + itemdb[i].code + '">' + itemdb[i].code + '</option>';
    }
    $('#selectItemId').append(optionItem);
}




