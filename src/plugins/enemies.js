import Vue from 'vue'

const ZHTW = {
  ', ': '、',
  Name: '名稱',
  Protoss: '神族',
  Terran: '人類',
  Zerg: '蟲族',
  Gateway: '傳送門',
  RoboColossus: '巨像機械化',
  RoboReaver: '掠殺者機械化',
  SkytossCarrier: '航母空軍',
  SkytossTempest: '暴風艦空軍',
  Techy: '科技神族',
  BioMechStar: '生化坦戰巡',
  MechStarport: '機械化人類',
  ShadowTech: '遠程人類',
  SkyTerran: '空軍人類',
  Ground: '地面蟲族',
  MutaLing: '飛龍狗',
  Swarmy: '蟲海',
  Zealots: '狂戰士',
  Stalkers: '追獵者',
  Sentries: '哨衛',
  Adepts: '教士',
  'High Templars': '高階聖堂武士',
  'Dark Templars': '黑暗聖堂武士',
  Archons: '執政官',
  Immortals: '不朽者',
  Reavers: '掠殺者',
  Colossi: '巨像',
  Disruptors: '裂光球',
  Scouts: '斥侯',
  Phoenixes: '鳳凰戰機',
  'Void Rays': '虛空艦',
  Oracles: '先知艦',
  Tempests: '暴風艦',
  Carriers: '航空母艦',
  Marines: '陸戰隊',
  Reapers: '死神',
  Medics: '醫護兵',
  'Marines and Medics': '陸戰隊和醫護兵',
  Firebats: '火焰兵',
  Marauders: '掠奪者',
  Ghosts: '幽靈特務',
  Hellions: '惡狼',
  Hellbats: '戰狼',
  'Goliaths or Warhounds': '巨人或戰犬',
  'Widow Mines': '寡婦詭雷',
  Cyclones: '颶風飛彈車',
  'Siege Tanks': '攻城坦克',
  Thors: '雷神',
  Medivacs: '醫療挺',
  Vikings: '維京戰機',
  Liberators: '解放者',
  'Liberators or Cyclones': '解放者或颶風飛彈車',
  Banshees: '女妖轟炸機',
  'Vikings or Banshees': '維京戰機或女妖轟炸機',
  'Banshees or Liberators': '女妖轟炸機或解放者',
  'Science Vessels': '科學研究船',
  Ravens: '渡鴉',
  Battlecruisers: '戰巡艦',
  Zerglings: '異化蟲',
  Banelings: '毒爆蟲',
  Roaches: '蟑螂',
  Ravagers: '劫毀獸',
  Hydralisks: '刺蛇',
  Lurkers: '遁地獸',
  Aberrations: '變異體',
  Infestors: '感染蟲',
  'Swarm Hosts': '百生蟲',
  Mutalisks: '飛螳',
  Corruptors: '腐化飛蟲',
  Scourge: '自殺蟲',
  Ultralisks: '雷獸',
  Vipers: '飛蟒',
  'Brood Lords': '寄生王蟲'
}

const COLOR = {
  Protoss: 'amber',
  Terran: 'red',
  Zerg: 'purple'
}

