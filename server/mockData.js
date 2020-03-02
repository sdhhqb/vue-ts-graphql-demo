// 角色
const allPeopleData = [
  {id: 'p1', name: '至尊宝', actor: '周星驰', classicLine: '我希望是一万年'},
  {id: 'p2', name: '紫霞仙子', actor: '朱茵', classicLine: '猜不透这结局'},
  {id: 'p3', name: '白晶晶', actor: '莫文蔚', classicLine: '原来是你这臭猴子'},
  {id: 'p4', name: '唐三藏', actor: '罗家英', classicLine: 'Only you~'},
]

// 角色关系
const relationData = [
  {id: 'r1', personId: 'p1', relatedPersonId: 'p2',  relation: '男友'},
  {id: 'r2', personId: 'p1', relatedPersonId: 'p3',  relation: '前男友'},
  {id: 'r3', personId: 'p1', relatedPersonId: 'p4',  relation: '大徒弟'},
  {id: 'r4', personId: 'p2', relatedPersonId: 'p1',  relation: '女友'},
  {id: 'r5', personId: 'p2', relatedPersonId: 'p3',  relation: '师傅'},
]

module.exports = {
  allPeopleData,
  relationData
}
