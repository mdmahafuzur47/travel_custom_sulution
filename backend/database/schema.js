class Schema {
  constructor(object) {
    let key = Object.keys(object);
    return key.map((e) => {
      return {
        name: e,
        type: object[e].type,
        req: object[e].req ? true : false,
        defaults: object[e].defaults ? object[e].defaults : "",
        unique: object[e].unique ? true : false,
        reference: object[e].reference ? object[e].reference : false,
      };
    });
  }
}

module.exports = Schema;
