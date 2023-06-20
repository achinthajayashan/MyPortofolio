$('#btnSaveCustomer').click(function () {
    saveCustomer();
    console.log(customerdb);
    clearCusTextFields();
    getAllCustomers();
})

function saveCustomer() {
    let customerID = $("#InputCID").val();
    let customerName = $("#InputName").val();
    let customerAddress = $("#inputAddress").val();
    let customerContact = $("#inputContact").val();

    let newCustomer = Object.assign({}, customer);
    newCustomer.id = customerID;
    newCustomer.name = customerName;
    newCustomer.address = customerAddress;
    newCustomer.contact = customerContact;

    //add customer record to the customer array
    customerdb.push(newCustomer);

}


function getAllCustomers() {
    $("#tableBodyCus").empty();

    //get all customers
    for (let i = 0; i < customerdb.length; i++) {
        let id = customerdb[i].id;
        let name = customerdb[i].name;
        let address = customerdb[i].address;
        let contact = customerdb[i].contact;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${contact}</td>
                    </tr>`;

        $("#tableBodyCus").append(row);

        //invoke this method every time
        // we add a row // otherwise click
        //event will not work
        bindTrEvents();
    }
}

function bindTrEvents() {
    $('#tableBodyCus>tr').click(function () {
        //get the selected rows data
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let contact = $(this).children().eq(3).text();

        //set the selected rows data to the input fields
        $("#InputCID").val(id);
        $("#InputName").val(name);
        $("#inputAddress").val(address);
        $("#inputContact").val(contact);
    })
}


function clearCusTextFields() {
    $('#InputCID').val('');
    $('#InputName').val('');
    $('#inputAddress').val('');
    $('#inputContact').val('');
}


