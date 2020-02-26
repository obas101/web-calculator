

function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}
function equal() {
        let exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    let cl = document.form.textview.value;
    if (cl) {
        document.form.textview.value = "";
    }
}
function pie() {
    let pe = document.form.textview.value;
    if (pe) {
        document.form.textview.value = pe * 3.142;
    }
}

function back() {
    let bck = document.form.textview.value;
    if (bck) {
        document.form.textview.value = bck.substring(0, bck.length-1);
    }
}