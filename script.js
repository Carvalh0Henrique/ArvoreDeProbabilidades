function updateAllChildren() {
    const root = parseFloat(document.getElementById('root').value);
    let child1 = parseFloat(document.getElementById('child1').value);
    let child2 = parseFloat(document.getElementById('child2').value);
    let child3 = parseFloat(document.getElementById('child3').value);
    let child4 = parseFloat(document.getElementById('child4').value);

    const total = child1 + child2 + child3 + child4;
    const ratio = root / total;

    document.getElementById('child1').value = (child1 * ratio).toFixed(2);
    document.getElementById('child2').value = (child2 * ratio).toFixed(2);
    document.getElementById('child3').value = (child3 * ratio).toFixed(2);
    document.getElementById('child4').value = (child4 * ratio).toFixed(2);

    updateGrandchildren();
}

function updateChild(childNumber) {
    const root = parseFloat(document.getElementById('root').value);
    let child1 = parseFloat(document.getElementById('child1').value);
    let child2 = parseFloat(document.getElementById('child2').value);
    let child3 = parseFloat(document.getElementById('child3').value);
    let child4 = parseFloat(document.getElementById('child4').value);

    let totalChildValues = child1 + child2 + child3 + child4;

    if (totalChildValues > root) {
        const difference = totalChildValues - root;
        switch (childNumber) {
            case 1:
                child1 -= difference;
                break;
            case 2:
                child2 -= difference;
                break;
            case 3:
                child3 -= difference;
                break;
            case 4:
                child4 -= difference;
                break;
        }
    }

    document.getElementById('child1').value = child1.toFixed(2);
    document.getElementById('child2').value = child2.toFixed(2);
    document.getElementById('child3').value = child3.toFixed(2);
    document.getElementById('child4').value = child4.toFixed(2);

    updateGrandchildren();
}

function updateGrandchildren() {
    const child1 = parseFloat(document.getElementById('child1').value);
    const child2 = parseFloat(document.getElementById('child2').value);
    const child3 = parseFloat(document.getElementById('child3').value);
    const child4 = parseFloat(document.getElementById('child4').value);

    const custo1 = (child1 * 3.5).toFixed(2);
    const custo2 = (child2 * 3.5).toFixed(2);
    const custo3 = (child3 * 3.5).toFixed(2);
    const custo4 = (child4 * 3.5).toFixed(2);

    const receita1 = (child1 * 7 * 0.7).toFixed(2);
    const receita2 = (child2 * 7 * 0.7).toFixed(2);
    const receita3 = (child3 * 7 * 0.7).toFixed(2);
    const receita4 = (child4 * 7 * 0.7).toFixed(2);

    const lucro1 = (receita1 - custo1).toFixed(2);
    const lucro2 = (receita2 - custo2).toFixed(2);
    const lucro3 = (receita3 - custo3).toFixed(2);
    const lucro4 = (receita4 - custo4).toFixed(2);

    document.getElementById('custo1').innerText = 'R$ ' + custo1;
    document.getElementById('receita1').innerText = 'R$ ' + receita1;
    document.getElementById('lucro1').innerText = 'R$ ' + lucro1;

    document.getElementById('custo2').innerText = 'R$ ' + custo2;
    document.getElementById('receita2').innerText = 'R$ ' + receita2;
    document.getElementById('lucro2').innerText = 'R$ ' + lucro2;

    document.getElementById('custo3').innerText = 'R$ ' + custo3;
    document.getElementById('receita3').innerText = 'R$ ' + receita3;
    document.getElementById('lucro3').innerText = 'R$ ' + lucro3;

    document.getElementById('custo4').innerText = 'R$ ' + custo4;
    document.getElementById('receita4').innerText = 'R$ ' + receita4;
    document.getElementById('lucro4').innerText = 'R$ ' + lucro4;

    const custo1Chuva = (child1 * 3.5).toFixed(2);
    const custo2Chuva = (child2 * 3.5).toFixed(2);
    const custo3Chuva = (child3 * 3.5).toFixed(2);
    const custo4Chuva = (child4 * 3.5).toFixed(2);

    const receita1Chuva = (child1 * 7 * 0.7).toFixed(2);
    const receita2Chuva = (child2 * 7 * 0.7).toFixed(2);
    const receita3Chuva = (child3 * 7 * 0.7).toFixed(2);
    const receita4Chuva = (child4 * 7 * 0.7).toFixed(2);

    const lucro1Chuva = (receita1Chuva - custo1).toFixed(2);
    const lucro2Chuva = (receita2Chuva - custo2).toFixed(2);
    const lucro3Chuva = (receita3Chuva - custo3).toFixed(2);
    const lucro4Chuva = (receita4Chuva - custo4).toFixed(2);

    document.getElementById('custo1Chuva').innerText = 'R$ ' + custo1Chuva;
    document.getElementById('custo2Chuva').innerText = 'R$ ' + custo2Chuva;
    document.getElementById('custo3Chuva').innerText = 'R$ ' + custo3Chuva;
    document.getElementById('custo4Chuva').innerText = 'R$ ' + custo4Chuva;

    if(receita1Chuva > 140) {
        document.getElementById('receita1Chuva').innerText = 'R$ ' + 140;
        document.getElementById('lucro1Chuva').innerText = 'R$ ' + (140 - custo1);
    }

    else {
        document.getElementById('receita1Chuva').innerText = 'R$ ' + receita1Chuva;
        document.getElementById('lucro1Chuva').innerText = 'R$ ' + lucro1Chuva;
    }

    if(receita2Chuva > 140) {
        document.getElementById('receita2Chuva').innerText = 'R$ ' + 140;
        document.getElementById('lucro2Chuva').innerText = 'R$ ' + (140 - custo2);
    }

    else {
        document.getElementById('receita2Chuva').innerText = 'R$ ' + receita2Chuva;
        document.getElementById('lucro2Chuva').innerText = 'R$ ' + lucro2Chuva;
    }

    if(receita3Chuva > 140) {
        document.getElementById('receita3Chuva').innerText = 'R$ ' + 140;
        document.getElementById('lucro3Chuva').innerText = 'R$ ' + (140 - custo3);
    }

    else {
        document.getElementById('receita3Chuva').innerText = 'R$ ' + receita3Chuva;
        document.getElementById('lucro3Chuva').innerText = 'R$ ' + lucro3Chuva;
    }

    if(receita4Chuva > 140) {
       document.getElementById('receita4Chuva').innerText = 'R$ ' + 140;
        document.getElementById('lucro4Chuva').innerText = 'R$ ' + (140 - custo4);
    } 

    else {
        document.getElementById('receita4Chuva').innerText = 'R$ ' + receita4Chuva;
        document.getElementById('lucro4Chuva').innerText = 'R$ ' + lucro4Chuva;
    }
}

updateGrandchildren();
