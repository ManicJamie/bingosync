bingoGenerator = require("./generators/generator_bases/srl_generator_v8.js");

var bingoList = [];

var easyChallenges = [
  { name: "Bomb 5 shopkeepers", types: ["bombShopkeepers"] },
  { name: "Kill Pin or Larry", types: ["killBoss"] },
  { name: "Kill Little Horn", types: ["killBoss"] },
  { name: "Kill Duke of Flies", types: ["killBoss"] },
  { name: "Get 3 different tarot cards", types: ["getCards"] },
  { name: "Get a syringe item", types: ["getItem","syringe"] },
  { name: "Get 6 heart containers", types: ["getHearts"] },
  { name: "Buy everything in a shop", types: ["buyShop"] },
  { name: "Kill a green champion enemy or boss", types: ["killChampion"] },
  { name: "20 bombs", types: ["getPickups"] },
  { name: "15 keys", types: ["getPickups"] },
  { name: "30 coins", types: ["getPickups"] },
  { name: "Use 3 different pills", types: ["getPills"] },
  { name: "Get an orbital", types: ["getFamiliar"] },
  { name: "Teleport out of a Boss Room", types: ["teleport"] },
  { name: "Make something happen in a sacrifice room (except coins and You feel blessed)", types: ["sacrifice"] },
  { name: "Kill an enemy with a troll bomb", types: ["killEnemyBomb"] },
  { name: "Break 3 tinted rocks without using bombs", types: ["tintedRocks"] },
  { name: "Bomb a normal beggar", types: ["bombBeggar"] },
  { name: "Enter 2 super secret rooms", types: ["secretRooms"] },
  { name: "Enter 3 secret rooms", types: ["secretRooms"] },
  { name: "Get an eye item", types: ["getItem"] },
  { name: "Get a tear rate of 5", types: ["stats","tearRate"] },
  { name: "Give 10 coins to a donation machine", types: ["donationMachine","giveCoins"] },
  { name: "Satisfy a slot machine", types: ["slotMachine","giveCoins"] },
  { name: "Satisfy a blood machine", types: ["bloodMachine","giveHearts"] },
  { name: "Enter a god room", types: ["enterRoom","godRoom"] },
  { name: "Get an item with Head in its name", types: ["getItem"] },
  { name: "Use 2 books", types: ["books"] },
  { name: "Get a golden key", types: ["goldenPickups"] },
  { name: "Find a Dice room and use it", types: ["enterRoom", "diceRoom"] },
  { name: "Use 20 coins in an Arcade Room", types: ["arcadeRoom","giveCoins"] },
  { name: "Destroy a black poop", types: ["poops"] },
  { name: "Poison an enemy", types: ["effectsOnEnemies"] },
  { name: "Bomb a demon beggar", types: ["bombBeggar"] },
  { name: "Get a Hierophant card or a Balls of Steel pill", types: ["getCards","getPills"] },
  { name: "Get a poker card", types: ["getCards"] },
  { name: "Get a map", types: ["getItem"] },
  { name: "Die at exactly 4 minutes and 20 seconds", types: ["suicide"] },
  { name: "Beat a full Fistula, Terratoma or Envy", types: ["killBoss"] },
  { name: "Enter a devil room AND an angel room", types: ["enterRoom","devilRoom","godRoom"] },
  { name: "Break a restock box without making profit of it", types: ["restockBox"] },
  { name: "Get an item that does not make you shoot tears (lasers, bombs...)", types: ["getItem"] },
  { name: "15 cents in coins on the floor of a single room", types: ["getPickups"] },
  { name: "Kill 2 Sin bosses", types: ["killBoss", "sins"] },
  { name: "Get 2 Mom items", types: ["getItem", "yesMother"] },
  { name: "Pickup any Mushroom item", types: ["getItem", "mushrooms"] },
  { name: "Get multishot", types: ["getItem"] },
  { name: "50 pickups (combined)", types: ["getPickups"] },
  { name: "Satisfy a normal beggar", types: ["giveCoins"] },
  { name: "Kill a boss without using your tears", types: ["challengeBoss"] },
  { name: "Enter a room locked twice", types: ["enterRoom"] },
  { name: "Finish a run with Judas or Azazel", types: ["characters"] },
  { name: "Finish a run with Eve or Samson", types: ["characters"] },
  { name: "Finish a run with Isaac", types: ["characters"] },
  { name: "Kill the Basement 1 boss under 1 minute", types: ["speedrun", "killBoss"] },
  { name: "Find an item in a rock, mushroom or tinted rock", types: ["getItem", "tintedRocks", "mushrooms", "useBombs"] },
  { name: "Complete Basement 1 and 2 without taking damage", types: ["challengeFloor", "damageLess"] },
  { name: "Get a Luck stat of 3 (at least)", types: ["stats"] },
  { name: "Get 10+ damage stat", types: ["stats"] },
  { name: "Get 2.00 of speed", types: ["stats"] },
  { name: "Bomb yourself 6 times in a single room", types: ["selfDamage"] },
  { name: "Get 25 items", types: ["itemAmount"] },
  { name: "Find a pickup or an item by bombing something", types: ["getItem", "tintedRocks","mushrooms","skulls", "useBombs"] },
  { name: "Regenerate at least half a heart", types: ["regenerate"] },
  { name: "Kill 2 enemies with a single bomb", types: ["killEnemyBomb"] },
  { name: "Kill 10 champion enemies", types: ["killChampion"] },
  { name: "Use 10 keys in a run", types: ["useKeys"] },
  { name: "Bomb 30 rocks", types: ["useBombs"] },
  { name: "Bomb 3 tinted rocks", types: ["tintedRocks"] },
  { name: "Bomb an angel", types: ["useBombs","godRoom"] },
  { name: "Take 2 hearts of damage in spikes", types: ["selfDamage"] },
  { name: "Open a Rock Chest", types: ["openChests"] },
  { name: "Hold a worm trinket", types: ["trinkets"] },
  { name: "Hold a penny trinket", types: ["trinkets"] },
  { name: "Hold a Locust trinket", types: ["trinkets"] },
  { name: "Complete Basement 1 with The Lost", types: ["challengeCharacter"] },
  { name: "Complete Basement 1 with Keeper", types: ["challengeCharacter"] },
  { name: "Die on a spider", types: ["suicide"] },
  { name: "Die on a fly", types: ["suicide"] },
  { name: "Exit a challenge room while fighting in it", types: ["teleport", "theChallengeRooms"] },
  { name: "Complete a non-empty room without using tears", types: ["challengeRooms"] },
  { name: "Get a HP up item", types: ["getItem"] },
  { name: "Get a Speed up item", types: ["getItem"] },
  { name: "Full clear Basement 1+2", types: ["challengeFloor"] },
  { name: "Reroll 3 times the same thing", types: ["restockBox", "reroll"] },
  { name: "Take 3 batteries", types: ["getPickups"] },
  { name: "Lose 2 hearts by walking on creep", types: ["selfDamage"] },
  { name: "Trigger the Necronomicon effect 3 times", types: ["selfDamage"] },
  { name: "Collect 1 eternal heart", types: ["getHearts"] },
  { name: "Get 2 familiars", types: ["getFamiliar"] },
  { name: "10 blue flies around you", types: ["getFamiliar"] },
  { name: "5 blue spiders around you", types: ["getFamiliar"] },
  { name: "Stomp 2 enemies", types: ["stomp"] },
  { name: "Kill a Black ball", types: ["killEnemy"] },
  { name: "Get hurt by a red beam", types: ["selfDamage"] },
  { name: "Refill your life by 3 red hearts in the same room", types: ["getHearts"] },
  { name: "Kill 5 enemies while at half a HP", types: ["challengeRooms"] },
  { name: "Become invincible once", types: ["invincivility"] },
];

