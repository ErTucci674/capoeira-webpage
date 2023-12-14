/*
Copyright (C) 2023 Alessandro Amatucci Girlanda

This file is part of Capoeira - Website.

Capoeira - Website is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Capoeira - Website is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Capoeira - Website. If not, see
<https: //www.gnu.org/licenses />.
*/

document.addEventListener('DOMContentLoaded', function () {
    // --- SHOP ITEM SELECTION ---

    // Store main item shown in the picture (Berimbau)
    let main_item = document.getElementById('shop-item-berimbau');
    main_item.src = 'pictures/shop/berimbau.jpg';

    // Store all items in one array
    let items = document.querySelectorAll('.shop-item-small');
    items_length = items.length;

    // Reset the opacity of all items except 'parameter'
    let default_opacity = '0.5';
    function set_opacity(active_item) {
        for (let i = 0; i < items_length; i++) {
            let item = document.getElementById(items[i].id);
            if (active_item == i) {
                item.style.opacity = '1';
                continue;
            }
            item.style.opacity = default_opacity;
        }
    }

    // Set initial opacity of the small pictures
    set_opacity(0);

    // Change main picture if one of the smaller ones is selected
    for (let i = 0; i < items_length; i++) {
        document.getElementById(items[i].id).addEventListener('click', function () {
            let item = document.getElementById(items[i].id);
            main_item.src = 'pictures/shop/' + item.name + '.jpg';
            set_opacity(i);
        });
    }

    // --- BUY BUTTONS ---
    // Store all buy buttons IDs in one array
    let buy_buttons = document.querySelectorAll('.buy-button');
    let buy_buttons_length = buy_buttons.length;

    //Store all out-of-stock text IDs in one array
    let buy_text = document.querySelectorAll('.outofstock-text');
    let buy_text_length = buy_text.length;

    for (let i = 0; i < buy_buttons_length; i++) {
        document.getElementById(buy_buttons[i].id).addEventListener('click', function () {
            let buy_button = document.getElementById(buy_buttons[i].id);

            // Find corresponding text id
            let buy_text_id = 'outofstock-' + buy_button.name + '-text';

            // Display text
            document.getElementById(buy_text_id).style.display = 'block';
        });
    }
});