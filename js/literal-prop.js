let member = {
    name: 'taro',
    birth: new Date(1990, 1, 2),
    toString() {
        return this.name + '/birth:' + this.birth.toLocaleString();
    }
}

console.info(member.toString());