bingoList[1] = easyChallenges;
bingoList[2] = easyChallenges;
bingoList[3] = easyChallenges;
bingoList[4] = easyChallenges;
bingoList[5] = easyChallenges;
bingoList[6] = easyChallenges;
bingoList[7] = easyChallenges;
bingoList[8] = easyChallenges;
bingoList[9] = easyChallenges;
bingoList[10] = easyChallenges;


var mediumChallenges = [
  { name: "Get 99 bombs, 99 keys or 99 coins", types: ["getPickups"] },
  { name: "Get 20+ of each pick-up", types: ["getPickups"] },
  { name: "Get an item that grants fly", types: ["getItem"] },
  { name: "Full clear + no damage in a whole floor (except Basement 1/2)", types: ["challengeFloor"] },
  { name: "Enter a super secret room in a XL floor", types: ["secretRooms"] },
  { name: "Reveal a secret room without using your active or bombs", types: ["secretRooms"] },
  { name: "Get the Guppy transformation", types: ["transformation", "guppy"] },
  { name: "Get Skatole", types: ["giveCoins"] },
  { name: "Get 4 different types of hearts in your health bar", types: ["getHearts"] },
  { name: "Get 2 size reductions", types: ["size"] },
  { name: "Get two golden keys", types: ["goldenPickups"] },
  { name: "Kill a super or ultra sin mini-boss", types: ["killBoss"] },
  { name: "Get a heatlh dropper familiar", types: ["getFamiliar"] },
  { name: "Get Piercing tears", types: ["tearModifier"] },
  { name: "Full clear XL floor past basement", types: ["challengeFloor"] },
  { name: "Kill any boss only with bombs", types: ["challengeBoss"] },
  { name: "Use 4 books", types: ["books"] },
  { name: "Get a resurrection", types: ["resurrection"] },
  { name: "Get an item providing invincibility to explosions", types: ["getItem"] },
  { name: "Destroy a golden poop", types: ["poops"] },
  { name: "Destroy a rainbow poop", types: ["poops"] },
  { name: "Destroy 3 special poops (not the red ones)", types: ["poops"] },
  { name: "Use 3 time modifier pills", types: ["getPills"] },
  { name: "Finish a run with the seed L0ST", types: ["seeds"] },
  { name: "Finish a run with the seed CHAM P10N", types: ["seeds"] },
  { name: "Bomb 3 beggars of the same time", types: ["bombBeggar"] },
  { name: "Bomb a key beggar", types: ["bombBeggar"] },
  { name: "Get the Yes Mother ? transformation", types: ["transformation", "yesMother"] },
  { name: "Finish a run with the seed FART SNDS", types: ["seeds"] },
  { name: "Enter a challenge room and complete it with half your red hearts or less", types: ["theChallengeRooms"] },
  { name: "Enter and clear a Boss-Challenge room with half a heart", types: ["theChallengeRooms"] },
  { name: "Have exactly 69 coins, 4 bombs, 20 keys", types: ["getPickups"] },
  { name: "Find a rope ladder trapdoor", types: ["useBombs"] },
  { name: "Get a lv2 Bandage Girl", types: ["harbingers"] },
  { name: "Get a lv2 Meat Boy", types: ["harbingers"] },
  { name: "Bomb 8 shopkeepers", types: ["bombShopkeepers"] },
  { name: "Kill Peep", types: ["killBoss"] },
  { name: "Kill a Gurdy", types: ["killBoss"] },
  { name: "Kill Polycephalus or The Stain", types: ["killBoss"] },
  { name: "Fire a Spectral tear", types: ["tearModifier"] },
  { name: "Get 2 effects on your tears", types: ["tearModifier"] },
  { name: "Fire a homing tear", types: ["tearModifier"] },
  { name: "Use a demon beggar or blood machine without taking damage", types: ["giveHearts"] },
  { name: "Gain a heart container with two eternal hearts", types: ["getHearts"] },
  { name: "Shoot a beam or laser", types: ["tearModifier"] },
  { name: "Finish a run with Lilith or Magdalene", types: ["characters"] },
  { name: "Finish a run with Apollyon or Lazarus", types: ["characters"] },
  { name: "Finish a run with Eden or Cain", types: ["characters"] },
  { name: "Bomb yourself 8 times in a single room", types: ["selfDamage"] },
  { name: "Enter the Void", types: ["enterFloor"] },
  { name: "Get 30 items", types: ["itemAmount"] },
  { name: "Satisfy a donation machine", types: ["giveCoins","donationMachine"] },
  { name: "Bomb 6 tinted rocks", types: ["tintedRocks","useBombs"] },
  { name: "Get The Small Rock", types: ["tintedRocks"] },
  { name: "Get through Caves 1 and 2 without taking damage", types: ["challengeFloor"] },
  { name: "Complete a XL floor without taking damage", types: ["challengeFloor"] },
  { name: "Lose 3 hearts by walking on creep", types: ["selfDamage"] },
  { name: "Collect 2 eternal hearts", types: ["getHearts"] },
  { name: "Collect a gold heart", types: ["goldenPickups"] },
  { name: "Get 3 familiars", types: ["getFamiliar"] },
  { name: "15 blue flies around you", types: ["getFamiliar"] },
  { name: "Charm an enemy", types: ["effectsOnEnemies"] },
  { name: "10 blue spiders around you", types: ["getFamiliar"] },
  { name: "Stomp 5 enemies", types: ["stomp"] },
  { name: "Kill 5 black balls", types: ["killEnemy"] },
  { name: "Lose 3 hearts by red beams", types: ["selfDamage"] },
  { name: "Refill your life by 4 red hearts in the same room", types: ["getHearts"] },
  { name: "Confuse Effect to an enemy", types: ["effectsOnEnemies"] },
  { name: "Complete a non-empty room without moving", types: ["challengeRooms"] },
  { name: "Get a damage down effect", types: ["stats"] },
  { name: "Get a speed down effect", types: ["stats"] },
  { name: "Get a health down effect", types: ["stats"] },
  { name: "Complete a scarred womb floor", types: ["challengeRooms"] },
  { name: "Complete a Danks Depths floor without taking damage", types: ["challengeRooms"] },
  { name: "Burning basement 1 + burning basement 2 completed in the same run", types: ["challengeRooms"] },
  { name: "Enter 3 cursed rooms", types: ["enterRoom"] },
  { name: "Use 5 keys in the same floor", types: ["useKeys"] },
  { name: "Get 2 Lil items", types: ["getItem"] },
  { name: "Use D4 3 times", types: ["reroll"] },
  { name: "Use razor blade 5 times", types: ["selfDamage"] },
  { name: "Use D6 10 times", types: ["reroll"] },
  { name: "Get 3 things by bombing mushrooms", types: ["useBombs","mushrooms"] },
  { name: "Enter 2 Arcade Rooms", types: ["enterRoom","arcadeRoom"] },
  { name: "Enter 3 sacrifice rooms", types: ["enterRoom","sacrifice"] },
  { name: "Bomb 20 cobwebs on the floor", types: ["useBombs"] },
  { name: "Get 2 slots for space items, trinkets or pills/cards", types: ["getItem"] },
  { name: "Use an Emergency Contact card", types: ["getCards"] },
  { name: "Use a Card against humanity", types: ["getCards"] },
  { name: "Use 3 red-back cards", types: ["getCards"] },
  { name: "Kill Mom's foot with your character's original damage stat", types: ["challengeBoss"] },
  { name: "Get a Devil deal item giving blue or black hearts", types: ["getItem","devilRoom"] },
  { name: "Get 3 HP up items", types: ["getItem"] },
  { name: "Get a Mushroom item by bombing mushrooms", types: ["getItem","mushrooms"] },
  { name: "Complete a Double Trouble Boss room", types: ["challengeBoss"] },
  { name: "Finish the Boss Rush before 20 minutes", types: ["speedrun"] },
];

