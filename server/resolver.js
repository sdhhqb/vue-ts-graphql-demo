const { allPeopleData, relationData } = require('./mockData');

const resolver = {
  name: () => '大话西游',
  director: '刘镇伟',
  rate: 9.2,
  cast: '周星驰 / 吴孟达 / 朱茵 / 蔡少芬 / 蓝洁瑛',
  description: () => '《大话西游》是由周星驰彩星电影公司和西安电影制片厂联合摄制的爱情悲喜剧电影，由刘镇伟执导，周星驰、朱茵、吴孟达、莫文蔚等主演。《大话西游》由《月光宝盒》和《大圣娶亲》两部组成，讲述了一个跨越时空的悲喜交加的爱情故事。影片于1995年在中国香港和内地上映，直到1997年后才开始在内地各个高校和网络上流传并迅速走红。',
  allPeople: () => allPeopleData.map(item => new Person(item)),
  person(param) {
    let matchedPerson = allPeopleData.find(item => item.id === param.id)
    if (matchedPerson) {
      return new Person(matchedPerson)
    } else {
      return null
    }
  }
}

class Person {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.actor = data.actor;
    this.classicLine = data.classicLine;
  }

  related() {
    let relations = relationData.filter(item => item.personId === this.id)
    return relations.map(item => {
      return new Relation(item)
    })
  }
}

class Relation {
  constructor(data) {
    this.id = data.id;
    this.relation = data.relation;
    this.relatedPersonId = data.relatedPersonId;
  }

  person() {
    return new Person(allPeopleData.find(item => item.id === this.relatedPersonId))
  }
}

module.exports = {
  resolver
}
