class NameAndCount {
    name: string;
    count: number;

    constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
    }

    show(): void {
        console.log(this.name + ' ' + this.count + (this.
            count == 1 ? ' gang' : ' ganger'));
    }
}

class Stats {
    namesAndCounts: NameAndCount[] = [];

    countName(name: string) {
        console.log('legger til ' + name);

        let index = this.indexOf(name);
        if (index == -1) { // ikke funnet navn
            index = this.namesAndCounts.length;
            this.namesAndCounts.push(new NameAndCount(name, 0));
        }
        this.namesAndCounts[index].count++;
    }

    showStats(): void {
        console.log(' ** Statistikk:');
        for (let nameAndCount of this.namesAndCounts) {
            nameAndCount.show();
        }
        console.log('');
    }

    indexOf(name: string): number {
        for (let i = 0; i < this.namesAndCounts.length; i++) {
            if (this.namesAndCounts[i].name == name) return i;
        }
        return -1;
    }
}

let stats = new Stats();
stats.countName('Thor Arne');
stats.countName('Olga');
stats.countName('Terje');
stats.countName('Olga');
stats.showStats();