const enemies = {
  Protoss: {
    Zealots: {
      Stalkers: [
        'Gateway',
        ['Zealots'],
        ['Zealots', 'Stalkers'],
        ['Zealots', 'Stalkers', 'High Templars'],
        ['Immortals', 'Stalkers', 'High Templars'],
        ['Zealots', 'Stalkers', 'High Templars', 'Archons'],
        ['Zealots', 'Stalkers', 'Colossi', 'Archons'],
        ['Zealots', 'Stalkers', 'Colossi', 'High Templars', 'Immortals']
      ],
      Sentries: [
        'RoboColossus',
        ['Zealots'],
        ['Zealots', 'Sentries'],
        ['Immortals', 'Sentries'],
        ['Immortals', 'Zealots', 'Scouts'],
        ['Sentries', 'Zealots', 'Scouts', 'Colossi'],
        ['Zealots', 'Scouts', 'Colossi'],
        ['Zealots', 'Sentries', 'Colossi', 'Immortals']
      ],
      Scouts: [
        'SkytossCarrier',
        ['Zealots'],
        ['Zealots', 'Scouts'],
        ['Stalkers', 'Scouts'],
        ['Zealots', 'Scouts', 'Oracles'],
        ['Zealots', 'Void Rays'],
        ['Zealots', 'Oracles', 'Carriers'],
        ['Zealots', 'Oracles', 'Carriers', 'Void Rays']
      ]
    },
    Adepts: {
      Sentries: [
        'RoboReaver',
        ['Adepts'],
        ['Adepts', 'Sentries'],
        ['Adepts', 'Immortals'],
        ['Adepts', 'Immortals', 'Scouts'],
        ['Adepts', 'Sentries', 'Disruptors', 'Reavers'],
        ['Adepts', 'Scouts', 'Disruptors', 'Reavers'],
        ['Sentries', 'Immortals', 'Disruptors', 'Reavers'],
      ],
      Phoenixes: [
        'SkytossTempest',
        ['Adepts'],
        ['Adepts', 'Phoenixes'],
        ['Adepts', 'Phoenixes'],
        ['Stalkers', 'Phoenixes', 'Oracles'],
        ['Adepts', 'Void Rays'],
        ['Adepts', 'Oracles', 'Tempests'],
        ['Adepts', 'Oracles', 'Tempests', 'Void Rays']
      ],
      Stalkers: [
        'Techy',
        ['Adepts'],
        ['Adepts', 'Stalkers'],
        ['Adepts', 'Stalkers', 'Sentries'],
        ['Adepts', 'Stalkers', 'Sentries', 'Dark Templars'],
        ['Adepts', 'Phoenixes', 'Sentries', 'Dark Templars'],
        ['Adepts', 'Stalkers', 'Sentries', 'Dark Templars', 'Disruptors'],
        ['Adepts', 'Phoenixes', 'Sentries', 'Dark Templars', 'Disruptors']
      ]
    }
  },
  Terran: {
    "Marines and Medics": [
      'BioMechStar',
      ['Marines', 'Medics'],
      ['Marines', 'Medics', 'Marauders'],
      ['Medics', 'Marauders', 'Firebats'],
      ['Marines', 'Ghosts', 'Medivacs', 'Siege Tanks'],
      ['Marines', 'Marauders', 'Medivacs', 'Siege Tanks'],
      ['Marines', 'Marauders', 'Ghosts', 'Siege Tanks', 'Science Vessels'],
      ['Marines', 'Battlecruisers', 'Ghosts', 'Siege Tanks', 'Science Vessels']
    ],
    Hellions: [
      'MechStarport',
      ['Hellions'],
      ['Goliaths or Warhounds', 'Hellions'],
      ['Goliaths or Warhounds', 'Siege Tanks', 'Hellbats'],
      ['Goliaths or Warhounds', 'Siege Tanks', 'Hellbats', 'Widow Mines'],
      ['Goliaths or Warhounds', 'Siege Tanks', 'Science Vessels', 'Widow Mines'],
      ['Goliaths or Warhounds', 'Thors', 'Science Vessels', 'Widow Mines'],
      ['Siege Tanks', 'Thors', 'Science Vessels']
    ],
    Reapers: [
      'ShadowTech',
      ['Reapers'],
      ['Reapers', 'Marauders'],
      ['Reapers', 'Marauders', 'Liberators'],
      ['Reapers', 'Marauders', 'Liberators or Cyclones'],
      ['Ravens', 'Marauders', 'Liberators', 'Cyclones'],
      ['Ravens', 'Marauders', 'Battlecruisers', 'Cyclones'],
      ['Ravens', 'Marauders', 'Battlecruisers', 'Cyclones', 'Liberators']
    ],
    Vikings: [
      'SkyTerran',
      ['Vikings'],
      ['Vikings', 'Banshees'],
      ['Vikings or Banshees', 'Marines'],
      ['Vikings', 'Banshees or Liberators', 'Marines'],
      ['Vikings', 'Banshees', 'Ravens', 'Liberators'],
      ['Vikings or Banshees', 'Ravens', 'Liberators', 'Battlecruisers', 'Marines'],
      ['Vikings', 'Banshees or Liberators', 'Ravens', 'Battlecruisers']
    ]
  },
  Zerg: {
    Roaches: [
      'Ground',
      ['Roaches'],
      ['Roaches', 'Zerglings'],
      ['Roaches', 'Hydralisks'],
      ['Roaches', 'Hydralisks', 'Ravagers', 'Lurkers'],
      ['Roaches', 'Hydralisks', 'Infestors', 'Lurkers'],
      ['Roaches', 'Hydralisks', 'Infestors', 'Ravagers', 'Ultralisks'],
      ['Roaches', 'Hydralisks', 'Infestors', 'Ravagers', 'Ultralisks']
    ],
    Zerglings: {
      Mutalisks: [
        'MutaLing',
        ['Zerglings'],
        ['Zerglings', 'Mutalisks'],
        ['Zerglings', 'Mutalisks', 'Banelings'],
        ['Zerglings', 'Mutalisks', 'Infestors'],
        ['Zerglings', 'Mutalisks', 'Infestors', 'Corruptors'],
        ['Zerglings', 'Mutalisks', 'Infestors', 'Brood Lords'],
        ['Corruptors', 'Mutalisks', 'Infestors', 'Brood Lords']
      ],
      Banelings: [
        'Swarmy',
        ['Zerglings'],
        ['Zerglings', 'Banelings'],
        ['Zerglings', 'Aberrations', 'Scourge', 'Vipers', 'Mutalisks'],
        ['Zerglings', 'Aberrations', 'Scourge', 'Swarm Hosts', 'Mutalisks'],
        ['Zerglings', 'Aberrations', 'Scourge', 'Vipers', 'Mutalisks', 'Banelings'],
        ['Zerglings', 'Swarm Hosts', 'Scourge', 'Vipers', 'Mutalisks', 'Banelings'],
        ['Aberrations', 'Swarm Hosts', 'Scourge', 'Vipers', 'Mutalisks', 'Banelings']
      ]
    }
  }
}

const translate = s => ZHTW[s] || s
const color = c => COLOR[c]

const Enemies = {
  install(Vue) {
    Vue.prototype.enemies = enemies
    Vue.prototype.t = translate
    Vue.prototype.c = color
  }
}

Vue.use(Enemies)
