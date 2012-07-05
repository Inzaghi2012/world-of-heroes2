//暴击值=人物本身暴击+装备暴击+技能暴击
//闪避值=人物本身闪避+装备闪避+技能闪避
//防御值=人物本身防御+装备防御+技能防御
//生命值=人物本身生命+装备生命+技能提升生命
//攻击力=人物本身攻击+武器攻击+技能提升攻击

//受到的伤害值=攻击-防御
//造成的伤害值计算方式：
//普攻打出暴击时造成的伤害为攻击力（人物本身攻击+武器攻击）的双倍
//暴击只对普攻起作用，技能不存在暴击效果
//本期暂不考虑闪避效果（在界面上也不用显示）
//用于存储各个职业的偏移百分比以及移动、攻击速度

woh.skill_rate={
	'001':{
		'health':1,//血量偏移
		'attack':1,//攻击偏移
		'defend':1,//防御偏移
		'crit':1,//暴击偏移
		'miss':1,//闪避偏移
		'speed':200,//移动速度，单位为像素
		'speed_attack':1,//攻击速度，单位为t/s,每秒多少次
	},
	'002':{
    'health':1.2,
		'attack':0.5,
		'defend':1.3,
		'crit':1,
		'miss':1,
		'speed':200,
		'speed_attack':1,
	},
	'003':{
    'health_rate':0.5,
		'attack_rate':2,
		'defend_rate':0.5,
		'crit_rate':1,
		'miss_rate':1,
		'speed_movement':200,
		'speed_attack':1,
	},
}
//存储基础值（目前定为近战战士的那个,'001'-'040'表示等级编号）
base_level_data={
	/*'001':{
		'exp':1000,//当前等级所需的经验值
		'health':150,//当前等级的生命值
		'attack':0,//当前等级的攻击值
		'defend':0,//当前等级的防御值
		'crit':0,//当前等级的暴击值
		'miss':5,//当前等级的闪避值
	},*/

'0':{
  'exp':0,
  'health':140,
  'attack':19,
  'defend':9,
  'crit':0.05,
  'miss':5,
},
'1':{
  'exp':1000,
  'health':150,
  'attack':20,
  'defend':10,
  'crit':0.05,
  'miss':5,
 },
'2':{
  'exp':1300,
  'health':160,
  'attack':22,
  'defend':11,
  'crit':0.05,
  'miss':5,
 },
'3':{
  'exp':1600,
  'health':170,
  'attack':24,
  'defend':12,
  'crit':0.05,
  'miss':5,
 },
'4':{
  'exp':1900,
  'health':180,
  'attack':26,
  'defend':13,
  'crit':0.05,
  'miss':5,
 },
'5':{
  'exp':2200,
  'health':190,
  'attack':28,
  'defend':14,
  'crit':0.05,
  'miss':5,
 },
'6':{
  'exp':2500,
  'health':200,
  'attack':30,
  'defend':15,
  'crit':0.05,
  'miss':5,
 },
'7':{
  'exp':2800,
  'health':210,
  'attack':32,
  'defend':16,
  'crit':0.05,
  'miss':5,
 },
'8':{
  'exp':3100,
  'health':220,
  'attack':34,
  'defend':17,
  'crit':0.05,
  'miss':5,
 },
'9':{
  'exp':3400,
  'health':230,
  'attack':36,
  'defend':18,
  'crit':0.05,
  'miss':5,
 },
'10':{
  'exp':5000,
  'health':240,
  'attack':38,
  'defend':19,
  'crit':0.05,
  'miss':5,
 },
'11':{
  'exp':5600,
  'health':260,
  'attack':42,
  'defend':21,
  'crit':0.05,
  'miss':5,
 },
'12':{
  'exp':6200,
  'health':280,
  'attack':46,
  'defend':23,
  'crit':0.05,
  'miss':5,
 },
'13':{
  'exp':6800,
  'health':300,
  'attack':50,
  'defend':25,
  'crit':0.05,
  'miss':5,
 },
'14':{
  'exp':7400,
  'health':320,
  'attack':54,
  'defend':27,
  'crit':0.05,
  'miss':5,
 },
'15':{
  'exp':8000,
  'health':340,
  'attack':58,
  'defend':29,
  'crit':0.05,
  'miss':5,
 },
'16':{
  'exp':8600,
  'health':360,
  'attack':62,
  'defend':31,
  'crit':0.05,
  'miss':5,
 },
'17':{
  'exp':9200,
  'health':380,
  'attack':66,
  'defend':33,
  'crit':0.05,
  'miss':5,
 },
'18':{
  'exp':9800,
  'health':400,
  'attack':70,
  'defend':35,
  'crit':0.05,
  'miss':5,
 },
'19':{
  'exp':10400,
  'health':420,
  'attack':74,
  'defend':37,
  'crit':0.05,
  'miss':5,
 },
'20':{
  'exp':11000,
  'health':440,
  'attack':78,
  'defend':39,
  'crit':0.05,
  'miss':5,
 }
}
//console.log(base_level_data);