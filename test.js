var NameAndCount = /** @class */ (function () {
    function NameAndCount(name, count) {
        this.name = name;
        this.count = count;
    }
    NameAndCount.prototype.show = function () {
        console.log(this.name + ' ' + this.count + (this.
            count == 1 ? ' gang' : ' ganger'));
    };
    return NameAndCount;
}());
var Stats = /** @class */ (function () {
    function Stats() {
        this.namesAndCounts = [];
    }
    Stats.prototype.countName = function (name) {
        console.log('legger til ' + name);
        var index = this.indexOf(name);
        if (index == -1) { // ikke funnet navn
            index = this.namesAndCounts.length;
            this.namesAndCounts.push(new NameAndCount(name, 0));
        }
        this.namesAndCounts[index].count++;
    };
    Stats.prototype.showStats = function () {
        console.log(' ** Statistikk:');
        for (var _i = 0, _a = this.namesAndCounts; _i < _a.length; _i++) {
            var nameAndCount = _a[_i];
            nameAndCount.show();
        }
        console.log('');
    };
    Stats.prototype.indexOf = function (name) {
        for (var i = 0; i < this.namesAndCounts.length; i++) {
            if (this.namesAndCounts[i].name == name)
                return i;
        }
        return -1;
    };
    return Stats;
}());
var stats = new Stats();
stats.countName('Thor Arne');
stats.countName('Olga');
stats.countName('Terje');
stats.countName('Olga');
stats.showStats();
