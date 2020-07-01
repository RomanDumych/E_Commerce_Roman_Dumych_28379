function nameCheck1() {

    var x;

    var warningName1 = false;
    var messName1 = false;

    var name_a = document.getElementById("dropdownName1");
    var messName1 = document.getElementById("errorMessName1");

    var validName1 = 'admin';

    if (name_a.value == '' || name_a.value != validName1) { //brak imienia
        warningName1 = true;
    } else if (name_a.value == 'admin') { //wszystko działa
        warningName1 = false;
    }

    if (warningName1 == false) { //wszystko działa
        name_a.style.border = '2px solid green';
        messName1.className = 'd-none';

        x = true;
    } else if (warningName1 == true) { //brak imienia
        name_a.style.border = '2px solid red';
        messName1.style.fontSize = '12px';
        messName1.className = 'd';

        x = false;
    }
    return x;
}

function nameCheck2() {

    var y;

    var warningName2 = false;
    var messName2 = false;

    var name_b = document.getElementById("dropdownName2");
    var messName2 = document.getElementById("errorMessName2");

    var validName2 = 'root';

    if (name_b.value == '' || name_b.value != validName2) { //brak imienia
        warningName2 = true;
    } else if (name_b.value == 'root') { //wszystko działa
        warningName2 = false;
    }

    if (warningName2 == false) { //wszystko działa
        name_b.style.border = '2px solid green';
        messName2.className = 'd-none';

        y = true;
    } else if (warningName2 == true) { //brak imienia
        name_b.style.border = '2px solid red';
        messName2.style.fontSize = '12px';
        messName2.className = 'd';

        y = false;
    }
    return y;
}

function allCheck() {
    var name1 = nameCheck1();
    var name2 = nameCheck2();
    var root = document.getElementById("sub");

    if (name1 == true && name2 == true) {
        root.disabled = 0;
        console.log('Success');
    } else {
        console.log('Błędny login lub hasło');
    }
}
