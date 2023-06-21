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
subTotal=0;

$('#btnAddToCart').click(function () {
    subTotal=0;
    let oItemID = $("#selectItemId").val();
    let oDesc = $("#selectedItemName").val();
    let oUnitPrice = $("#UnitPriceP").val();
    let oQty = $("#QtyP").val();
    let oTotal = oUnitPrice*oQty;

    let newCart = Object.assign({}, cartOb);
    newCart.IID = oItemID;
    newCart.IName = oDesc;
    newCart.IUnitPrice = oUnitPrice;
    newCart.IQty = oQty;
    newCart.ITotal = oTotal;

    //add customer record to the customer array
    cartItemsdb.push(newCart);

    //create row and add text field values
    let row=`<tr>
                    <td>${newCart.IID}</td>
                    <td>${newCart.IName}</td>
                    <td>${newCart.IUnitPrice}</td>
                    <td>${newCart.IQty}</td>
                    <td>${newCart.ITotal}</td>
                   </tr>`;
    //and then append the row to tableBody
    $("#tblCartBody").append(row);

    for (let i = 0; i <= cartItemsdb.length; i++) {
        subTotal+=cartItemsdb[i].ITotal;
        $('#inputTotal').val(parseInt(subTotal));
        console.log(parseInt(subTotal));
    }

});

$('#inputDiscount').keydown(function (event){

    if (event.key==='Enter'){
        if ($('#inputDiscount').val()!=="0"){
            let fullTotal = subTotal-Number($('#inputDiscount').val());

            $('#inputSubTotal').val(fullTotal);
        }
    }

});

$('#inputCash').keydown(function (event){

    if (event.key==='Enter'){
            let balance = Number($('#inputCash').val())-Number($('#inputSubTotal').val());

            $('#inputBalance').val(balance);
    }

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