bingoList[11] = mediumChallenges;
bingoList[12] = mediumChallenges;
bingoList[13] = mediumChallenges;
bingoList[14] = mediumChallenges;
bingoList[15] = mediumChallenges;
bingoList[16] = mediumChallenges;
bingoList[17] = mediumChallenges;
bingoList[18] = mediumChallenges;
bingoList[19] = mediumChallenges;
bingoList[20] = mediumChallenges;

var hardChallenges = [
  { name: "Get the Spun transformation", types: ["transformation", "syringe"] },
  { name: "Get more than 25 damage", types: ["stats"] },
  { name: "Give 10 hearts in sacrifice rooms and beat Isaac", types: ["sacrifice", "selfDamage", "beatIsaac"] },
  { name: "Kill 4 angels", types: ["godRoom"] },
  { name: "Use 8 different pills", types: ["getPills"] },
  { name: "Beat Boss Rush and The Hush", types: ["beatBossRush","beatTheHush"] },
  { name: "Don't take any pedestal item in Basement 1 and 2 and beat Satan", types: ["beatSatan","challengeRun"] },
  { name: "Beat It Lives without taking any Treasure room item", types: ["beatItLives", "challengeRun"] },
  { name: "Enter all secret and supersecret rooms from Basement 1 to Womb 2", types: ["challengeRun","secretRooms"] },
  { name: "Get the Leviathan transformation", types: ["transformation"] },
  { name: "Get the Seraphim transformation", types: ["transformation"] },
  { name: "Use Lemon Party pill or Lemon Mishap on Isaac", types: ["challengeBoss"] },
  { name: "Kill Isaac with half a heart during the whole fight", types: ["challengeBoss","beatIsaac"] },
  { name: "Accept any devil deal the game proposes you and beat It Lives", types: ["devilRoom","beatItLives"] },
  { name: "Full clear Cathedral", types: ["challengeFloor"] },
  { name: "Full clear Sheol", types: ["challengeFloor"] },
  { name: "Full clear The Chest", types: ["challengeFloor"] },
  { name: "Full clear Dark Room", types: ["challengeFloor"] },
  { name: "Get 4 Guppy items", types: ["guppy","getItem"] },
  { name: "Kill Satan without gaining any heart container during the run", types: ["beatSatan","challengeRun"] },
  { name: "Kill It Lives with a bomb", types: ["challengeBoss","beatItLives"] },
  { name: "Kill It Lives without opening any chests during the run", types: ["challengeRun","beatItLives"] },
  { name: "Beat Isaac without buying anything from shops", types: ["beatIsaac","challengeRun"] },
  { name: "Beat Blue Baby", types: ["beatBlueBaby"] },
  { name: "Beat The Lamb", types: ["beatTheLamb"] },
  { name: "Beat It Lives without using active item during the run", types: ["beatItLives","challengeRun"] },
  { name: "Beat any boss only by pressing moving arrows", types: ["challengeBoss"] },
  { name: "Satisfy 2 demon beggars and then beat It Lives", types: ["beatItlives","challengeRun"] },
  { name: "Enter I AM ERROR room", types: ["enterRoom"] },
  { name: "Finish a run with the seed 1CES KATE", types: ["seeds"] },
  { name: "Get a golden bomb", types: ["goldenPickups"] },
  { name: "Finish a run in less than 40 minutes in Dark Room or The Chest", types: ["speedrun","finishRun"] },
  { name: "Use 6 books items", types: ["books","getItem"] },
  { name: "Kill Little horn with one of his own bombs", types: ["bossChallenge","killBoss"] },
  { name: "Finish a run with the seed 1MN0 B0DY", types: ["seeds"] },
  { name: "Use Suicide King card", types: ["getCards"] },
  { name: "Sleep in a bed", types: ["bedRoom"] },
  { name: "Find a black market", types: ["blackMarket"] },
  { name: "Get a lv3 Meat Boy", types: ["harbingers"] },
  { name: "Get a lv3 Bandage Girl", types: ["harbingers"] },
  { name: "Bomb 10 shopkeepers", types: ["bombShopkeepers"] },
  { name: "Bomb a bomb beggar", types: ["bombBeggar"] },
  { name: "Take no devil deals and no items in angel rooms and beat Isaac or Satan", types: ["beatIsaac","beatSatan","challengeRun"] },
  { name: "Enter a boss Room (not in Basement) with half a heart and complete it", types: ["challengeBoss"] },
  { name: "Finish a run with ??? or Keeper", types: ["finishRun"] },
  { name: "Bomb yourself 10 times in a single room", types: ["selfDamage"] },
  { name: "Beat Delirium", types: ["beatDelirium"] },
  { name: "Get 35 items", types: ["itemAmount"] },
  { name: "Take no damage until killing Mom's foot", types: ["challengeRun"] },
  { name: "Kill It Lives without having opened any chest", types: ["beatItLives","challengeRun"] },
];

