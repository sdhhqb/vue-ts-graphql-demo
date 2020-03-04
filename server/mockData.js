// 角色
const allPeopleData = [
  {
    id: "p1",
    name: "至尊宝/孙悟空",
    actor: "周星驰",
    classicLine: "曾经有一份真挚的感情摆在我的面前我没有珍惜，等我失去的时候才追悔莫及，人间最痛苦的事莫过于此。如果上天能给我一次再来一次的机会，我会对哪个女孩说三个字：我爱你，如果非要在这份爱上加一个期限，我希望是一万年！"
  },
  {
    id: "p2", name: "紫霞仙子", actor: "朱茵", classicLine: "我的意中人是个盖世英雄，有一天他会踩着七色的云彩来娶我。我猜中了前头，可是我猜不着这结局…"
  },
  {
    id: "p3",
    name: "白晶晶",
    actor: "莫文蔚",
    classicLine: "你把胡子剃光干什么？你不知不知道你少了胡子一点性格都没有了……哎…文也不行武也不行，你不做山贼，你想做状元啊？省省吧你！改变什么形象，好好的做你山贼这份很有前途的职业去吧！"
  },
  {
    id: "p4",
    name: "唐三藏",
    actor: "罗家英",
    classicLine: "喂喂喂！大家不要生气，生气会犯嗔戒的。、悟空你也太调皮了，我跟你说过叫你不要乱扔东西，你怎么又……你看，我还没说完你就把棍子给扔掉了！月光宝盒是宝物，你把它扔掉会污染环境，要是砸到小朋友怎么办，就算砸不到小朋友，砸到花花草草也是不对的。"
  }
];

// 角色关系
const relationData = [
  { id: "r1", personId: "p1", relatedPersonId: "p2", relation: "男友" },
  { id: "r2", personId: "p1", relatedPersonId: "p3", relation: "前男友" },
  { id: "r3", personId: "p1", relatedPersonId: "p4", relation: "大徒弟" },
  { id: "r4", personId: "p2", relatedPersonId: "p1", relation: "女友" },
  { id: "r5", personId: "p2", relatedPersonId: "p3", relation: "师傅" },
  { id: "r6", personId: "p3", relatedPersonId: "p1", relation: "前女友" },
  { id: "r7", personId: "p4", relatedPersonId: "p1", relation: "师傅" }
];

module.exports = {
  allPeopleData,
  relationData
};
