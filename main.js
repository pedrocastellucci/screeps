var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleUpgrader = require("role.builder");

module.exports.loop = function () {
    // Game.spawns['Spawn1'].room.controller.activateSafeMode();
    //Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

    // var tower = Game.getObjectById('9035ca67d2d59ddf9ecffc26');
    // if(tower) {
    //     var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    //         filter: (structure) => structure.hits < structure.hitsMax
    //     });
    //     if(closestDamagedStructure) {
    //         tower.repair(closestDamagedStructure);
    //     }

    //     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //     if(closestHostile) {
    //         tower.attack(closestHostile);
    //     }
    // }

    // for(var name in Memory.creeps) {
    //     if(!Game.creeps[name]) {
    //         delete Memory.creeps[name];
    //         console.log('Clearing non-existing creep memory:', name);
    //     }
    // }


    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    console.log('Harvesters, upgraders, builders: ' + harvesters.length 
    + ' ' + upgraders.length
    + ' ' + builders.length);

    if (harvesters.length < 2) {
        // var newName = 'Harvester' + Game.time;
        // console.log('Spawning new harvester: ' + newName);
        // Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
        //     {memory: {role: 'harvester'}});
        Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE, MOVE], "Adam",
            { memory: { role: "harvester" } });
        Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE, MOVE], "Eve",
            { memory: { role: "harvester" } });

    }
    else if (upgraders.length < 1) {
        Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE, MOVE], "Upgrader1",
            { memory: { role: "upgrader" } });
    }
    else if (builders.length < 1) {
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], "Builder1",
            { memory: { role: "builder" } });
    }

    
    // if(Game.spawns['Spawn1'].spawning) { 
    //     var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
    //     Game.spawns['Spawn1'].room.visual.text(
    //         '🛠️' + spawningCreep.memory.role,
    //         Game.spawns['Spawn1'].pos.x + 1, 
    //         Game.spawns['Spawn1'].pos.y, 
    //         {align: 'left', opacity: 0.8});
    // }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == "harvester") {
            roleHarvester.run(creep);
        }
        else if (creep.memory.role == "upgrader") {
            roleUpgrader.run(creep);
        }
        else if (creep.memory.role == "builder") {
            roleBuilder.run(creep);
        }
    }
}

