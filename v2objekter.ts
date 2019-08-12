let namesAndCounts : any[] = [];

countName('Thor Arne');
countName('Olga');
countName('Terje');
countName('Olga');

function countName(name: string) {
    console.log('legger til ' + name);
    
    let index = names.indexOf(name);
    if (index == -1) { // ikke funnet navn
        index = names.length;
        names.push(name);
        counts.push(0);
    }
    counts[index]++;
    console.log(' ** Statistikk:');
    for (let i = 0; i < names.length; i++) {
        console.log(names[i] + ' ' + counts[i] + ' gang(er)');
    }
    console.log('');
}



