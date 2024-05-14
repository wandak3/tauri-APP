import { MonsterType, WeaponType } from './type';

const monsterTypeDict: Record<MonsterType, string> = {
  MONSTER_ORDINARY: 'Monster',
  MONSTER_BOSS: 'Boss',
  MONSTER_ENV_ANIMAL: 'Animal',
  MONSTER_FISH: 'Fish',
  MONSTER_PARTNER: 'Partner',
};

const weaponTypeDict: Record<WeaponType, string> = {
  WEAPON_SWORD_ONE_HAND: 'Sword',
  WEAPON_CLAYMORE: 'Claymore',
  WEAPON_POLE: 'Polearm',
  WEAPON_CATALYST: 'Catalyst',
  WEAPON_BOW: 'Bow',
};
