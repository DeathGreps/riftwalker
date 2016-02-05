// declare module ChampionObject {
//
//     export interface Stats {
//         attackrange: number;
//         mpperlevel: number;
//         mp: number;
//         attackdamage: number;
//         hp: number;
//         hpperlevel: number;
//         attackdamageperlevel: number;
//         armor: number;
//         mpregenperlevel: number;
//         hpregen: number;
//         critperlevel: number;
//         spellblockperlevel: number;
//         mpregen: number;
//         attackspeedperlevel: number;
//         spellblock: number;
//         movespeed: number;
//         attackspeedoffset: number;
//         crit: number;
//         hpregenperlevel: number;
//         armorperlevel: number;
//     }
//
//     export interface Item {
//         id: number;
//         count: number;
//     }
//
//     export interface Block {
//         items: Item[];
//         type: string;
//         recMath?: boolean;
//     }
//
//     export interface Recommended {
//         champion: string;
//         title: string;
//         priority: boolean;
//         map: string;
//         blocks: Block[];
//         type: string;
//         mode: string;
//     }
//
//     export interface Image {
//         w: number;
//         full: string;
//         sprite: string;
//         group: string;
//         h: number;
//         y: number;
//         x: number;
//     }
//
//     export interface Leveltip {
//         effect: string[];
//         label: string[];
//     }
//
//     export interface Var {
//         link: string;
//         coeff: number[];
//         key: string;
//     }
//
//     export interface Spell {
//         range: number[];
//         leveltip: Leveltip;
//         resource: string;
//         maxrank: number;
//         effectBurn: string[];
//         image: Image2;
//         cooldown: number[];
//         cost: number[];
//         vars: Var[];
//         sanitizedDescription: string;
//         rangeBurn: string;
//         costType: string;
//         effect: number[][];
//         cooldownBurn: string;
//         description: string;
//         name: string;
//         sanitizedTooltip: string;
//         key: string;
//         costBurn: string;
//         tooltip: string;
//     }
//
//     export interface Info {
//         defense: number;
//         magic: number;
//         difficulty: number;
//         attack: number;
//     }
//
//     export interface Image3 {
//         w: number;
//         full: string;
//         sprite: string;
//         group: string;
//         h: number;
//         y: number;
//         x: number;
//     }
//
//     export interface Passive {
//         sanitizedDescription: string;
//         description: string;
//         name: string;
//         image: Image3;
//     }
//
//     export interface Skin {
//         id: number;
//         num: number;
//         name: string;
//     }
//
//     export interface RootObject {
//         tags: string[];
//         stats: Stats;
//         enemytips: string[];
//         recommended: Recommended[];
//         image: Image;
//         spells: Spell[];
//         blurb: string;
//         allytips: string[];
//         info: Info;
//         lore: string;
//         id: number;
//         title: string;
//         name: string;
//         passive: Passive;
//         partype: string;
//         key: string;
//         skins: Skin[];
//     }
//
// }
