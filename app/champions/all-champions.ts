  export interface ChampionListDto {
    data: Data;
    format: string;
    keys: Keys;
    type: string;
    version: string;
  }

  export interface ChampionDto {
    allytips: string[];
    blurb: string;
    enemytips: string[];
    id: number;
    image: ImageDto;
    info: InfoDto;
    key: string;
    lore: string;
    name: string;
    partype: string;
    passive: PassiveDto;
    recommended: RecommendedDto[];
    skins: SkinDto[];
    spells: ChampionSpellDto[];
    stats: StatsDto;
    tags: string[];
    title: string;
  }

  export interface ChampionSpellDto {
    altimages: ImageDto[];
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    costType: string;
    description: string;
    effect: number[][];
    effectBurn: string[];
    image: ImageDto;
    key: string;
    leveltip: LevelTipDto;
    maxrank: number;
    name: string;
    range: number[];
    rangeBurn: string;
    resource: string;
    sanitizedDescription: string;
    sanitizedTooltip: string;
    tooltip: string;
    vars: SpellVarsDto[];
  }

  export interface ImageDto {
    full: string;
    group: string;
    h: number;
    sprite: string;
    w: number;
    x: number;
    y: number;
  }

  export interface InfoDto {
    attack: number;
    defense: number;
    difficulty: number;
    magic: number;
  }

  export interface PassiveDto {
    description: string;
    image: ImageDto;
    name: string;
    sanitizedDescription: string;
  }

  export interface RecommendedDto {
    blocks: BlockDto[];
    champion: string;
    map: string;
    mode: string;
    priority: boolean;
    title: string;
    type: string;
  }

  export interface SkinDto {
      id: number;
      name: string;
      num: number;
  }

  export interface StatsDto {
    armor: number;
    armorperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackrange: number;
    attackspeedoffset: number;
    attackspeedperlevel: number;
    crit: number;
    critperlevel: number;
    hp: number;
    hpperlevel: number;
    hpregen: number;
    hpregenperlevel: number;
    movespeed: number;
    mp: number;
    mpperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
  }

  export interface LevelTipDto {
    effect: string[];
    label: string[];
  }

  export interface SpellVarsDto {
    coeff: number[];
    dyn: string;
    key: string;
    link: string;
    ranksWith: string;
  }

  export interface BlockDto {
    items: BlockItemDto[];
    recMath: boolean;
    type: string;
  }

  export interface BlockItemDto {
    count: number;
    id: number;
  }
    export interface Data {
      Thresh: ChampionDto;
      Aatrox: ChampionDto;
      Tryndamere: ChampionDto;
      Gragas: ChampionDto;
      Cassiopeia: ChampionDto;
      Ryze: ChampionDto;
      Poppy: ChampionDto;
      Sion: ChampionDto;
      Jhin: ChampionDto;
      Annie: ChampionDto;
      Nautilus: ChampionDto;
      Karma: ChampionDto;
      Lux: ChampionDto;
      Ahri: ChampionDto;
      Olaf: ChampionDto;
      Viktor: ChampionDto;
      Singed: ChampionDto;
      Garen: ChampionDto;
      Anivia: ChampionDto;
      Maokai: ChampionDto;
      Lissandra: ChampionDto;
      Morgana: ChampionDto;
      Fizz: ChampionDto;
      Evelynn: ChampionDto;
      Zed: ChampionDto;
      Heimerdinger: ChampionDto;
      Rumble: ChampionDto;
      Sona: ChampionDto;
      Mordekaiser: ChampionDto;
      KogMaw: ChampionDto;
      Katarina: ChampionDto;
      Lulu: ChampionDto;
      Ashe: ChampionDto;
      Karthus: ChampionDto;
      Alistar: ChampionDto;
      Darius: ChampionDto;
      Vayne: ChampionDto;
      Varus: ChampionDto;
      Udyr: ChampionDto;
      Leona: ChampionDto;
      Jayce: ChampionDto;
      Syndra: ChampionDto;
      Pantheon: ChampionDto;
      Riven: ChampionDto;
      Khazix: ChampionDto;
      Corki: ChampionDto;
      Caitlyn: ChampionDto;
      Azir: ChampionDto;
      Nidalee: ChampionDto;
      Kennen: ChampionDto;
      Galio: ChampionDto;
      Veigar: ChampionDto;
      Bard: ChampionDto;
      Gnar: ChampionDto;
      Malzahar: ChampionDto;
      Graves: ChampionDto;
      Vi: ChampionDto;
      Kayle: ChampionDto;
      Irelia: ChampionDto;
      LeeSin: ChampionDto;
      Illaoi: ChampionDto;
      Elise: ChampionDto;
      Volibear: ChampionDto;
      Nunu: ChampionDto;
      TwistedFate: ChampionDto;
      Jax: ChampionDto;
      Shyvana: ChampionDto;
      Kalista: ChampionDto;
      DrMundo: ChampionDto;
      TahmKench: ChampionDto;
      Diana: ChampionDto;
      Brand: ChampionDto;
      Sejuani: ChampionDto;
      Vladimir: ChampionDto;
      Zac: ChampionDto;
      RekSai: ChampionDto;
      Quinn: ChampionDto;
      Akali: ChampionDto;
      Tristana: ChampionDto;
      Hecarim: ChampionDto;
      Sivir: ChampionDto;
      Lucian: ChampionDto;
      Rengar: ChampionDto;
      Warwick: ChampionDto;
      Skarner: ChampionDto;
      Malphite: ChampionDto;
      Yasuo: ChampionDto;
      Xerath: ChampionDto;
      Teemo: ChampionDto;
      Renekton: ChampionDto;
      Nasus: ChampionDto;
      Draven: ChampionDto;
      Shaco: ChampionDto;
      Swain: ChampionDto;
      Ziggs: ChampionDto;
      Talon: ChampionDto;
      Janna: ChampionDto;
      Ekko: ChampionDto;
      Orianna: ChampionDto;
      Fiora: ChampionDto;
      FiddleSticks: ChampionDto;
      Rammus: ChampionDto;
      Chogath: ChampionDto;
      Leblanc: ChampionDto;
      Zilean: ChampionDto;
      Soraka: ChampionDto;
      Nocturne: ChampionDto;
      Jinx: ChampionDto;
      Yorick: ChampionDto;
      Urgot: ChampionDto;
      Kindred: ChampionDto;
      MissFortune: ChampionDto;
      MonkeyKing: ChampionDto;
      Blitzcrank: ChampionDto;
      Shen: ChampionDto;
      Braum: ChampionDto;
      XinZhao: ChampionDto;
      Twitch: ChampionDto;
      MasterYi: ChampionDto;
      Taric: ChampionDto;
      Amumu: ChampionDto;
      Gangplank: ChampionDto;
      Trundle: ChampionDto;
      Kassadin: ChampionDto;
      Velkoz: ChampionDto;
      Zyra: ChampionDto;
      Nami: ChampionDto;
      JarvanIV: ChampionDto;
      Ezreal: ChampionDto;
    }

  export interface Keys {
    35: string;
    36: string;
    33: string;
    34: string;
    157: string;
    39: string;
    37: string;
    154: string;
    38: string;
    150: string;
    43: string;
    42: string;
    41: string;
    40: string;
    202: string;
    203: string;
    201: string;
    22: string;
    23: string;
    24: string;
    25: string;
    26: string;
    27: string;
    28: string;
    29: string;
    161: string;
    3: string;
    2: string;
    1: string;
    7: string;
    30: string;
    6: string;
    5: string;
    32: string;
    4: string;
    31: string;
    9: string;
    8: string;
    19: string;
    17: string;
    18: string;
    15: string;
    16: string;
    13: string;
    14: string;
    11: string;
    12: string;
    21: string;
    20: string;
    107: string;
    106: string;
    105: string;
    104: string;
    103: string;
    102: string;
    99: string;
    101: string;
    412: string;
    98: string;
    96: string;
    222: string;
    223: string;
    92: string;
    91: string;
    90: string;
    10: string;
    429: string;
    421: string;
    420: string;
    89: string;
    117: string;
    79: string;
    78: string;
    114: string;
    115: string;
    77: string;
    112: string;
    113: string;
    110: string;
    111: string;
    119: string;
    432: string;
    82: string;
    245: string;
    83: string;
    80: string;
    81: string;
    86: string;
    84: string;
    85: string;
    67: string;
    126: string;
    127: string;
    69: string;
    68: string;
    121: string;
    122: string;
    120: string;
    72: string;
    236: string;
    74: string;
    238: string;
    75: string;
    76: string;
    134: string;
    133: string;
    59: string;
    58: string;
    57: string;
    56: string;
    55: string;
    64: string;
    62: string;
    63: string;
    268: string;
    267: string;
    60: string;
    131: string;
    61: string;
    266: string;
    143: string;
    48: string;
    45: string;
    44: string;
    51: string;
    53: string;
    54: string;
    254: string;
    50: string;
  }
