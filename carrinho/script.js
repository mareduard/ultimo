$(document).ready(function() {
    var cart = [];

    function displayCart() {
        $('#cart-items').empty();
        var total = 0;
        cart.forEach(function(item, index) {
            total += parseFloat(item.price);
            $('#cart-items').append(`
                <li class="list-group-item">
                    ${item.name} - R$${item.price.toFixed(2)}
                    <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remover</button>
                </li>
            `);
        });
        $('#cart-total').text(total.toFixed(2));
    }

    $('.add-to-cart').click(function() {
        var id = $(this).data('id');
        var name = $(this).data('name');
        var price = $(this).data('price');
        cart.push({ id, name, price });
        displayCart();
    });

    $(document).on('click', '.remove-from-cart', function() {
        var index = $(this).data('index');
        cart.splice(index, 1);
        displayCart();
    });

    $('#clear-cart').click(function() {
        cart = [];
        displayCart();
    });

    $('#finalize-purchase').click(function() {
        if (cart.length > 0) {
            alert('Compra finalizada com sucesso!');
            cart = [];
            displayCart();
        } else {
            alert('O carrinho está vazio.');
        }
    });
});

