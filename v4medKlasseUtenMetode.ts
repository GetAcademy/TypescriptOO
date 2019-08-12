class NameAndCount {
    name: string;
    count: number;

    constructor(name: string, count: number){
        this.name = name;
        this.count = count;        
    }
}

let namesAndCounts: NameAndCount[] = [];

countName('Thor Arne');
countName('Olga');
countName('Terje');
countName('Olga');

function countName(name: string) {
    console.log('legger til ' + name);

    let index = indexOf(name);
    if (index == -1) { // ikke funnet navn
        index = namesAndCounts.length;
        namesAndCounts.push(new NameAndCount(name, 0));
    }
    namesAndCounts[index].count++;
    console.log(' ** Statistikk:');
    for (let i = 0; i < namesAndCounts.length; i++) {
        let count = namesAndCounts[i].count;
        console.log(namesAndCounts[i].name + ' ' + count + (count == 1 ? ' gang' : ' ganger'));
    }
    console.log('');
}

function indexOf(name: string): number {
    for (let i = 0; i < namesAndCounts.length; i++) {
        if (namesAndCounts[i].name == name) return i;
    }
    return -1;
}