bingoList[21] = hardChallenges;
bingoList[22] = hardChallenges;
bingoList[23] = hardChallenges;
bingoList[24] = hardChallenges;

bingoList[25] = [
  { name: "Kill the Bloat in a Boss room without taking damage", types: ["challengeBoss"] },
  { name: "Kill It Lives, Isaac, ??? and Mega Satan", types: ["beatMegaSatan","finishRun"] },
  { name: "Full clear The Void", types: ["challengeFloor","beatDelirium","finishRun"] },
  { name: "Kill It Lives, Satan, the Lamb and Mega Satan", types: ["beatMegaSatan","finishRun"] },
  { name: "Kill The Hush without taking damage during the fight", types: ["beatTheHush","challengeBoss"] },
  { name: "Beat It Lives while only taking items in Boss Rooms", types: ["challengeRun","beatItLives"] },
  { name: "Get 12 hearts containers", types: ["getHearts"] },
  { name: "Kill It Lives without ever gaining blue hearts", types: ["getHearts","beatItLives"] },
  { name: "Beat Delirium in less than 40 minutes", types: ["beatDelirium","speedrun"] },
  { name: "Finish a run with the seed KEEP TRAK", types: ["seeds"] },
  { name: "Finish a run with the seed THEG H0ST", types: ["seeds"] },
  { name: "Get a Super Meat Boy (lv4)", types: ["harbingers"] },
  { name: "Finish a run with The Lost", types: ["characters"] },
  { name: "Beat The Lamb after beating Isaac", types: ["challengeRun","beatTheLamb"] },
  { name: "Beat The Lamb without picking up any bomb during the run", types: ["beatTheLamb","challengeRun"] },
  { name: "Beat The Hush without using your coins during the run", types: ["beatTheHush","challengeRun"] },
  { name: "Finish a run in less than 25 minutes", types: ["speedrun","finishRun"] },
  { name: "Kill The Hush without using keys or coins in Blue Womb", types: ["beatTheHush","challengeFloor"] },
  { name: "Kill ??? without shooting", types: ["beatBlueBaby", "challengeBoss"] },
  { name: "Kill Delirium with a bomb", types: ["beatDelirium","challengeBoss"] },
];

//TYPES
//bombShopkeepers, killBoss, getCards, getItem, syringe, getHearts, buyShop, killChampion,
//getPickups, getPills, getCards, getFamiliar, teleport, sacrifice, killEnemyBomb, tintedRocks,
//bombBeggar, secretRooms, stats, tearRate ,giveCoins, slotMachine, donationMachine, bloodMachine,
//enterRoom, godRoom, books, goldenPickups, diceRoom, arcadeRoom, poops, effectsOnEnemies, suicide
//devilRoom, restockBox, challengeBoss, finishRun, speedrun, mushrooms, yesMother, sins
//challengeFloor, damageLess, selfDamage, itemAmount, skulls, regenerate, useKeys, useBombs
//openChests, trinkets, challengeCharacter, theChallengeRooms, challengeRooms, reroll, stomp
//killEnemy, invincibility, transformation, guppy, size, tearModifier, resurrection, seeds
//harbingers, characters, enterFloor, beatIsaac, beatBossRush, beatTheHush, beatSatan, beatItLives
//challengeRun, beatBlueBaby, beatTheLamb, bedRoom, blackMarket, beatDelirium, beatMegaSatan